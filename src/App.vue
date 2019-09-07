<template>

  <div id="app">
  <app-header></app-header>
    <h2>{{title}}</h2>
    <users></users>
    <app-footer></app-footer>
    
  </div>
</template>

<script>
import Users from './components/Users';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  data(){
    return{
      title:'职位与姓名'
    }
  },
  components:{
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  },
   //  mounted() {
   //      this.getRem(750, 100)
   // }
  
}
</script>

<style scoped>
#app{
  text-align: center;
  /*margin-top:20px;*/
  font-size: 30px;
  color:#F0E68C;
}
</style>
