<template>
  <div class="home">
    

      

          <h1>Dashboard</h1>

<div pt-5 pb-5 class="light text-dark">
           <br>
        <b-container pt-5 pb-5>
           <b-row  align-v="center">
            <b-col mx-auto align-self="left" class="text-center" mx-5 pt-5 pb-5 sm>
              

                  <b-card
                  title="Cumplimiento diario de Órdenes"
                  style="min-width: 10rem;"
                  class="mb-2"
                  >
                  <b-card-text>
                     insertar datos de la api
                  </b-card-text>
                  </b-card>

              <br></b-col>
            <b-col align-self="right" mx-auto class="text-center" mx-5 pt-5 pb-5 sm>
              <b-card
                  title="Órdenes Atrasadas"
                  style="min-width: 10rem;"
                  class="mb-2"
                  >
                  <b-card-text>
                     insertar datos de la api
                  </b-card-text>
                  </b-card>
              
              </b-col>
            </b-row><b-row  align-v="center">
            <b-col align-self="left" mx-auto class="text-center" pt-5 pb-5 sm>
              <b-card
                  title="Últimas Órdenes"
                  style="min-width: 20rem;"
                  class="mb-2"
                  >
                  
                     <!-- insertar datos de la api desde store -->
                     <b-table striped hover :items="ultimas_ordenes"></b-table>
                  
                  </b-card>
              </b-col>
            <b-col align-self="right" mx-auto class="text-center" pt-5 pb-5 sm>
              <b-card
                  title="Últimas Devoluciones"
                  style="min-width: 20rem;"
                  class="mb-2"
                  >
                  
                    <!-- insertar datos de la api desde store -->
                     <b-table striped hover :items="ultimas_devoluciones"></b-table>
                  
                  </b-card>
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

  data() {
      return {
        ultimas_ordenes: [
            {
              "num_orden": "123446",
              "cliente": "Multitiendas Sigma SA",
              "fecha_entrega": "2020-07-20",
              "estado": "Ingresado"
            },
            {
              "num_orden": "123445",
              "cliente": "Jugueteria Asimov SpA",
              "fecha_entrega": "2020-07-20",
              "estado": "Preparacion"
            },
            {
              "num_orden": "123444",
              "cliente": "Bazar Don Lalo LTDA",
              "fecha_entrega": "2020-07-18",
              "estado": "Preparacion"
            },
            {
              "num_orden": "123443",
              "cliente": "Claudia Ingrid Romero",
              "fecha_entrega": "2020-07-18",
              "estado": "Entregado"
            }
          ],
        
        ultimas_devoluciones: [

         {
      "num_orden": "122289",
      "cliente": "Multi Game SpA",
      "fecha_entrega": "2020-07-20"
    },
    {
      "num_orden": "122283",
      "cliente": "Jugueteria Play LTDA",
      "fecha_entrega": "2020-07-20"
    },
    {
      "num_orden": "122271",
      "cliente": "Tiendas La Reina SA",
      "fecha_entrega": "2020-07-18"
    },
    {
      "num_orden": "122232",
      "cliente": "Ofertas Unicas LTDA",
      "fecha_entrega": "2020-07-14"
    } 

        ]
      }
    } ,
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
