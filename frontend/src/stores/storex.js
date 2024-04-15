/*
import { createStore } from 'vuex';

const storex = createStore({
  state() {
    return {
      appaterno: null,
      apmaterno: null,
      nombre1: null,
      nombre2: null,
      carnet: null
    };
  },
  mutations: {
    setDatosbasicos(state, payload) {
        state.appaterno = payload.appaterno;
        state.apmaterno = payload.apmaterno;
        state.nombre1 = payload.nombre1;
    },
  },
  actions: {
    updateDatosbasicos({ commit }, payload) {
      commit('setDatosbasicos', payload);
    },
  },
});

export default storex;
*/


import { defineStore } from 'pinia'

// Define el store
export const useDatosBasicosStore = defineStore({
  id: 'datosBasicos', // Identificador único del store
  // Define el estado inicial del store
  state: () => ({
    appaterno: null,
    apmaterno: null,
    nombre1: null,
    nombre2: null,
    carnet: null,
    codusuario: null
  }),
  // Define las mutaciones para actualizar el estado
  // Las mutaciones son funciones que actualizan el estado del store de manera síncrona
  mutations: {
    setDatosBasicos(state, payload) {
      state.appaterno = payload.appaterno
      state.apmaterno = payload.apmaterno
      state.nombre1 = payload.nombre1
      state.codusuario = payload.codusuario
    }
  },
  // Define las acciones para realizar operaciones asíncronas o lógica de negocio
  actions: {
    updateDatosBasicos(payload) {
        // Accede a la mutación desde el contexto de la acción
        console.log('llego a la accion con' + JSON.stringify(payload) );
        this.$patch({ appaterno: payload.appaterno, apmaterno: payload.apmaterno, nombre1: payload.nombre1, codusuario:payload.codusuario  });
      }
  }
})
