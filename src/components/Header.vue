<template>
  <header> 
  		<h1>{{title}}</h1>
  </header>
</template>

<script>


export default {
  name: 'app-header',
  data () {
    return {
    	title:'Work and Name'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
	background: #696969;
	width:100%;
	height:130px;
	padding:10px;
}
h1{
	padding:0;
	text-align: center;
	margin-top:20px;
	color:blue;
	text-shadow: 4px 3px green;
}
</style>