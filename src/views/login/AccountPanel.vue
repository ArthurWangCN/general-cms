<template>
  <el-form :model="userData" :rules="loginRules" label-width="84px" ref="formData">
    <el-form-item label="用户名" prop="userName">
      <el-input
        v-model="userData.userName"
        placeholder="请输入用户名"
        class="input-class"
      />
    </el-form-item>
    <el-form-item label="密 码" prop="password">
      <el-input
        v-model="userData.password"
        placeholder="请输入密码"
        class="input-class"
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { loginRules } from '@/utils/rules'

export default defineComponent({
  setup() {
    const userData = reactive({
      username: '',
      password: ''
    })
    return {
      userData,
      loginRules
    }
  }
})

</script>

<style scoped lang="less">
.input-class {
  width: 250px;
}
</style>
