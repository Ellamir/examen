<template>

    <div class="mx-auto pt-5 pb-5"> <!-- muestra componente login si no está el usuario --> 
      <h1>Ingreso de usuario</h1>

      <b-form-group class="mx-auto" >
<b-form>
    <label class="sr-only" for="email">Email</label>
    <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0 pb-3">
    <b-input v-model="email" id="email" type="email" placeholder="email@server.com"></b-input> 
    </b-input-group>

    <label class="sr-only" for="inline-form-input-username">Password</label>
    <b-input-group prepend="? " class="mb-2 mr-sm-2 mb-sm-0 pb-3">
      <b-input type="password" v-model="password" class="form-control" id="password" placeholder="Password"></b-input>
    </b-input-group>

      <div class="mx-auto" pb-5 style="width: 350px">
         <b-button mx-auto @click.prevent="ingresar" class="boton1">Ingresar</b-button>

       
     </div>
    </b-form>
</b-form-group>  
          
        

</div>


</template>

<script>
export default {
  name: 'Login',

    methods: {
        ingresar(){
        
    },  
},
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
