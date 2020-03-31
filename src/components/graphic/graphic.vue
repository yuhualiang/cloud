<template>
  <div class="graphic">
    <scroll :data="dataList" class="content">
      <div>
        <sort @clickItem="handleClickItem"></sort>
        <div class="item border-bottom">
          <p class="title">钓鱼：水草边上鲫鱼多，钓鱼人最爱的钓鱼场所哦哦哦</p>
          <p class="time">6小时前</p>
          <div class="graph-wrapper">
            <div class="graph"></div>
            <div class="graph"></div>
            <div class="graph"></div>
          </div>
          <p class="platform">中经云端</p>
        </div>
        <div :key="item.id" v-for="item in dataList" class="item border-bottom">
          <p class="title">{{item.title}}</p>
          <p class="time">{{item.time}}</p>
          <div class="graph-wrapper">
            <div :key="index" v-for="(phot, index) in item.photo" class="graph"></div>
          </div>
          <p class="platform">{{item.name}}</p>
        </div>
      </div>
      <div class="loading-container">
        <loading v-show="!dataList.length"></loading>
      </div>
    </scroll>
  </div>
</template>
<script>
import Sort from '../sort/sort'
import Scroll from '../../common/scroll/scroll'
import Loading from '../../common/loading/loading'
export default {
  components: { Sort, Scroll, Loading },
  data() {
    return {
      dataList: [
        {
          id: 1,
          title: '钓鱼：水草边上鲫鱼多，钓鱼人最爱的钓鱼场所哦哦哦',
          time: '6小时前',
          name: '中经云端',
          photo: [1]
        },
        {
          id: 2,
          title: '钓鱼：水草边上鲫鱼多，钓鱼人最爱的钓鱼场所哦哦哦',
          time: '3小时前',
          name: '中经云端',
          photo: [1, 2, 3]
        },
        {
          id: 3,
          title: '钓鱼：水草边上鲫鱼多，钓鱼人最爱的钓鱼场所哦哦哦',
          time: '2小时前',
          name: '中经云端',
          photo: [1, 2]
        }
      ]
    }
  },
  methods: {
    handleClickItem(id) {
      console.log(id)
    }
  }
}
</script>
<style lang="stylus" scoped>
.graphic {
  position: fixed;
  width: 100%;
  top: 2.4rem; /* 120/50 */
  bottom: 0;

  .content {
    height: 100%;
    overflow: hidden;

    .item {
      padding-top: 0.3rem; /* 15/50 */
      padding-bottom: 0.3rem; /* 15/50 */
      padding-left: 0.08rem; /* 4/50 */
      padding-right: 0.1rem; /* 5/50 */

      .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-bottom: 0.08rem; /* 4/50 */
        font-size: 0.3rem; /* 15/50 */
        color: #1f1f1f;
      }

      .time {
        padding-bottom: 0.12rem; /* 6/50 */
        font-size: 0.24rem; /* 12/50 */
        color: #5d5d5d;
      }

      .graph-wrapper {
        display: flex;
        margin-left: -0.02rem; /* 1/50 */

        .graph {
          flex: 0 1 33.33%;
          width: 33.33%;
          height: 0;
          margin-left: 0.02rem; /* 1/50 */
          padding-bottom: 33%;
          background-image: url('./ad.jpg');
          background-size: 100% 100%;
        }
      }

      .platform {
        padding-top: 0.2rem; /* 10/50 */
        font-size: 0.2rem; /* 10/50 */
        color: #a7a7a7;
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
    }
  }
}
</style>