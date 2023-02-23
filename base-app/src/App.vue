<template>
  <div>
    <!-- ElementPlus 图标测试 -->
    <div>
      <el-icon :size="14" :color="'red'">
        <Edit />
      </el-icon>
    </div>
    <!-- ElementPlus 组件测试 -->
    <div>
      <el-button>应用初始化</el-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
