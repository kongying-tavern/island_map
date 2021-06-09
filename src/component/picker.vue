<template>
  <div class="picker">
      <div class="picker_header">
          <div class="avatar"></div>
      </div>
  </div>
</template>

<script>
export default {
    name:'picker'
}
</script>

<style lang="scss" scoped>
.picker
{
    position: fixed;
    z-index: 9999;
    right: 1vh;
    top: 1vh;
    width: 44.4vh;
    height: 96vh;
    background: url(../assets/Content_img/Content_img/bac.png);
    background-size: 100% 100%;
}
.picker_header
{
    width: 100%;
    height: 25%;
}
</style>