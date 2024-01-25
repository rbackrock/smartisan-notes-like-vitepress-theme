<script setup>
</script>

<template>
  <Content />
</template>

<style>
  .content__container {
    height: 100%;
    overflow: hidden;
  }
</style>

<!-- pc -->
<style lang="less" scoped>
  @media (min-width: 768px) {
    .content__container {

    }
  }
</style>

<!-- mobile -->
<style lang="less" scoped>
  @media (max-width: 768px) {
    .content__container {

    }
  }
</style>