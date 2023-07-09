<template>
    <div class="home-container">
      <div class="home-content">
        <h1 class="home-title">Welcome to SAGA</h1>
        <p class="home-description">
          Experience the power of SAGA, the Qaring's 1-2-3 app, where generating customer journeys is as simple as counting 1-2-3.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeViewer',
  };
  </script>
  
  <style scoped>
  .home-container {
    background: linear-gradient(#0381B8, #0AAABF, #00A89D, #0ABF90, #09B567);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .home-content {
    text-align: center;
    color: white;
  }
  
  .home-title {
    font-size: 48px;
    margin-bottom: 20px;
  }
  
  .home-description {
    font-size: 24px;
    line-height: 1.5;
  }
  </style>
  