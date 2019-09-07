<template>
  <div class="users">
	  <ul>
	  	<li v-for="user in users" v-on:click="user.show=!user.show">
	  		<h2>{{user.name}}</h2>
	  		<h3 v-show="user.show">{{user.position}}</h3>
	  	</li>
	  </ul>
  </div>
</template>

<script>


export default {
  name: 'users',
  data () {
    return {
    	users:[
    	   {name:"lucry",position:"web前端",show:false},
    	   {name:"lucry",position:"java",show:false},
    	   {name:"lucry",position:"php",show:false},
    	   {name:"lucry",position:"软件测试",show:false},
    	   {name:"lucry",position:"软件运维",show:false},
    	]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users{
	color:yellow;
	width:100%;
	max-width: 1200px;
	margin:40px auto;
	padding:0 20px;
	box-sizing: border-box;  
	/*margin-bottom: 240px;*/
}
ul{
		list-style-type:none;
		display:flex;
		flex-wrap:wrap;
		padding:0;
	}
li{
	flex-grow:1;
	flex-basis: 200px;
	text-align:center;
	padding:30px;
	border:2px solid #222;
	margin:10px;

	}
</style>
