// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios'

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
//
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

Vue.filter('formatDate',(str)=>{
	if(!str) return '';

	var date = new Date(str);
	var time = new Date().getTime() - date.getTime();
	if(time<0){
		return '';
	} else if(time / 1000 < 30){
		return 'just now';
	} else if(time / 1000 < 60){
		return parseInt(time / 1000) + ' s ago';
	} else if(time / 60000 < 60){
		return parseInt(time / 60000) + ' min(s) ago';
	} else if(time / 3600000 < 24){
		return parseInt(time / 3600000) + ' hour(s) ago';
	} else if(time / 86400000 < 31) {
		return parseInt(time / 86400000) + ' day(s) ago';
	} else if(time / 86400000*31 < 12) {
		return parseInt(time / 86400000*31) + ' month(s) ago';
	} else {
		return parseInt(1) + ' year ago'
	}

}
)
