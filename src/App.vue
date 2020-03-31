<template>
  <div id="app">
    <div id="nav">
      <m-header></m-header>
      <tab></tab>
    </div>
    <router-view/>
  </div>
</template>
<script>
import MHeader from './components/m-header/m-header'
import Tab from './components/tab/tab'

export default {
  name: 'App',
  components: { MHeader, Tab }
}
</script>
<style lang="stylus">
</style>
