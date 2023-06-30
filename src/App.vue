<template>
  <v-app class="body">
    <nav-view/>

    <v-main>
      <router-view/>
    </v-main>
    <footer-view/>
  </v-app>
</template>

<script>
import Nav from '@/components/home/Nav.vue'
import Footer from '@/components/home/Footer.vue'
export default {
  name: 'App-vue',
  // props: {},
  data: function(){
    return {}
  },
  // computed: {},
  //methods: {}
  // watch: {},
  components: {
    'nav-view': Nav,
    'footer-view': Footer
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>

<style scoped>
  /* .body{
    background:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://images6.alphacoders.com/822/822450.jpg');
    background-size:cover;
        background-attachment: fixed;
        height: 100%;
  } */
</style>