<template>
  <section class="login" :style="background">
    <div class="login-wrapper">
      <Logo />
      <form @submit.prevent="onLogin">
        <b-label for="email">Email</b-label>
        <b-input type="email" :value="form.email" name="email"></b-input>
        <b-label for="password">Senha</b-label>
        <b-input type="password" :value="form.password" name="password"></b-input>
        <b-button type="submit" classes="is-primary">Login</b-button>
        <b-button classes="is-secondary">Esqueci a Senha</b-button>
      </form>
    </div>
  </section>
</template>

<script>
import BaseInput from '@/components/BaseInput'
import BaseLabel from '@/components/BaseLabel'
import BaseButton from '@/components/BaseButton'
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
  }
}
</script>

<style lang="scss">
 @import '@/scss/_variables.scss';

    form {
      margin-top: 20px;
    }
  .login {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .login-wrapper {
    width: 15vw;
    margin: 0 auto;
    background-color: $white;
    padding: 40px;
    border-radius: 25px;
    box-shadow: 0px 5px 0 $white-box-shadow;
  }
</style>