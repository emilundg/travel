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
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  .category-header__left {
    opacity: 0.56;
    text-align: left;
  }

  .landing-page {
  }

  .button-middle {
    display: block;
    margin: 0 auto;
  }

  .font-bold {
    font-weight: bold;
  }

  .category-header__right {
    text-align: right;
  }

  .text-button {
    color: #007bff;
    &:hover {
      cursor: pointer;
    }
  }

  .icon__action {
    height: 34px;
  }

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
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 84%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 84%, 0% 100%);
    background-size: cover;
    background-position: center;
    height: 200px;
  }

  .bg-light {
    background-color: white !important;
  }

  .container-fluid {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12) inset;
    background-color: rgba(250, 250, 250, 1);
    min-height: 90vh;
  }

  .container-fluid,
  .navbar {
    padding: 20px 50px;
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
    font-family: 'Montserrat', sans-serif;
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

  .card-body-content {
    text-align: left;
    padding: 30px;
  }

  .card-text-contact {
    position: absolute;
    bottom: 15px;
  }

  .card-text {
    font-size: small;
    color: rgba(0, 0, 0, 0.56);
  }

  .card-body {
    padding: 0px;
  }

  .card {
    height: 25rem;
    max-width: 20rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border:none;
  }
</style>