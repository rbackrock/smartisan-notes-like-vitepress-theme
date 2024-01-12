<script setup>
import { asideStore } from '../../../../store'
</script>

<template>
  <div :class="{ mobile__show: asideStore.isOpenDropdown }" class="aside__wrapper">
    <div class="aside__container">
      <div class="to__top">
        <div class="to__top__wrapper">回到顶部</div>
      </div>
      <div class="aside__container__wrapper">
        <ul class="list nested">
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
            <ul class="list nested">
              <li class="item">
                <div class="item__wrapper">标题索引1-1</div>
              </li>
            </ul>
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

        .to__top {
          display: none;
        }

        .aside__container__wrapper {
          width: var(--aside-width);
          padding: 26px 26px;
          font-size: 0.8em;
          border-radius: 3px;
          background-image: linear-gradient(#5f5450, #716661);
          box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.1);
          color: #fff;

          .list {

            &.nested {
              padding: 0 0 0 16px;
            }
            .item {
              .item__wrapper {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
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
    .aside__wrapper {
      position: fixed;
      background: linear-gradient(#5f5450, #716661);
      width: 90%;
      top: calc(var(--header-height-mobile) + var(--header-height) + 1vh);
      left: 50%;
      transform: translate(-50%, -20px);
      border-radius: 8px;
      color: #fff;
      opacity: 0;
      z-index: -1;
      transition: all 0.25s, transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);

      .aside__container {
        .to__top {
          display: block;
          padding: 0 16px;
          border-bottom: 1px solid #b9a691;

          .to__top__wrapper {
            line-height: 48px;
            font-size: 0.9em;
          }
        }

        .aside__container__wrapper {
          padding: 8px 0;
          max-height: calc(100vh - var(--header-height-mobile) - var(--header-height) - 1vh - 7vh);
          overflow: auto;

          &::-webkit-scrollbar {
            width: 9px;
            background: var(--scrollbar-color);
          }

          &::-webkit-scrollbar-thumb {
            border-radius: var(--scrollbar-border-radius);
            background: var(--scrollbar-bg);
          }

          .list {
            &.nested {
              padding: 0 16px 0 16px;
            }

            .item {
              .item__wrapper {
                line-height: 32px;
                font-size: 0.8em;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }

      &.mobile__show {
        opacity: 1;
        z-index: 3;
        transform: translate(-50%, 0);
        transition: all 0.25s, transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }
</style>