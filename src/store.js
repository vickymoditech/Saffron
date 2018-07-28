import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {apihost} from './Api'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
      users:[],
      slider:[],
      loader:false
  },
  actions: {

    async initaction({commit,dispatch}){
        await axios.get(apihost+'/api/WebSiteHomes').then(function (response) {
            commit('initmutation', response.data);
            console.log("init action");
        }).catch(function (error) {
            dispatch('initaction');
        });
    },
      async deleteUserAction({commit},id){
          //debugger;
          await axios({
              method: 'delete',
              url: apihost+'/api/users',
              data: {
                  id:id
              }
          }).then(function (response) {
              commit('deleteUserMutation',id);
          }).catch(function (error) {
              console.log(error);
          });
      }

  },
  mutations: {

      initmutation(state,slider){
          state.loader = true;
          state.slider = slider;
      },
      deleteUserMutation(state,id){
          //debugger;
          let index = state.users.findIndex((data) => data.id == id);
          state.users.splice(index, 1);
      }
  }
})



