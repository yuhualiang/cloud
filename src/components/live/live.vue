<template>
  <div class="live">
    <scroll ref="scroll" :data="listData" class="content">
      <div>
        <sort @clickItem="handleClickItem"></sort>
        <vedio-list :states="states" :listData="listData"></vedio-list>
      </div>
      <div class="loading-container">
        <loading v-show="!listData.length"></loading>
      </div>
    </scroll>
  </div>
</template>
<script>
import Sort from 'components/sort/sort'
import VedioList from 'components/vedio-list/vedio-list'
import Scroll from 'common/scroll/scroll'
import Loading from 'common/loading/loading'
// import axios from 'axios'

export default {
  components: { Sort, VedioList, Scroll, Loading },
  data() {
    return {
      states: 'live',
      listData: []
    }
  },
  created() {
    this._getDataList()
  },
  methods: {
    handleClickItem(id) {
      // console.log(id)
    },
    _getDataList() {
      setTimeout(() => {
        this.listData = [
          {
            Title: 'Tcenter产品演讲',
            id: '29362',
            online_number: 51,
            comment: '0',
            coverpicture: 'http://juxian.juyun.tv/images/videoqg.jpg',
            live: 'live/2020030929362.html',
            live_state: 0,
            state: '等待直播',
            name: '泰德网聚',
            photo: 'http://img.juyun.tv/console/2020/02/25/1582613827.jpg'
          },
          {
            Title: 'test',
            id: '29341',
            online_number: 42,
            comment: '11',
            coverpicture: 'http://juxian.juyun.tv/images/videoqg.jpg',
            live: 'live/2020030829341.html',
            live_state: 0,
            state: '等待直播',
            name: '泰德网聚',
            photo: 'http://img.juyun.tv/console/2020/02/25/1582613827.jpg'
          },
          {
            Title: '报名重复提交测试',
            id: '29238',
            online_number: 11,
            comment: '3',
            coverpicture: 'http://juxian.juyun.tv/images/videoqg.jpg',
            live: 'live/2020030329238.html',
            live_state: 0,
            state: '等待直播',
            name: '泰德网聚',
            photo: 'http://img.juyun.tv/console/2020/02/25/1582613827.jpg'
          },
          {
            Title: '围观CMS',
            id: '29178',
            online_number: 30006,
            comment: '5',
            coverpicture: 'http://juxian.juyun.tv/images/videoqg.jpg',
            live: 'live/2020030229178.html',
            live_state: 0,
            state: '等待直播',
            name: '泰德网聚',
            photo: 'http://img.juyun.tv/console/2020/02/25/1582613827.jpg'
          },
          {
            Title: '刷围观测试',
            id: '29177',
            online_number: 30006,
            comment: '0',
            coverpicture: 'http://juxian.juyun.tv/images/videoqg.jpg',
            live: 'live/2020030229177.html',
            live_state: 0,
            state: '等待直播',
            name: '泰德网聚',
            photo: 'http://img.juyun.tv/console/2020/02/25/1582613827.jpg'
          },
          {
            Title: '线上直播课（六年级）',
            id: '29129',
            online_number: 1,
            comment: '1',
            coverpicture: 'https://img.juyun.tv/user/1582878354.jpg',
            live: 'live/2020022829129.html',
            live_state: 0,
            state: '等待直播',
            name: '泰德网聚',
            photo: 'http://img.juyun.tv/console/2020/02/25/1582613827.jpg'
          },
          {
            Title: '线上直播课（五年级）',
            id: '29128',
            online_number: 0,
            comment: '0',
            coverpicture: 'https://img.juyun.tv/user/1582878284.jpg',
            live: 'live/2020022829128.html',
            live_state: 0,
            state: '等待直播',
            name: '泰德网聚',
            photo: 'http://img.juyun.tv/console/2020/02/25/1582613827.jpg'
          },
          {
            Title: '线上直播课（四年级）',
            id: '29127',
            online_number: 1,
            comment: '0',
            coverpicture: 'https://img.juyun.tv/user/1582878242.jpg',
            live: 'live/2020022829127.html',
            live_state: 0,
            state: '等待直播',
            name: '泰德网聚',
            photo: 'http://img.juyun.tv/console/2020/02/25/1582613827.jpg'
          },
          {
            Title: '线上直播课（三年级）',
            id: '29126',
            online_number: 0,
            comment: '0',
            coverpicture: 'https://img.juyun.tv/user/1582878204.jpg',
            live: 'live/2020022829126.html',
            live_state: 0,
            state: '等待直播',
            name: '泰德网聚',
            photo: 'http://img.juyun.tv/console/2020/02/25/1582613827.jpg'
          },
          {
            Title: '线上直播课（二年级）',
            id: '29125',
            online_number: 0,
            comment: '0',
            coverpicture: 'https://img.juyun.tv/user/1582878161.jpg',
            live: 'live/2020022829125.html',
            live_state: 0,
            state: '等待直播',
            name: '泰德网聚',
            photo: 'http://img.juyun.tv/console/2020/02/25/1582613827.jpg'
          }
        ]
      }, 1000)
      // axios.get('./data.json').then(res => {
      //   this.listData = res.data
      // })
    }
  }
}
</script>
<style lang="stylus" scoped>
.live {
  position: fixed;
  width: 100%;
  top: 2.4rem; /* 120/50 */
  bottom: 0;

  .content {
    height: 100%;
    overflow: hidden;

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
    }
  }
}
</style>