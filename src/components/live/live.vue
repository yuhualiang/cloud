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
import Sort from '../sort/sort'
import VedioList from '../vedio-list/vedio-list'
import Scroll from '../../common/scroll/scroll'
import Loading from '../../common/loading/loading'
import axios from 'axios'

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
      console.log(id)
    },
    _getDataList() {
      axios.get('./data.json').then(res => {
        this.listData = res.data
      })
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