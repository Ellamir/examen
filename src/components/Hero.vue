<template>
  <div>
      <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
        <template v-slot:header>ClassicModels</template>

        <template v-slot:lead>
          Jumbotron para desplegar información.
        </template>

            <hr class="my-4">

            <p>
              Una vez que funcione el login, cargaría el <router-link 
                :to="{name: 'Dashboard'}"
                class="navbar_white"
            >Dashboard</router-link>
            </p>
          </b-jumbotron>



  </div>
</template>

<script>
export default {
name: 'Hero',
}
</script>

<style>
.navbar_white {
    text-decoration: underline;
    color: white;
    font-size: 1rem;
    text-align: right;
    }
</style>