<template>
    <div>
      <navbar
        :pages="pages"
        :active-page="activePage"
        :nav-link-click="(index) => activePage = index"
      ></navbar>
  
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import Navbar from './components/Navbar.vue';
  
  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        activePage: 0,
        pages: [
          { link: { text: 'Home', url: '/' } },
          { link: { text: 'Demo', url: '/demo' } },
        ],
      };
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }

  body {
  background: linear-gradient(#0381B8, #0AAABF, #00A89D, #0ABF90, #09B567);
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
  </style>
  