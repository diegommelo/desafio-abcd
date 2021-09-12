<template>
  <div class="logo">
    <img src="@/assets/logo.png" alt="EduEdu Logo">
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss">
  @import '@/scss/_variables.scss';

  .logo {
    text-align: center;
    margin-bottom: 1rem;
    color: $primary;
  }
</style>