<template>
  <div class="home">
    

      

          <h1>Dashboard</h1>

<div pt-5 pb-5 class="light text-dark">
           <br>
        <b-container pt-5 pb-5>
           <b-row  align-v="center">
            <b-col mx-auto align-self="left" class="text-center" mx-5 pt-5 pb-5 sm>
              <h3>Cumplimiento diario de Órdenes</h3>
              <br></b-col>
            <b-col align-self="right" mx-auto class="text-center" mx-5 pt-5 pb-5 sm>
              <h3>Órdenes atrasadas</h3>
              <atrasadas/>
              </b-col>
            </b-row><b-row  align-v="center">
            <b-col align-self="left" mx-auto class="text-center" pt-5 pb-5 sm>
              <h3>Últimas Órdenes</h3>
              </b-col>
            <b-col align-self="right" mx-auto class="text-center" pt-5 pb-5 sm>
              <h3>Últimas Devoluciones</h3>
              </b-col>
          </b-row>
        </b-container>
        <br>
    </div>




<!-- muestra dashboard si hay usuario registrado -->


    


  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  
}    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
b-form {
  text-align: center;
}
</style>
