<template>
  <div class="loading">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.loading {
  width: 100%;
  text-align: center;

  .desc {
    line-height: 0.4rem; /* 20/50 */
    font-size: .28rem /* 14/50 */;
    color: #000;
  }
}
</style>
