<template>
  <div>
  <el-row type="flex" class="row-bg" justify="space-around">
    <el-col :span="11"><register></register></el-col>
    <el-col :span="11"><un-register></un-register></el-col>
  </el-row>
  </div>
</template>

<script>
import Register from '../../components/Register.vue'
import UnRegister from '../../components/UnRegister.vue'
export default {
  components: {
    Register,
    UnRegister
  }
}
</script>