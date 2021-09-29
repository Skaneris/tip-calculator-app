<template>
    <img class="logo" src="./assets/images/logo.svg" alt="Logo">
    <div class="calculator">
        <div class="calculator__left">
            <InputText label="Bill" icon="money" @inputChange="setBill" />
            <div class="clculator__tips">
                <div class="label">Select Tip %</div>
            </div>
            <InputText label="Number of Piople" icon="person" @inputChange="setPiople" />
        </div>
        <div class="calculator__right">
            <button @click="log">Log</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
      const bill = ref(0)
      const piople = ref(0)
      const setBill = value => bill.value = Number(value)
      const setPiople = value => piople.value = Number(value)
      const log = () => console.log({bill: bill.value, piople: piople.value})
      return {
          log, setBill, setPiople
      }
  }
}
</script>

<style lang="sass" scoped>
.clculator__tips
    margin: 0 0 2rem 0
.label
    margin: 0 0 0.5rem 0
    font-size: 0.64rem
    font-weight: 600
</style>