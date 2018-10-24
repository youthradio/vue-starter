import Vue from 'vue'
import Vuex from 'vuex'
import { csvParse } from 'd3-dsv'
Vue.use(Vuex)

const state = {
  isLoading: true,
  markersData: null,
  loadingMarkers: false,
  loadingMap: false,
  mapData: null
}
const actions = {
  fetchData ({ commit }) {
    commit('MAP_DATA');
    commit('MARKERS_DATA');
    //commit('FAKE_DATA');
    //   commit('MAKE_GQL_QUERY', {
    //     url: 'http://localhost:4000/graphql',
    //     query: QUERY('5b930f393f9082129af6bc74')
    // })
  }
}
const mutations = {
  async MARKERS_DATA(state){
    state.loadingMarkers = true;
    state.markersData  = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSBL4rLXWCAs0GloIzk-WODWDiBBLBNVwwkmTPuKoYnVtMgE1-VtT_KhTX5SYJ2davMzwOUrqB2lWq6/pub?gid=304433033&single=true&output=csv')
      .then(res => res.text())
      .then(res => csvParse(res))
      .then(data => {
        delete data.columns;
        return data.map(e => ({
            geo: [parseFloat(e.long), parseFloat(e.lat)],
            address: e.Address
        }))
      });
    state.loadingMarkers = false;
  },
  async MAP_DATA(state){
    state.loadingMap = true;
    state.mapData =  await fetch('maps/all-states-5m.json')
                          .then(res => res.json())
    state.loadingMap = false;
  },
  async MAKE_GQL_QUERY (state, { url, query }) {
      state.isLoading = true;
      const graphqlFetch = async () => {
          const res = await fetch(url, {
            headers: { 'Content-Type': 'application/json' },
            referrer: "no-referrer", // no-referrer, *client
            method: 'POST',
            body: JSON.stringify({ query })
          });
        return res;
      }
      const fetchedData = await graphqlFetch();
      const data = await fetchedData.json();
      state.quizData = data.data.quiz;
      state.isLoading = false;
  }
}
export default new Vuex.Store({
  mutations,
  state,
  actions
})
//
// const QUERY = (id) => `
// query {
//   quiz: getQuizById( id: "${id}" ){
//     id
//     description
//     featureImage
//     questions {
//       id
//       questionOrder
//       questionText
//       featureImage
//       options{
//         id
//         optionText
//         resultText
//         correctOption
//       }
//     }
//   }
// }
// `
