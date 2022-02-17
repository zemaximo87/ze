import Vue from 'vue'
import App from './App.vue'
import router from './routes/router.js';

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
  created () {
    if (sessionStorage.redirect) {
        const redirect = sessionStorage.redirect
        delete sessionStorage.redirect
        this.$router.push(redirect)
    }
}
}).$mount('#app')
