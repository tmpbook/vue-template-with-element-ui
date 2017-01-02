<template>
  <div id="container">
    <TopBar></TopBar>
    <transition>
      <el-row :gutter="20">
        <el-col :span="20" :offset="2"><router-view></router-view></el-col>
      </el-row>
    </transition>
  </div>
</template>

<script>
import TopBar from './TopBar.vue'

export default {
  components: {
    TopBar
  }
}
</script>
