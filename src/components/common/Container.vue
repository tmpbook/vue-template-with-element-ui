<template>
  <div id="container">
    <TopBar></TopBar>
    <transition>
      <router-view></router-view>
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
