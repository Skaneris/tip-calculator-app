import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            bill: 0,
            piople: 0,
        }
    },
    mutations: {
        setBill: (state, value) => state.bill = value,
        setPiople: (state, value) => state.piople = value,
    },
    actions: {
        bill({commit}, val) {
            if(!(/^(?=.*\d)\d*(?:\.\d{0,2})?$/).test(val)) {
                val = val.substr(0, val.length - 1)
            }
            val = (val.length === 0 || val == "0") ? 0 : Number(val)
            commit('setBill', val)
        },
        piople({commit}, val) {
            val = val.replace(/\D/g, '')
            val = (val.length === 0 || val == "0") ? 0 : Number(val)
            commit('setPiople', val)
        }
    }
})

export default store