<template>
  <div class="vedio-list">
    <div v-for="item in listData" :key="item.id"
         class="item border-bottom">
      <div class="text">
        <div v-if="states === 'live'">
          <div class="desc">
            <img class="icon" :src="item.live_state === 1 ? livePng : recPng" />
            <span>{{item.online_number}}人围观</span>
          </div>
          <div class="title">{{item.Title}}</div>
        </div>
        <div v-else>
          <div class="title">{{item.Title}}</div>
          <div class="desc">
            <span>{{item.online_number}}人围观</span>
          </div>
        </div>
        <div class="graph" v-lazy:background-image="item.coverpicture">
        </div>
        <div class="platform">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import livePng from './live.png'
import recPng from './rec.png'

export default {
  props: {
    states: {
      type: String,
      default: 'short'
    },
    listData: {
      type: Array,
      default: () => { return [] }
    }
  },
  data() {
    return {
      livePng,
      recPng
    }
  }
}
</script>
<style lang="stylus" scoped>
.item {
  padding: 0.3rem; /* 15/50 */

  .text {
    .desc {
      padding-bottom: 0.24rem; /* 12/50 */
      font-size: 0.24rem; /* 12/50 */
      color: #5d5d5d;

      .icon {
        width: 0.92rem; /* 46/50 */
        height: 0.3rem; /* 15/50 */
        padding-right: 0.12rem; /* 6/50 */
        vertical-align: bottom;
      }
    }

    .title {
      padding-bottom: 0.24rem; /* 12/50 */
      font-size: 0.3rem; /* 15/50 */
      color: #1f1f1f;
    }

    .graph {
      width: 100%;
      height: 0;
      overflow hidden
      padding-bottom: 55%
      background-size: 100% 100%
      img {
        width: 100%;
        height 3.8rem /* 190/50 */
      }
    }

    .platform {
      padding-top: 0.2rem; /* 10/50 */
      font-size: 0.2rem; /* 10/50 */
      color: #a7a7a7;
    }
  }
}
</style>