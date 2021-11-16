<template>
  <div class="check-button" :class="{check:isChecked}">
  </div>
</template>

<script>
export default {
  name: "checkButton",
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.check-button{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--color-high-text);
}

.check{
  background-color: var(--color-high-text);
}
</style>
