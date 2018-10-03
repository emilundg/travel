<template>
  <div id="app">
    <div>
      <b-navbar class="b-navbar" toggleable="md" type="light" variant="light">

        <b-navbar-brand href="#">Activinder</b-navbar-brand>

        <b-navbar-brand href="#">{{this.hotel}}</b-navbar-brand>

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
          <b-input prepend="Username" v-model="hotelInput" placeholder="Enter hotel" class="mb-3">
          </b-input>

          <b-button variant="outline-success" @click="submitHotel()">Go!</b-button>
        </b-card>
      </div>
    </b-container>

    <b-container v-if="tab === 1" class="container-fluid" fluid>

      <div class="row">
        <div class="col-lg-4">
          <b-card title="Golf with John" img-src="https://www.ottawatourism.ca/wp-content/uploads/2014/11/Ottawa-Golf.jpg" img-alt="Image" img-top tag="article" class="m-5">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-button href="#" variant="outline-primary">Contact</b-button>
          </b-card>
        </div>

        <div class="col-lg-4">
          <b-card title="Tennis with Emil" img-src="https://bloximages.newyork1.vip.townnews.com/southbendtribune.com/content/tncms/assets/v3/editorial/1/21/1216bbb5-8e12-5dc4-8674-329468528375/5af81423deea5.image.jpg?resize=1200%2C800" img-alt="Image" img-top
            tag="article" class="m-5">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-button href="#" variant="outline-primary">Contact</b-button>
          </b-card>
        </div>

        <div class="col-lg-4">
          <b-card title="Football with Tom" img-src="https://www.presstelegram.com/wp-content/uploads/2018/01/xxxx_spo_ocr-l-soccer-generic-stock-0013.jpg?w=620" img-alt="Image" img-top tag="article" class="m-5">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-button href="#" variant="outline-primary">Contact</b-button>
          </b-card>
        </div>

        <div class="col-lg-4">
          <b-card title="Gocarting with group" img-src="https://simracewaydrivingschool.com/wp-content/uploads/2016/12/30313610826-26681396-1.jpg" img-alt="Image" img-top tag="article" class="m-5">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-button href="#" variant="outline-primary">Contact</b-button>
          </b-card>
        </div>

        <div class="col-lg-4">
          <b-card title="Pub crawl" img-src="https://static.vinepair.com/wp-content/uploads/2017/06/ind-internal.jpg" img-alt="Image" img-top tag="article" class="m-5">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-button href="#" variant="outline-primary">Contact</b-button>
          </b-card>
        </div>
      </div>

    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    data() {
      return {
        tab: 0,
        hotel: '',
        hotelInput: ''
      }
    },
    created() {},
    methods: {
      submitHotel() {
        this.hotel = this.hotelInput
        this.changeTab(1);
      },
      changeTab(tab) {
        this.tab = 1
      }
    }
  }
</script>