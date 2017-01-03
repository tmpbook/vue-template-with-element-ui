<template>
  <div>
    <!--<el-card class="box-card">-->
      <h3>未注册用户</h3>
      <div v-for="user in users">
        <h4>{{ user.name }}</h4>
        <el-button type="success" size="small" @click="registerUser(user)">注册</el-button>
        <hr>
      </div>
    <!--</el-card>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      users: 'unregisterdUsers'
    })
  },
  methods: {
    registerUser (user) {
      this.$store.dispatch('register', user.id)
    }
  }
}
</script>