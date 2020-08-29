<template>
  <div id="app">
    
    <Navegacion/>
    <router-view/>
    <Footer/>
    
  </div>
</template>


<script>
import { apiCall } from "./config/apiConfig";
import Navegacion from './components/Navegacion';
import Footer from './components/Footer';

export default {
  name: 'App',
  data() {
    return {
      apiResultado: null
    }
  },
  
  components: {
    Navegacion, 
    Footer,
 },
  methods: {
    ordenes(){
      apiCall('ordenes').then(response =>{
        console.log(response.data); //objeto
        // console.log(response.included); //arreglo
        this.$store.dispatch('guardaDataOrdenes',response);
      }).catch(error => console.error(error));
    },
     oficinas(){
      apiCall('oficinas').then(response =>{
        console.log(response.data); //objeto
        //console.log(response.included); //arreglo
        this.$store.dispatch('guardaDataOficinas',response);
      }).catch(error => console.error(error));
    } 
  }, 
  mounted(){
    apiCall('dashboard');
    //ordenes();
    //oficinas();

    
  }

}


</script>

<style lang="scss">
 @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap');
* {
  font-family: 'Exo 2', sans-serif;
  text-align: center;
} 
</style>