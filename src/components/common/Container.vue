<template>
  <div id="container">
    <TopBar></TopBar>
    <transition name="slide-fade">
      <router-view class="content"></router-view>
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
<style lang="scss">
.content {
  padding: 10px;
}
</style>