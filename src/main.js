// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Users from './components/Users'

Vue.config.productionTip = false
// Vue.prototype.getRem = getRem

//全局注册组件：
// Vue.component("users",Users);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
//   mounted  () {
//   this.getRem(750, 100)
// }
});
// export function getRem (pwidth, prem) {
//   var html = document.getElementsByTagName('html')[0];
//   var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
//   html.style.fontSize = oWidth / pwidth * prem + 'px';
// }
