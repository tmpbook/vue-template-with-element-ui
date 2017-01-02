<template>
  <div id="container">
    <TopBar></TopBar>
    <transition>

      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="20"><router-view></router-view></el-col>
        <!--<el-col :span="6"><router-view></router-view></div></el-col>-->
      </el-row>

      <!--<el-row>
        <el-col :span="23"><router-view></router-view></div></el-col>
      </el-row>-->
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
