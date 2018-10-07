import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from './router';
import VueFirestore from 'vue-firestore';
import VModal from 'vue-js-modal';
import * as VueGoogleMaps from 'vue2-google-maps';


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyABasqkze227FJreKVd47E-_XofcczXBBI',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})

Vue.use(VModal);

Vue.use(VueFirestore);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router
});