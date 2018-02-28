<template>
   <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" 
          v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
          v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userErrors() {
      let status, errorText;
      if (!(/@/g).test(this.usernameModel)) {
        status = false;
        errorText = "密码不是1-6位";
      } else {
        status = true;
        errorText = "";
      }

      if (!this.userFlag) {
        status = true;
        errorText = "";
      }

      return {
        status: status,
        errorText: errorText
      };
    },
    passwordErrors() {
      let status, errorText;
      if (!(/^\w{1,6}$/g).test(this.passwordModel)) {
        status = false;
        errorText = "密码错误，请输入1~6位密码";
      } else {
        status = true;
        errorText = "";
      }

      if (!this.userFlag) {
        status = true;
        errorText = "";
      }

      return {
        status: status,
        errorText: errorText
      };
    }
  },
  data() {
    return {
      usernameModel: "",
      passwordModel: "",
      errorText: ""
    };
  },
  methods: {
    // closeMyself() {
    //   this.$emit("on-close");
    // },
    onLogin() {
      this.$http.get("api/login").then(
        (data) => {
          this.$emit("login-success", data.body.data);
        },
        (error) => {
          this.errorText = "登陆失败，用户名或密码不正确";
          console.log("error", error);
        }
      );
    }
  }
};
</script>

<style scoped>

</style>
