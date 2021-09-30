<template>
    <button @click="clickHandler">{{ buttonTitle }}</button>
</template>

<script>
import { toRef } from 'vue'
export default {
    name: 'NumeredButton',
    props: {
        title: {
            type: String,
            default: ''
        },
        buttonValue: {
            type: Number,
            default: 0
        }
    },
    setup(props, {emit}) {
        const button = toRef(props, 'buttonValue')
        const title = toRef(props, 'title')
        const buttonTitle = button.value ? button.value.toString() + '%' : title.value
        const clickHandler = () => {
            emit('buttonClick', button.value)
        }
        return {
            buttonTitle, clickHandler
        }
    }
}
</script>

<style lang="sass" scoped>
button
    width: 136px
    height: 44px
    font-size: 0.8rem
    font-weight: 600
    color: #FFFFFF
    border: none
    outline: none
    background: hsl(183, 100%, 15%)
    border-radius: 0.2rem
    cursor: pointer
    &:hover
        color: hsl(183, 100%, 15%)
        background: lighten(hsl(172, 67%, 45%), 20)
    &.active
        font-weight: 600
        color: hsl(183, 100%, 15%)
        background: hsl(172, 67%, 45%)
    &.custom
        color: hsl(183, 100%, 15%)
        background: hsl(189, 41%, 97%)
        &:hover
            border: 2px solid lighten(hsl(172, 67%, 45%), 20)
    @media screen and ( min-width: 800px )
        flex: 1 1 30%
            
</style>