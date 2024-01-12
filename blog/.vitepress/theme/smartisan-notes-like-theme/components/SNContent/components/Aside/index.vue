<script setup>
</script>

<template>
  <div class="aside__wrapper">
    <div class="aside__container">
      <div class="aside__container__wrapper">
        <ul class="list">
          <li class="item">
            <div class="item__wrapper">标题索引1</div>
          </li>
          <li class="item">
            <div class="item__wrapper">标题索引1</div>
          </li>
          <li class="item">
            <div class="item__wrapper">标题索引1</div>
          </li>
          <li class="item">
            <div class="item__wrapper">标题索引1</div>
          </li>
          <li class="item">
            <div class="item__wrapper">标题索引1</div>
          </li>
          <li class="item">
            <div class="item__wrapper">标题索引1</div>
          </li>
          <li class="item">
            <div class="item__wrapper">标题索引1</div>
          </li>
          <li class="item">
            <div class="item__wrapper">标题索引1</div>
          </li>
        </ul>
      </div>

      <div class="tape t1" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  @media (min-width: 768px) {
    .aside__wrapper {
      flex: 0 0 calc(var(--aside-width) + 80px);

      .aside__container {
        position: fixed;
        top: 16vh;
        right: 64px;
        z-index: 9;

        .aside__container__wrapper {
          width: var(--aside-width);
          padding: 26px 26px;
          background-image: linear-gradient( 135deg, #FDEB71 10%, #F8D800 100%);
          box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.1);
          font-size: 0.8em;
          border-radius: 3px;

          .list {
            .item {
              .item__wrapper {}
            }
          }
        }

        .tape {
          position: absolute;
          width: 29px;
          height: 45px;
          background-image: url(./tape.png);
          background-repeat: no-repeat;
          background-position: 100% 100%;
          background-size: cover;

          &.t1 {
            top: -25px;
            left: 50%;
            transform: rotate(352deg) translate(-50%, 0);
          }

          &.t2 {
            top: -9px;
            right: -20px;
            transform: rotate(62deg);
          }

          &.t3 {
            bottom: -36px;
            right: 46%;
            transform: rotate(330deg);
          }
        }
      }
    }
  }
</style>

<style lang="less" scoped>
  @media (max-width: 768px) {
    .aside__container {
      display: none;
    }
  }
</style>