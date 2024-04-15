
import { defineStore } from 'pinia'

// Define el store
export const usePlanillaPStore = defineStore({
  id: 'datosPlanillaP', // Identificador único del store
  // Define el estado inicial del store
  state: () => ({
    nivel: null,
    clasificacion: null,
    fuente: null,
    cargo: null,
    puesto: null
  }),
  // Define las mutaciones para actualizar el estado
  // Las mutaciones son funciones que actualizan el estado del store de manera síncrona
  mutations: {
    setPlanillaP(state, payload) {
      state.nivel = payload.nivel
      state.clasificacion = payload.clasificacion
      state.fuente = payload.fuente
      state.cargo = payload.cargo
      state.puesto = payload.puesto
    }
  },
  // Define las acciones para realizar operaciones asíncronas o lógica de negocio
  actions: {
    updatePlanillaP(payload) {
        // Accede a la mutación desde el contexto de la acción
        console.log('llego a la accion con' + JSON.stringify(payload) );
        this.$patch({ nivel: payload.nivel, clasificacion: payload.clasificacion, fuente: payload.fuente, cargo:payload.cargo, puesto:payload.puesto   });
      }
  }
})
