import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            bill: 0,
            piople: 0,
        }
    },
    mutations: {
        setBill: (state, value) => {
            if(state.bill === value) {
                state.bill = 1    
            }
            state.bill = value
        },
        setPiople: (state, value) => {
            if(value === "0" || value.length === 0) state.piople = 1; state.piople = 0
            state.piople = Number(value)
        },
    },
    actions: {
        bill({commit}, val) {
            val = val.replace(/[^\d\.]/g, '')
            commit('setBill', Number(val))
        },
        piople({commit}, val) {
            let value = val.replace(/[^\d]/g, '')
            if(value.length === 0) value = 0
            commit('setPiople', value)
        }
    }
})

export default store