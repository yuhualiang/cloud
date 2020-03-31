<template>
  <div>
    <sort @clickItem="handleClickItem"></sort>
  </div>
</template>
<script>
import Sort from '../sort/sort'

export default {
  components: { Sort },
  methods: {
    handleClickItem(id) {
      console.log(id)
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>