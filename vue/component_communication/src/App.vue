<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <communication></communication> -->
    <!-- <slot-example></slot-example> -->
    <form-example></form-example>
  </div>
</template>

<script>
// import communication from '@/components/communication';
// import SlotExample from '@/components/solt'
import FormExample from '@/components/from'
export default {
  name: 'app',
  components: {
    FormExample
    // SlotExample,
    // communication
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
