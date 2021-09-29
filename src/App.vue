<template>
    <img class="logo" src="./assets/images/logo.svg" alt="Logo">
    <div class="calculator">
        <div class="calculator__left">
            <InputText label="Bill" icon="money" @inputChange="setBill" />
            <div class="clculator__tips">
                <div class="label">Select Tip %</div>
                <div class="calculator__buttons">
                    <NumeredButton v-for="val of buttons" :buttonValue="val" :key="val" 
                        :class="{active: activeValue === val}"
                        @buttonClick="setActiveValue" />
                    <NumeredButton title="Custom" class="custom" @buttonClick="setActiveValue" />
                </div>
            </div>
            <InputText label="Number of Piople" icon="person" @inputChange="setPiople" />
        </div>
        <div class="calculator__right">
            <div class="calculator_res_row">
                <div class="title">
                    <p>Tip Amount</p>
                    <span>/ person</span>
                </div>
                <div class="value">${{ tip }}</div>
            </div>
            <div class="calculator_res_row">
                <div class="title">
                    <p>Total</p>
                    <span>/ person</span>
                </div>
                <div class="value">${{ total }}</div>
            </div>
            <button class="reset" @click="log">Reset</button>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
    name: 'App',
    setup() {
        const bill = ref(0)
        const piople = ref(0)
        const activeValue = ref(0)

        const setBill = value => bill.value = Number(value)
        const setPiople = value => piople.value = Number(value)
        const buttons = [5, 10, 15, 25, 50]
        const setActiveValue = val => activeValue.value = val

        const tip = computed(() => {
            if(piople.value === 0) return "0.00"
            const res = bill.value * activeValue.value / piople.value / 100
            if(res > 0) return res.toFixed(2)
            return "0.00"
        })

        const total = computed(() => {
            if(piople.value === 0) return "0.00"
            const res = (bill.value * activeValue.value / 100 + bill.value) / piople.value
            if(res > 0) return res.toFixed(2)
            return "0.00"
        })

        const log = () => console.log({bill: bill.value, piople: piople.value})
        return {
            log, buttons, setBill, setPiople, setActiveValue, activeValue, tip, total
        }
    }
}
</script>

<style lang="sass" scoped>
.calculator__left
    padding: 0 0.3rem   
.clculator__tips
    margin: 0 0 1.5rem 0
.label
    margin: 0 0 0.5rem 0
    font-size: 0.64rem
    font-weight: 600
.calculator__right
    margin: 0 0 1.5rem 0
    padding: 1.5rem 0.9rem 0.9rem 0.9rem
    background: hsl(183, 100%, 15%)
    border-radius: 0.54rem
    .calculator_res_row
        margin: 0 0 1rem 0
        display: flex
        justify-content: space-between
        align-items: center
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
</style>