import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyB961DaIQO6X2Q155OlWSH-9nj3n_Nns_k',
      authDomain: 'ad-project-kkw.firebaseapp.com',
      databaseURL: 'https://ad-project-kkw.firebaseio.com',
      projectId: 'ad-project-kkw',
      storageBucket: 'ad-project-kkw.appspot.com',
      messagingSenderId: '894294696163',
      appId: '1:894294696163:web:b4db276477290aead8e5d6'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
