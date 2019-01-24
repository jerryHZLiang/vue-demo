<template>
	<div>
		<span>
			outer: {{getOuterCount}}
		</span>
		<br>
		-----<button @click="oadd">父组件改变状态</button>
		<br>
		-----<button @click="oaddaction">父组件改变状态(action)</button>
	</div>
</template>

<script>
 export	default {
	 name:'outer',
	 computed:{
		 getOuterCount:function(){
			 return this.$store.state.num;
		 }
	 },
	 methods: {
		 	oadd(){
				this.$store.commit('increase');
			},
			oaddaction(){
				this.$store.dispatch('decreaseAction');
			}
	 },
 }
</script>

<style>
</style>
