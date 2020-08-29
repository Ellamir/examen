<template>
  <div>
      <h1>Órdenes</h1>


  </div>
</template>

<script>
import { apiCall } from "../config/apiConfig";

export default {
name: 'Ordenes',

methods: {
    ordenes(){
      apiCall('ordenes').then(response =>{
        console.log(response.data); //objeto
        // console.log(response.included); //arreglo
        this.$store.dispatch('guardaDataOrdenes',response);
      }).catch(error => console.error(error));
    },
     
  }, 

  mounted(){
    this.ordenes();
    

    
  }

}


</script>

<style>

</style>