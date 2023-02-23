<template>
  <div class="root-app-container">
    <!-- ElementPlus 图标测试 -->
    <div class="test-icon">
      <el-icon :size="14" :color="'red'">
        <Edit />
      </el-icon>
    </div>
    <!-- ElementPlus 组件测试 -->
    <div class="test-element">
      <el-button>应用初始化</el-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.root-app-container {
  width: 100%;
  height: 100%;
  .test {
    &-icon {
      background-color: rgb(34, 255, 0);
    }
    &-element {
      background-color: var(--theme-color);
    }
  }
}
</style>
