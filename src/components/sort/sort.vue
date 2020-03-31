<template>
  <div class="sort border-bottom">
    <div
      @click="handleItemClick(index, item.id)"
      :key="item.id"
      class="item"
      :class="active === index ? 'ac' : ''"
      v-for="(item, index) in sortList"
    >{{item.val}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2
    }
  },
  props: {
    sortList: {
      type: Array,
      default: () => {
        return [
          { id: 1, val: '全部' },
          { id: 2, val: '体育赛事' },
          { id: 3, val: '美食专家情亲推荐' },
          { id: 4, val: '直播视频' },
          { id: 5, val: '旅游资讯点' },
          { id: 6, val: '活动' },
          { id: 7, val: '美食节' },
          { id: 8, val: '新闻' }
        ]
      }
    }
  },
  methods: {
    handleItemClick(index, id) {
      this.active = index
      this.$emit('clickItem', id)
    }
  }
}
</script>
<style lang="stylus" scoped>
.sort {
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.2rem; /* 10/50 */
  padding: 0.3rem; /* 15/50 */
  padding-bottom: 0.1rem; /* 5/50 */

  .item {
    min-width: 1rem; /* 50/50 */
    height: 0.5rem; /* 25/50 */
    line-height: 0.5rem; /* 25/50 */
    margin-left: 0.2rem; /* 10/50 */
    margin-bottom: 0.2rem; /* 10/50 */
    padding: 0 0.2rem; /* 10/50 */
    border: 0.02rem /* 1/50 */ solid #1b9ed4;
    border-radius: 0.4rem; /* 20/50 */
    text-align: center;
    font-size: 0.28rem; /* 14/50 */
    color: #666;
    &.ac {
      color: #fff;
      background: #1b9ed4;
    }
  }
}
</style>