<template>
  <div class="menu-mobile">
    <div class="menu-header">
      <router-link to="/">
        <Logo class="mini-logo" />
      </router-link>
      <div class="hamburger">
        <button type="button" @click="toggleMenu">
          <font-awesome-icon icon="bars" size="2x" />
        </button>
      </div>
    </div>
    <nav class="navbar">
      <ul class="nav-menu" v-if="isOpen">
        <router-link to="/kids">
          <li class="nav-item">
            <font-awesome-icon
              icon="user-circle"
              size="lg"
              class="nav-item__icon"
            />
            Perfil dos Alunos
          </li>
        </router-link>
        <router-link to="#">
          <li class="nav-item">
            <font-awesome-icon
              icon="file-signature"
              size="lg"
              class="nav-item__icon"
            />
            Prova de Português
          </li>
        </router-link>
        <router-link to="#">
          <li class="nav-item">
            <font-awesome-icon
              icon="desktop"
              size="lg"
              class="nav-item__icon"
            />
            Atividades Digitais
          </li>
        </router-link>
        <router-link to="#">
          <li class="nav-item">
            <font-awesome-icon
              icon="question-circle"
              size="lg"
              class="nav-item__icon"
            />
            Ajuda
          </li>
        </router-link>
        <router-link to="#">
          <li class="nav-item">
            <font-awesome-icon icon="cog" size="lg" class="nav-item__icon" />
            Configurações
          </li>
        </router-link>
        <a href="#" @click="onLogout">
          <li class="nav-item">
            <font-awesome-icon
              icon="sign-out-alt"
              size="lg"
              class="nav-item__icon"
            />
            Sair
          </li>
        </a>
      </ul>
    </nav>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import {mapActions} from "vuex";
import logoutMixin from "@/mixins/logoutMixin";

export default {
  name: "MenuMobile",
  components: {
    Logo,
  },
  mixins: [logoutMixin],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    ...mapActions(["userLogout"]),
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
.menu-mobile {
  height: 8vh;
  background-color: $background-color-dark;
  box-shadow: 0 4px 0 $background-color-dark-shadow;
}
.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.menu-mobile .navbar {
  display: flex;
}
.nav-menu {
  flex-direction: column;
  background-color: $white;
  width: 100vw;
  text-align: left;
  transition: 0.3s;
  box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  margin: 0;
  padding: 0;
  z-index: 1;
  background-color: $background-color-dark;
  box-shadow: 0 4px 0 $background-color-dark-shadow;
}

.nav-menu.active {
  left: 0;
}

.nav-item {
  margin: 2.5rem 0;
}
.nav-item__icon {
  margin-right: 0.5rem;
}
.nav-menu li {
  list-style: none;
  padding-left: 30px;
}

.nav-menu a {
  text-decoration: none;
  font-size: 1.1rem;
  color: $text-color;
}
.hamburger {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
}
.hamburger button {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
.mini-logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
.mini-logo img {
  width: 15vw;
  padding: 10px;
  margin-top: 10px;
}
</style>
