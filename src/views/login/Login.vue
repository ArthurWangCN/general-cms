<template>
  <div class="login-class">
    <div class="login-panel">
      <h1 class="title">通用后台管理系统</h1>

      <el-tabs
        type="border-card"
        class="demo-tabs"
        v-model="activeName"
        stretch
      >
        <el-tab-pane name="account">
          <template #label>
            <span> <user-filled class="icon-size" />账号登录 </span>
          </template>
          <account-panel></account-panel>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <span> <iphone class="icon-size" />手机登录 </span>
          </template>
          <phone-panel></phone-panel>
        </el-tab-pane>
      </el-tabs>

      <div class="account-control">
        <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>

      <el-button type="primary" class="login-btn" @click="LoginClick"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import AccountPanel from "./AccountPanel.vue";
import PhonePanel from "./PhonePanel.vue";

export default defineComponent({
  components: {
    AccountPanel,
    PhonePanel,
  },
  setup() {
    let activeName = ref("account");
    let isKeepPassword = ref(true);
    
    return {
      activeName,
      isKeepPassword
    };
  },
});
</script>

<style scoped lang="less">
.login-class {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/images/login-bg.svg");
  .login-panel {
    .icon-size {
      width: 12px;
      height: 12px;
      margin-right: 8px;
    }
    .title {
      text-align: center;
    }

    .account-control {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }

    .login-btn {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
