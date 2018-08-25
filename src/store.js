import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {apihost} from './Api'

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        users: [],
        gallery: [],
        loader: false,
        serviceLoader: true,
        service: [],
        teamLoader: true,
        team: [],
    },
    actions: {

        async initaction({commit, dispatch}) {
            await axios.get(apihost + 'api/Gallerys').then(function (response) {
                commit('initmutation', response.data);
                console.log("init action");
            }).catch(function (error) {
                dispatch('initaction');
            });
        },

        async initServiceAction({commit, dispatch}) {
            await axios.get(apihost + 'api/Services').then(function (response) {
                commit('initServicemutation', response.data);
                console.log("init service action");
            }).catch(function (error) {
                dispatch('initServiceAction');
            });
        },

        async initTeamAction({commit, dispatch}) {
            await axios.get(apihost + 'api/Teams').then(function (response) {
                commit('initTeammutation', response.data);
                console.log("init Team action");
            }).catch(function (error) {
                dispatch('initTeamAction');
            });
        },


        async deleteUserAction({commit}, id) {
            //debugger;
            await axios({
                method: 'delete',
                url: apihost + '/api/users',
                data: {
                    id: id
                }
            }).then(function (response) {
                commit('deleteUserMutation', id);
            }).catch(function (error) {
                console.log(error);
            });
        }

    },
    mutations: {

        initmutation(state, gallery) {
            state.loader = true;
            state.gallery = gallery;
        },
        initServicemutation(state, serviceAll) {
            let rearrange = serviceAll;
            let service = [];
            let innerService = [];
            rearrange.forEach(function (data, i) {
                if ((i + 1) % 3 === 0 || i === (rearrange.length - 1)) {
                    innerService.push(data);
                    service.push(innerService);
                    innerService = [];
                } else {
                    innerService.push(data);
                }
            });
            state.service = service;
            state.serviceLoader = true;
        },
        initTeammutation(state, teamAll) {
            let rearrange = teamAll;
            let team = [];
            let innerTeam = [];
            rearrange.forEach(function (data, i) {
                if ((i + 1) % 4 === 0 || i === (rearrange.length - 1)) {
                    innerTeam.push(data);
                    team.push(innerTeam);
                    innerTeam = [];
                } else {
                    innerTeam.push(data);
                }
            });
            state.team = team;
            state.teamLoader = true;
        },
        deleteUserMutation(state, id) {
            //debugger;
            let index = state.users.findIndex((data) => data.id === id);
            state.users.splice(index, 1);
        }
    }
})



