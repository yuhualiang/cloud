<template>
  <div class="m-header border-bottom">
    <div class="icon"></div>
    <div class="text">
      <p class="title">中经云端</p>
      <p class="dec">一个致力于现场直播的APP</p>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.m-header {
  display: flex;
  padding-top: 0.3rem; /* 15/50 */
  padding-right: 0.3rem; /* 15/50 */
  padding-left: 0.3rem; /* 15/50 */
  padding-bottom: 0.2rem; /* 10/50 */

  .icon {
    flex: 0 0 1rem; /* 50/50 */
    width: 1rem; /* 50/50 */
    height: 1rem;
    background-image: url('./logo.png');
    background-size: 1rem 1rem; /* 50/50 */
  }

  .text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 0.08rem; /* 4/50 */
    padding-left: 0.24rem; /* 12/50 */

    .title {
      font-size: 0.34rem; /* 17/50 */
      color: #333;
    }

    .dec {
      font-size: 0.24rem; /* 12/50 */
      color: #999;
    }
  }
}
</style>