<template>
  <div class="container">
    <sidebarComp></sidebarComp>
    <div class="content">
      <router-view> </router-view>
    </div>
  </div>
</template>
<script setup>
import sidebarComp from '@/components/sidebarComp.vue'
</script>
<style scoped>
.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
