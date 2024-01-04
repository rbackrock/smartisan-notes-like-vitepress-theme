<script setup>
import DynamicUnderline from '../DynamicUnderline/index.vue'
</script>

<template>
  <header class="header">
    <div class="who__container">
      <div class="who__wrapper"><span>[rback@blog ~] # </span><DynamicUnderline /></div></div>
    <div class="buttons">
      <div class="button__wrapper home">
        <div class="button__container"><span class="button">首页</span></div>
      </div>
      <div class="button__wrapper about">
        <div class="button__container"><span class="button">关于</span></div>
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height);
    padding: 0 3vw;
    box-shadow: rgba(0,0,0,.15) 0 1px 8px;
    background: linear-gradient(#716661,#5f5450);

    .who__container {
      color: #fff;
      font-size: 1.2em;
      font-weight: 450;
    }

    .buttons {
      .button__wrapper {
        display: inline-block;

        &.home {
          padding: 0 0.9vw 0 0;
        }

        .button__container {
          padding: 1px;
          border-radius: 8px;
          line-height: 3.6vh;
          background: #cacaca;
          background: rgba(0, 0, 0, .2);
          font-size: 1.1em;
          cursor: pointer;

          .button {
            display: inline-block;
            vertical-align: top;
            padding: 0 16px;
            background: linear-gradient(#716661, #5f5450);
            color: #fff;
            box-shadow: 0 1px rgba(255,255,255,.1) inset;
            border-radius: 7px;

            &:hover {
              background: linear-gradient(#8e7968, #7e6c5e);
            }
          }
        }
      }
    }
  }
</style>