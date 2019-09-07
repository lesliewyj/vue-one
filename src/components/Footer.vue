<template>
  <footer>
  	 <h2> {{title}}</h2>
  </footer>
</template>

<script>


export default {
  name: 'app-footer',
  data () {
    return {
    	title:"copyright@2019 vue学习"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
	background: #F0E68C;
	width:100%;
	height:130px;
	padding:10px;
}
h2{
	padding:0;
	text-align: center;
	margin-top:20px;
	color:#E0FFFF;
}
</style>