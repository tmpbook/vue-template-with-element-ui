<template>
  <div>
    <!--<el-card class="box-card">-->
      <h3>已注册用户 ({{ total }})</h3>
      <div v-for="user in users">
        <h4>{{ user.name }}</h4>
        <el-button type="danger" size="small" @click="unregisterUser(user)">注销</el-button>
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
      users: 'registerdUsers',
      total: 'totalRegistrations'
    })
  },
  methods: {
    unregisterUser (registration) {
      this.$store.commit({
        type: 'unregister',
        userId: registration.userId
      })
    }
  }
}
</script>