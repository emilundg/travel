<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  .list-group-item {
    border: none;
  }

  .card-img-top {
    height: 150px;
  }

  .bg-light {
    background-color: white !important;
  }

  .container-fluid {
    min-height: 91vh;
    border: 20px solid white;
    border-radius: 45px;
    background-color: rgba(255, 209, 212, 1.0);
  }

  input {
    border-radius: 50px !important;
  }

  .btn {
    min-width: 100px;
    border-radius: 50px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  .row {
    justify-content: center;
  }

  .front,
  .back {
    backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  .invalid-feedback {
    width: 100%;
    margin-top: .25rem;
    color: #dc3545;
  }

  .card {
    border: none;
  }
</style>