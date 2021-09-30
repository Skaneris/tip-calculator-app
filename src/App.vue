<template>
    <div class="wrapper">
        <img class="logo" src="./assets/images/logo.svg" alt="Logo" role="banner">
        <div class="calculator" role="main">
            <div class="calculator__left">
                <InputText label="Bill" icon="money" />
                <div class="clculator__tips">
                    <div class="label">Select Tip %</div>
                    <div class="calculator__buttons">
                        <NumeredButton v-for="val of buttons" :buttonValue="val" :key="val" 
                            :class="{active: persent === val}"
                            @buttonClick="setPersent" />
                        <input ref="input" v-if="custom" class="custom-input" type="text" v-model="persent" @input="setCustomPersent">
                        <NumeredButton v-else title="Custom" class="custom" @buttonClick="setCustom" />
                    </div>
                </div>
                <InputText label="Number of Piople" icon="person" />
            </div>
            <div class="calculator__right">
                <div class="calculator_res_row">
                    <div class="title">
                        <p>Tip Amount</p>
                        <span>/ person</span>
                    </div>
                    <div class="value">${{ tip }}</div>
                </div>
                <div class="calculator_res_row _last">
                    <div class="title">
                        <p>Total</p>
                        <span>/ person</span>
                    </div>
                    <div class="value">${{ total }}</div>
                </div>
                <button class="reset" @click="reset">Reset</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'App',
    setup() {
        const store = useStore()
        const input = ref(null)

        const persent = ref(0)
        const custom = ref(false)

        const buttons = [5, 10, 15, 25, 50]
        const setPersent = val => {
            custom.value = false
            persent.value = val
        }

        const setCustom = val => {
            persent.value = val
            custom.value = true
            setTimeout(() => input.value.focus(), 0)
        }
        const setCustomPersent = ev => {
            const val = Number(ev.target.value.match(/\d{1,4}/))
            if(val < 0) val = 0
            ev.target.value = val
        }

        const tip = computed(() => {
            if(store.state.piople === 0) return "0.00"
            const res = store.state.bill * persent.value / store.state.piople / 100
            if(res > 0) return res.toFixed(2)
            return "0.00"
        })

        const total = computed(() => {
            if(store.state.piople === 0) return "0.00"
            const res = (store.state.bill * persent.value / 100 + store.state.bill) / store.state.piople
            if(res > 0) return res.toFixed(2)
            return "0.00"
        })

        const reset = () => {
            persent.value = 0
            custom.value = false
            store.state.bill = 0
            store.state.piople = 0
        }

        return {
            input, buttons, setPersent,
            persent, tip, total, custom, setCustomPersent, setCustom, reset,
        }
    }
}
</script>

<style lang="sass" scoped>
.calculator__left
    padding: 0 0.3rem   
.clculator__tips
    margin: 0 0 1.5rem 0
    @media screen and ( min-width: 800px )
        margin: 0 0 1rem 0
    .custom-input
        width: 136px
        height: 44px
        font-size: 1rem
        font-weight: 600
        text-align: center
        border: 2px solid hsl(172, 67%, 45%)
        border-radius: 0.2rem
        outline: none
        @media screen and ( min-width: 800px )
            width: 84px
            flex: 1 1 30%
.label
    margin: 0 0 0.5rem 0
    font-size: 0.64rem
    font-weight: 600
.calculator__right
    margin: 0
    padding: 1.5rem 0.9rem 0.9rem 0.9rem
    background: hsl(183, 100%, 15%)
    border-radius: 0.54rem
    .calculator_res_row
        margin: 0 0 1rem 0
        display: flex
        justify-content: space-between
        align-items: center
        @media screen and ( min-width: 800px )
            margin: 0 0 1.5rem
        .title
            font-size: 0.6rem
            font-weight: 600
            color: hsl(0, 0%, 100%)
            p
                margin: 0 0 0.26rem
            span
                color: hsl(184, 14%, 56%)
        .value
            font-size: 1.2rem
            font-weight: 600
            color: hsl(172, 67%, 45%)
            @media screen and ( min-width: 800px )
                font-size: 1.6rem
    button
        width: 100%
        height: 44px
        font-size: 0.8rem
        font-weight: 600
        color: hsl(183, 100%, 15%)
        text-transform: uppercase
        background: hsl(172, 67%, 45%)
        border: none
        border-radius: 0.2rem
        outline: none
        cursor: pointer
        &:hover
            background: lighten(hsl(172, 67%, 45%), 26)
    @media screen and (min-width: 800px)
        margin: 0 0 1rem 0
        ._last
            flex: 1 0 auto
            align-items: flex-start
</style>