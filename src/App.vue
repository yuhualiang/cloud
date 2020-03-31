<template>
  <div id="app">
    <div id="nav">
      <m-header></m-header>
    </div>
    <router-view/>
  </div>
</template>
<script>
import MHeader from './components/m-header/m-header'
export default {
  name: 'App',
  components: { MHeader }
}
</script>
<style lang="stylus">
</style>
