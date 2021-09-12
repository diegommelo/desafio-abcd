<template>
  <div class="menu-lateral">
    <Logo size="small"/>
    <ul>
      <li>
        <font-awesome-icon icon="user" />
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'MenuLateral',
  components: {
    Logo
  }
}
</script>

<style lang="scss">
@import '../../scss/_variables.scss';

ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.menu-lateral {
  width: 20vw;
  background-color: $white;
}
</style>