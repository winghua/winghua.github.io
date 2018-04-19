<template>
	<div class="head">
		<router-link :to="{name:'home'}">
			<img src="../assets/cnodejs_light.svg" alt="">
		</router-link>
		<span><a href="###">about</a></span>
	</div>
</template>

<script>
	export default{
		name:'Cheader',
		data(){
			return {}
		}
	}
</script>

<style scoped >
	.head{
		background: #5a5555;
		height: 50px;
		line-height: 50px;
		text-align:left;
	}
	a{
		text-decoration: none;
		color:#cbc9c9;
	}
	img{
		max-width: 120px;
		margin-left: 50px;
		margin-top: 10px;
	}
	span{
		float:right;
		margin-right: 50px;
	}
</style>