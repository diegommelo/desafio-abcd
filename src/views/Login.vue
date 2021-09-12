<template>
  <section class="login" :style="background">
    <div class="login-wrapper">
      <Logo size="small" />
      <form @submit.prevent="onLogin">
        <div class="form-group">
          <b-label for="email">Email</b-label>
          <b-input type="email" :value="form.email" name="email"></b-input>
          <b-label for="password">Senha</b-label>
          <b-input type="password" :value="form.password" name="password"></b-input>
        </div>
        <b-button type="submit" classes="is-primary">Login</b-button>
        <b-button classes="is-secondary">Esqueci a Senha</b-button>
      </form>
    </div>
  </section>
</template>

<script>
import BaseInput from '@/components/Base/BaseInput'
import BaseLabel from '@/components/Base/BaseLabel'
import BaseButton from '@/components/Base/BaseButton'
import Logo from '@/components/Logo'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    'b-label': BaseLabel,
    'b-input': BaseInput,
    'b-button': BaseButton,
    Logo
  },
  computed: {
    background () {
      return {
        backgroundImage: `url(${require('@/assets/login_bg.png')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }
  },
  methods: {
    onLogin () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
 @import '@/scss/styles.scss';

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