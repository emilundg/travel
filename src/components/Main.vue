<template>
  <div id="app">
    <div>
      <b-navbar class="b-navbar" toggleable="md" type="light" variant="light">

        <b-navbar-brand href="#">Activinder</b-navbar-brand>

        <b-navbar-brand href="#">{{ hotel }}</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="button" v-if="tab !== 0" v-bind:active="tab === 1" v-on:click="tab = 1" href="#">Activities</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <b-container v-if="tab === 0" class="container-fluid" fluid>
      <div class="row">
        <b-card class="col-md-4 col-sm-8 p-5 m-5">
          <h2 class="m-5">Welcome to Activinder!</h2>
          <!-- Using components -->

          <b-form>
            <b-input prepend="Username" v-model="hotelInput" placeholder="Enter hotel" class="mb-3">
            </b-input>
            <p style="color: #dc3545; font-size: 80%; margin-top: 0.25rem;"> {{ this.errorMessage }} </p>
            <b-button variant="outline-success" @click="submitHotel()">Go!</b-button>
          </b-form>
        </b-card>
      </div>
    </b-container>

    <b-container v-if="tab === 1" class="container-fluid" fluid>

      <div class="row">

        <div class="col-lg-4" v-for="item in activities" :key="1">
          <b-card :title="item.title" :img-src="item.imgSrc" img-alt="Image" img-top tag="article" class="m-5">
            <p class="card-text">
              {{item.description}}
            </p>
            <b-button href="#" variant="outline-primary">Contact</b-button>
          </b-card>
        </div>
      </div>

    </b-container>
  </div>
</template>

<script>
  import Firebase from 'firebase/app'
  import 'firebase/firestore'

  var config = {
    apiKey: "AIzaSyAyUdMQx43tJJk6gJj19xGOknuVKFF9QAk",
    authDomain: "activityfinder-1538566316348.firebaseapp.com",
    databaseURL: "https://activityfinder-1538566316348.firebaseio.com",
    projectId: "activityfinder-1538566316348",
    storageBucket: "activityfinder-1538566316348.appspot.com",
    messagingSenderId: "607548876330"
  };

  export default {
    name: 'app',
    components: {},
    data() {
      return {
        tab: 0,
        hotel: '',
        hotelInput: '',
        error: false,
        errorMessage: '',
        activities: []
      }
    },
    created() {
      if (!Firebase.apps.length) {
        Firebase.initializeApp(config)
      }
      Firebase.firestore().settings({
        timestampsInSnapshots: true
      });

    },
    methods: {
      async submitHotel() {
        await this.$binding("act", Firebase.firestore().collection(this.hotelInput))
          .then((act) => {
            if (act.length === 0) {
              this.errorMessage = 'No hotel activities found!'
            } else {
              this.activities = act
              this.hotel = this.hotelInput
              this.changeTab(1);
            }
          })
      },
      changeTab(tab) {
        this.tab = 1
      }
    }
  }
</script>