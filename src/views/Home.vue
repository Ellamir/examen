<template>
  <div class="home">
    <hero/>
    <login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Login from '@/components/Login.vue'


export default {
  name: 'Home',
  components: {
    Hero,
    Login
  }
}



/* mounted() {
    if (this.$store.state.login) {
          // ;  
    var user = true;
    }            
    }else{
      this.$router.push('/login');
    },
  
*/ 
</script>
