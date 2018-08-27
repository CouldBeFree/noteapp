// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import noteEditor from './components/noteEditor'
import notesGrid from './components/notesGrid'
import note from './components/note'
import router from './router'

Vue.component('noteEditor', noteEditor);
Vue.component('note', note);
Vue.component('notesGrid', notesGrid);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
