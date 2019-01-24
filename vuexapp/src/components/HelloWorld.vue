<template>
  <div class="hello">
 <parent />
 <out />
  </div>
</template>

<script>
import parent from './parent'
import out from './outer'
export default{
	name:'HelloWorld',
	data:function(){
		return {
			msg:'welcome to helloworld'
		}
	},
	components:{
		parent,
		out
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
