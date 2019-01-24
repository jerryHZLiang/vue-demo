<template>
	<div>
	<span>我是父组件</span><br>
	<span>----{{fromSonMsg}}</span><br>
	我是父组件全局状态：{{getCount}}
	---<button @click="padd">父组件改变状态</button>
	<br>
	---<button @click="paddaction">父组件改变状态(action)</button>
	<hr>
	<son :msg="toSonMsg" @handle="getMsgFromSon"></son>
	
	</div>

</template>

<script>
	import son from './son'
	export default {
		name: 'parent',
		components:{
			son
		},
		data:function(){
			return {
				toSonMsg:'i am your father',
				fromSonMsg: ''
			}
		},
		methods:{
			getMsgFromSon:function(value){
				this.fromSonMsg = value
			},
			padd(){
				this.$store.commit('increase');
			},
			paddaction(){
				this.$store.dispatch('decreaseAction');
			}
		},
		computed:{
			getCount: function(){
				return this.$store.getters.getNum;
			}
		}
	}
</script>

<style scoped>
</style>
