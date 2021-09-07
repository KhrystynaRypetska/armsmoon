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

      return axios.get(`http://localhost:8080/hr/public/getVacancies?alias=staffingpartner`)
          .then((response) => {
            commit("SET_DATA_TO_STATE", response.data.objects);
          } )
          .catch((error) => {
              console.log(error);
              return error;
          })
    },
    GET_VACANCY_FROM_API({commit}, vacancyId) {
        return axios.get(`http://localhost:8080/hr/public/getVacancy?host=&id=${vacancyId}`)
            .then((response) => {
                commit("SET_VACANCY_TO_STATE", response.data.object)
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
