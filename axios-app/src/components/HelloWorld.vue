<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>axiosdemo</h2>
    <button @click="getData">get发送数据</button>
    <button @click="postData">post发送数据</button>
    <ul>
       <li v-for="item in items">
       {{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Vue  from 'vue'
import qs from 'qs'
Vue.prototype.$http = axios;

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:[]
    }
  },
  methods: {
//   getData(){
//   var self = this;
//   this.$http.get('https://cnodejs.org/api/v1/topics')
//   .then(function (res) {
// //此处的this指向的不是当前vue实例
//     self.items = res.data.data
//     console.log(res.data.data)
//   })
//   .catch(function (err) {
//     console.log(err)
//   })
getData(){
  this.$http.get('https://cnodejs.org/api/v1/topics',{
    params:{
      page:1,
      limit:10
      }
    })
  .then(res=>{
    this.items = res.data.data
  })
  .catch(err=>{
    console.log(err)
  })
},
postData(){
  this.$http.post(url,qs.stringify({
    params:{
      page:1,
      limit:20
      }
    }))
  .then(res=>{
    this.items = res.data.data
  })
  .catch(err=>{
    console.log(err)
  })
}
}

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
