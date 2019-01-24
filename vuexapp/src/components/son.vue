<template>
	<div>
		<span>我是子组件==={{msg}}</span>
		<br>
		我是全局状态：{{getNum}}
		<button @click="sendMsg">向父组件传递数据</button>
		
		<br>
		---<button @click="sadd">子组件改变状态</button>
		---<button @click="saddaction">子组件改变状态(action)</button>
	</div>
</template>

<script>
	export default{
		name: 'son',
		data:function(){
			return {
				sendFaMsg:"我是子组件数据"
			}
		},
		props:{
			msg:{
				type: String,
				default:''
			}
		},
		methods:{
			sendMsg:function(){
				this.$emit('handle',this.sendFaMsg)
			},
			sadd(){
				this.$store.commit('increase');
			},
			saddaction(){
				this.$store.dispatch('decreaseAction');
			}
		},
		computed:{
			getNum: function(){
				return this.$store.state.num;
			}
		}
	}
</script>

<style scoped>
</style>

