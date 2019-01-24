import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

//创建状态仓库，注意Store,state不能改
export default new Vuex.Store({
    state:{
      num:88
    },
    mutations:{
      increase(state){
        state.num += 20;
      },
      decrease(state){
        state.num -= 20;
      }
    },
    //actions对mutation操作
    actions:{
      decreaseAction:function(context){
        context.commit('decrease');
      }
    },
    getters:{
      getNum(state){
        return state.num > 0 ? state.num: 0;
      }
    }
  })
  