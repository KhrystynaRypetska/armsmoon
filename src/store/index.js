import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    items: [],
    vacancy: {},
  },
  mutations: {
      SET_DATA_TO_STATE: (state, data) => {
          state.data = data;
      },
      SET_ITEMS_TO_STATE: (state, items) => {
          state.items.push(...items)
      },
      SET_VACANCY_TO_STATE: (state, vacancy) => {
          state.vacancy = vacancy
      }

  },
  actions: {
    GET_DATA_FROM_API({commit}) {
        const config = {
            headers: {
                // "Access-Control-Allow-Origin": "origin",
                // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
                // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                // "Access-Control-Max-Age": "3600",
                // "Access-Control-Allow-Credentials": "true"
            }
        };

      return axios.get(`https://cleverstaff.net/hr/public/getVacancies?alias=staffingpartner`, config)
          .then((response) => {
            commit("SET_DATA_TO_STATE", response.data.objects);
          } )
          .catch((error) => {
              console.log(error);
              return error;
          })
    },
    GET_VACANCY_FROM_API({commit}, vacancyId) {
        return axios.get(`https://cleverstaff.net/hr/public/getVacancy?host=&id=${vacancyId}`)
            .then((response) => {
                console.log(response.data, '----- LOG ----')
                commit("SET_VACANCY_TO_STATE", response.data)
            })
    }
  },
  getters: {
   DATA(state) {
     return state.data
   },
    ITEMS(state) {
       return state.items
    },
     VACANCY(state) {
       return state.vacancy
     }
  },
  modules: {
  }
})
