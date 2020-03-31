<template>
  <div class="tab border-bottom">
    <router-link tag="div" to="/live" class="tab-item">
      <div class="tab-link">
        直播
        <span class="num">({{num[0].val}})</span>
      </div>
      <span class="divide border-right"></span>
    </router-link>
    <router-link tag="div" to="/short-vedio" class="tab-item">
      <div class="tab-link">
        短视频
        <span class="num">({{num[1].val}})</span>
      </div>
      <span class="divide border-right"></span>
    </router-link>
    <router-link tag="div" to="/graphic" class="tab-item">
      <div class="tab-link">
        图文
        <span class="num">({{num[2].val}})</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    num: {
      type: Array,
      default: () => {
        return [
          { id: 1, val: 9 },
          { id: 2, val: 18 },
          { id: 3, val: 0 }
        ]
      }
    }
  }
}
</script>
<style lang="stylus">
.tab {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;

  .tab-item {
    flex: 1;
    text-align: center;
    position: relative;
    height: 0.9rem; /* 45/50 */
    line-height: 0.9rem; /* 45/50 */
    font-size: 0.28rem; /* 14/50 */
    color: #333;

    .divide {
      position: absolute;
      top: 12px;
      right: 0;
      height: 20px;
    }

    .num {
      color: #999;
    }

    &.router-link-active {
      color: #1b9ed4;

      .num {
        color: #1b9ed4;
      }

      .tab-link {
        display: inline-block;
        line-height: 1;
        padding-bottom: 0.28rem; /* 14/50 */
        border-bottom: 0.04rem /* 2/50 */ solid #1b9ed4;
      }
    }
  }
}
</style>