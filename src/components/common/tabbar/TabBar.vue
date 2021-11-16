<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
/*fixed left和right必须同时设置，否则元素宽度会出现问题*/
#tab-bar{
  display: flex;
  background: #f6f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -1px 1px 1px rgba(100,100,100,.4);
}

</style>
