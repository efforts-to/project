<template>
  <div class="category">
    <nav-bar>
      <div slot="center">分类</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Category",
  components:{
    NavBar
  }
}
</script>

<style scoped>
.category{
  background-color: var(--color-high-text);
  color: #ffffff;
}
</style>
