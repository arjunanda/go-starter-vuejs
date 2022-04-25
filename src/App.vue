<template>
  <Home />
  <div v-if="dataSession">
    <Dashboard />
  </div>
  <div v-else>
    <LandingPage />
  </div>

</template>

<script>



import LandingPage from './views/LoginPage.vue'
import Dashboard from './views/DashboardPage.vue'
export default {
  name: 'App',
  components: {
    Dashboard,
    LandingPage
  },
  data() {
      return{
        error_msg: null,
        success_msg: null,
        dataSession: null

      }  
  },
  mounted() {
    this.dataSession = localStorage.getItem("token")


      if (this.dataSession == null) {
          var link = "./dist/js/script.js"
       } else {
         var link = "../dist/js/script_db.js"
       }
       
       const plugin = document.createElement("script");
      plugin.setAttribute(
        "src",
        link
      );
      plugin.async = true;
      document.head.appendChild(plugin);
    
  }

}
</script>