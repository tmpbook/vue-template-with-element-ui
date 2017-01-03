<template>
  <div id="container">
    <TopBar></TopBar>
    <transition>
      <router-view class='content'></router-view>
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
<style lang="sass">
.content
  padding: 10px;
</style>