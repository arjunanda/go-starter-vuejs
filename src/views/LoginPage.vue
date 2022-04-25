<template>
  <Header />
  <router-view />
</template>

<script>
import Header from '../Landing/layouts/HeaderNav.vue';

export default {
  components: {
    Header
  },
}

</script>
