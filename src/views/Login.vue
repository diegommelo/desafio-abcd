<template>
  <section class="login" :style="background">
    <div class="login-wrapper">
      <Logo size="small" />
      <form @submit.prevent="onLogin">
        <div class="form-group">
          <b-label for="email">Email</b-label>
          <b-input
            type="email"
            v-model="form.email"
            name="email"
            icon="envelope"
          ></b-input>
          <b-label for="password">Senha</b-label>
          <b-input
            type="password"
            v-model="form.password"
            name="password"
            icon="eye-slash"
          ></b-input>
        </div>
        <b-button type="submit" classes="is-primary">Login</b-button>
      </form>
      <b-button classes="is-secondary">Esqueci a Senha</b-button>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'


export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters(["isError", "isLoggedIn", "errorMessage"]),
    background() {
      return {
        backgroundImage: `url(${require("@/assets/login_bg.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    },
  },
  methods: {
    ...mapActions(["userLogin"]),
    onLogin() {
      this.userLogin(this.form).then(() => {
        this.$router.push("/kids");
      }).catch(() => {
        console.log(this.errorMessage)
      })
    },
  }
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";

.login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-wrapper {
  width: 70vw;
  margin: 0 auto;
  background-color: $white;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0px 5px 0 $white-box-shadow;
}

//ipad
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .login-wrapper {
    width: 30vw !important;
  }
}

//responsive
@media screen and (min-width: 376px) {
}

@media screen and (min-width: 576px) {
  .login-wrapper {
    width: 20vw;
  }
}

@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {
}

@media screen and (min-width: 1200px) {
  .login-wrapper {
    width: 15vw;
  }
}
</style>
