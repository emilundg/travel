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
  .navbar-brand__center {
    position: absolute;
    width: 50px;
    left: 50%;
    margin-left: -25px;
  }

  .v-spinner {
    position: absolute;
    top: 50vh;
    left: 47.5vw;
  }

  input[type="file"] {
    display: none;
  }

  form {
    margin: 0 auto;
  }

  .fileInput {
    span {
      float: left;
      opacity: 0.7;
    }
    img {
      height: 17px;
      float: right;
      margin-right: 8px;
    }
    max-height: 38px;
    overflow: hidden;
    width: 100%;
    border: 1px solid #ced4da;
    padding: .375rem .75rem;
  }

  legend {
    text-align: left;
    font-size: inherit;
  }

  .v--modal {
    text-align: inherit;
  }

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

  input,
  .fileInput {
    border-radius: 50px !important;
  }

  .btn {
    text-transform: uppercase;
    >img {
      max-width: 18px;
      margin-right: 8px;
    }
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