<template>
  <div id="app">
    <div>
      <b-navbar v-if="tab !== 0" class="b-navbar" toggleable="md" type="light" variant="light">

        <b-navbar-brand class="navbar-brand" href="#"><img src="/static/images/logo.svg"/></b-navbar-brand>

        <b-navbar-brand class="navbar-brand__center" href="#">{{ hotel }}</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse  is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="button" v-if="tab !== 0" v-bind:active="tab === 1" v-on:click="tab = 1" href="#">Activities</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <b-container v-if="tab === 0" class="container-fluid landing-page" fluid>
      <div class="row">
        <div class="mt-5 col-12 col-sm-10 col-md-7 col-lg-6">
          <img class="mb-4 logo" src="/static/images/logo.svg"/>
          <!-- <h2 class="mb-4 landing-page-header">Activinder</h2> -->
          <div class="card-body-content">
          <b-form>
            <b-input prepend="Username" v-model="hotelInput" placeholder="Enter hotel" class="mb-4">
            </b-input>
            <p style="color: #dc3545; font-size: 80%; margin-top: 0.25rem;"> {{ this.errorMessage }} </p>
            <b-button class="button-middle" variant="outline-secondary" @click="submitHotel">Go!</b-button>
          </b-form>
          </div>
        </div>
      </div>
    </b-container>

    <b-container v-if="tab === 1" class="container-fluid" fluid>

      <div class="row" style="justify-content: flex-end">

        <modal height="auto" width="60%" name="hello-world">
          <dot-loader :loading="loading" :color="color"></dot-loader>
          <div class="m-5">
            <h2 class="mb-5">Add Activity</h2>

            <b-form class="col-lg-8" @submit="onSubmit">

              <b-form-group label="Title:">
                <b-form-input type="text" v-model="form.title" required placeholder="Enter title">
                </b-form-input>
              </b-form-group>

              <b-form-group label="Image:">
                <label @model="form.image" style="display: block;">
                                              <div class="fileInput">
                                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDA5cHgi%0D%0AIGhlaWdodD0iMzI3cHgiIHZpZXdCb3g9IjAgMCA0MDkgMzI3IiB2ZXJzaW9uPSIxLjEiIHhtbG5z%0D%0APSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMu%0D%0Ab3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MC4yICg1NTA0Nykg%0D%0ALSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+VXBs%0D%0Ab2FkPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRl%0D%0AZnM+PC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRo%0D%0APSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJVcGxv%0D%0AYWQiIGZpbGw9IiMyMTkxRjUiPgogICAgICAgICAgICA8ZyBpZD0iVXBsb2FkLTIiPgogICAgICAg%0D%0AICAgICAgICAgPGcgaWQ9IlBhZ2UtMSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikljb25z%0D%0AIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM5Ny4wMzQ2NjcsMzI2LjMzMTg5%0D%0AIEw4OC41NzYsMzI2LjMzMTg5IEMzOS42ODMyMjcxLDMyNi4zMDgzNzIgMC4wNDcwNzQ1MzUyLDI4%0D%0ANi42OTEzMTIgMCwyMzcuNzk4NTU2IEMwLjM3MDEwNjI3NiwyMzEuNzMxMTgxIDUuMzk4NjgwMTgs%0D%0AMjI3IDExLjQ3NzMzMzMsMjI3IEMxNy41NTU5ODY1LDIyNyAyMi41ODQ1NjA0LDIzMS43MzExODEg%0D%0AMjIuOTU0NjY2NywyMzcuNzk4NTU2IEMyMy4wMDE3MjI0LDI3NC4wMTM4MDEgNTIuMzYwNzMxOCwz%0D%0AMDMuMzUzNzIyIDg4LjU3NiwzMDMuMzc3MjIzIEwzMTkuNTU2NTc5LDMwMy4zNzcyMjMgQzM1NS43%0D%0ANDgyNiwzMDMuMzMwMTY3IDM4NS4wNjkwNzgsMjczLjk5MDI2IDM4NS4wOTI1NzksMjM3Ljc5ODU1%0D%0ANiBDMzg1LjQ2MjY4NSwyMzEuNzMxMTgxIDM5MC40OTEyNTksMjI3IDM5Ni41Njk5MTIsMjI3IEM0%0D%0AMDIuNjQ4NTY1LDIyNyA0MDcuNjc3MTM5LDIzMS43MzExODEgNDA4LjA0NzI0NiwyMzcuNzk4NTU2%0D%0AIEM0MDguMDExOTgzLDI4Ni42NjI4OTcgMzY4LjQyMDg5NywzMjYuMjczMDcyIDMxOS41NTY1Nzks%0D%0AMzI2LjMzMTg5IEwzOTcuMDM0NjY3LDMyNi4zMzE4OSBaIiBpZD0iVXBsb2FkLTIiIGZpbGwtcnVs%0D%0AZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTM1%0D%0ALjYxMzkzOSw5Ni43MDk4NDIxIEMxMzIuMjM1NzU0LDk4Ljk2OTg3NTQgMTI5LjUyOTk3NiwxMDAu%0D%0AMDk5ODkyIDEyNy40OTY2MDYsMTAwLjA5OTg5MiBDMTI0LjQ0NjU1LDEwMC4wOTk4OTIgMTIxLjUy%0D%0AMzM4NCw5OC44NzkwODc1IDExOS4zNzkyNzMsOTYuNzA5ODQyMSBDMTE3LjIxNjYxMiw5NC41NjY1%0D%0ANTA4IDExNiw5MS42NDc5NzQyIDExNiw4OC42MDMxNzU0IEMxMTYsODUuNTU4Mzc2NyAxMTcuMjE2%0D%0ANjEyLDgyLjYzOTgwMDEgMTE5LjM3OTI3Myw4MC40OTY1MDg4IEwxOTYuNDEzOTM5LDMuMzc2NTA4%0D%0ANzcgQzE5Ny4xNDQ1MSwyLjY0NzA0MTE2IDE5Ny45NzgzMDUsMi4wMjg4ODI5OSAxOTguODg4NjA2%0D%0ALDEuNTQxODQyMSBDMjAzLjc2MDg4OSwtMS4yODQ4OTUyMSAyMDkuOTY2ODEyLC0wLjEzNDMwODA2%0D%0AMyAyMTMuNTAxOTM5LDQuMjUxMTc1NDQgTDI4OS43NDcyNzMsODAuNDk2NTA4OCBDMjkzLjc5NTQy%0D%0ALDg1LjA1MTM1MjQgMjkzLjU4NzE5OSw5MS45NzMzNTA1IDI4OS4yNzI1OTEsOTYuMjc2NjM0MiBD%0D%0AMjg0Ljk1Nzk4MywxMDAuNTc5OTE4IDI3OC4wMzU0NjEsMTAwLjc2OTk0NiAyNzMuNDkxMjczLDk2%0D%0ALjcwOTg0MjEgTDIxNi4wODMyNzMsMzkuMzAxODQyMSBMMjE2LjA4MzI3MywyMTUuNTMzOTQ3IEMy%0D%0AMTYuMDcxNjUsMjIxLjg2MzAzNCAyMTAuOTU2MjczLDIyNi45OTc0NjIgMjA0LjYyNzI3MywyMjcu%0D%0AMDMyNjEzIEMxOTguMjgxNjA0LDIyNy4wMjA4NzMgMTkzLjE0MDM0NiwyMjEuODc5NjE2IDE5My4x%0D%0AMjg2MDYsMjE1LjUzMzk0NyBMMTkzLjEyODYwNiwzOS4xMDk4NDIxIEwxMzUuNjEzOTM5LDk2Ljcw%0D%0AOTg0MjEgWiIgaWQ9IlVwbG9hZC0yLXBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8%0D%0AL2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAg%0D%0AICA8L2c+Cjwvc3ZnPg=="
                                                />
                                                <span v-if="!form.image.name">
                                                        Select File
                                                      </span>
                                                <span @model="form.image" v-else>
                                                        <p>
                                                          {{form.image.name}}
                                                        </p>
                                                      </span>
                                                <b-form-file :state="Boolean(file)" type="file" @change="manageUpload" v-model="form.image" accept="image/jpeg, image/png" plain required>
                                                </b-form-file>
                                              </div>
                                              </label>
              </b-form-group>

              <b-form-group label="Contact:">
                <b-form-input type="text" v-model="form.contact" required placeholder="Enter contact">
                </b-form-input>
              </b-form-group>

              <b-form-group label="Description:">
                <b-form-input type="text" v-model="form.description" required placeholder="Enter description">
                </b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
          </div>
        </modal>
        <!-- Using components -->
      </div>

      <div class="row mt-4">
        <div class="category-header__left col-7 col-sm-4 col-md-3 col-lg-2">
          Current Activities
          <hr>
        </div>
        <div class="col-2 col-sm-6 col-md-8 col-lg-9"></div>
        <div class="category-header__right text-button col-3 col-sm-2 col-md-1 col-lg-1">
          <a @click="show()" variant="outline-primary">ADD</a>
          <hr>
        </div>
      </div>

      <div class="row mt-4" style="justify-content: flex-start;">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="item in activities" :key="1">
          <b-card class="mb-4">
            <div class="card-img-top" v-bind:style="{ backgroundImage: 'url(' + item.imgSrc + ')' }"></div>
            <div class="card-body-content">
              <h5 class="card-header-own">{{item.title}}</h5>
              <p class="card-text">
                {{item.description}}
              </p>
              <div class="card-text-contact">tel: <a :href="'tel:' + item.contact"> {{item.contact }} </a></div>
            </div>
          </b-card>
        </div>
      </div>

    </b-container>
  </div>
</template>

<script>
  import Firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/storage'
  import DotLoader from 'vue-spinner/src/DotLoader.vue'


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
    components: {
      'DotLoader': DotLoader
    },
    data() {
      return {
        file: null,
        tab: 0,
        hotel: '',
        hotelInput: '',
        error: false,
        errorMessage: '',
        activities: [],
        color: "rgba(33, 147, 245, 0.5)",
        loading: false,
        form: {
          image: '',
          description: '',
          contact: '',
          title: ''
        },
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
      onSubmit(e) {
        this.loading = true;
        // Add a new document with a generated id.
        e.preventDefault();
        const collectionRef = Firebase.firestore().collection(this.hotelInput);
        var storageRef = Firebase.storage().ref();
        var ref = storageRef.child(this.form.image.name);
        var self = this;
        ref.put(this.form.image).then(function(snapshot) {
          ref.getDownloadURL().then(function(url) {
            collectionRef
              .add({
                title: self.form.title,
                description: self.form.description,
                imgSrc: url,
              })
              .then(function() {
                window
                  .location
                  .reload();
              })
              .catch(function(error) {
                console.error("Error adding document: ", error);
              });
          })
        });
      },
      manageUpload(event) {
        this.form.image = event.target.files[0];
      },
      show() {
        this.$modal.show('hello-world');
      },
      hide() {
        this.$modal.hide('hello-world');
      },
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