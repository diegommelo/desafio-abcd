<template>
  <nav class="menu-lateral">
    <div class="menu-lateral__content">
      <Logo size="small" />
      <ul>
        <router-link to="/kids">
          <li>
            <font-awesome-icon
              icon="user-circle"
              size="lg"
              class="menu-lateral-icon"
            />
            Perfil dos Alunos
          </li>
        </router-link>
        <router-link to="#">
          <li>
            <font-awesome-icon
              icon="file-signature"
              size="lg"
              class="menu-lateral-icon"
            />
            Prova de Português
          </li>
        </router-link>
        <router-link to="#">
          <li>
            <font-awesome-icon
              icon="desktop"
              size="lg"
              class="menu-lateral-icon"
            />
            Atividades Digitais
          </li>
        </router-link>
        <router-link to="#">
          <li>
            <font-awesome-icon
              icon="question-circle"
              size="lg"
              class="menu-lateral-icon"
            />
            Ajuda
          </li>
        </router-link>
        <router-link to="#">
          <li>
            <font-awesome-icon icon="cog" size="lg" class="menu-lateral-icon" />
            Configurações
          </li>
        </router-link>
        <a href="#" @click="onLogout">
          <li>
            <font-awesome-icon
              icon="sign-out-alt"
              size="lg"
              class="menu-lateral-icon"
            />
            Sair
          </li>
        </a>
      </ul>
    </div>
  </nav>
</template>

<script>
import Logo from "@/components/Logo.vue";
import { mapActions } from "vuex";
import logoutMixin from '@/mixins/logoutMixin';

export default {
  name: "MenuLateral",
  mixins: [logoutMixin],
  components: {
    Logo,
  },
  methods: {
    ...mapActions(["userLogout"]),
  },
};
</script>

<style lang="scss">
@import "../../scss/_variables.scss";

.menu-lateral-icon {
  color: $text-color;
  opacity: 0.7;
  padding-right: 10px;
}
.menu-lateral {
  width: 20vw;
  background-color: $white;
  min-height: 100vh;
  border-right: 4px solid $white-box-shadow;
}
.menu-lateral li {
  color: $text-color;
  font-weight: bold;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;
  padding: 20px;
  font-size: 1.1rem;
  margin: 30px 0;
}
.menu-lateral ul {
  list-style: none;
  padding: 0;
  margin-top: 40px;
}
.menu-lateral li:hover {
  opacity: 1;
  background-color: $primary;
  color: $white;
}
.menu-lateral__content {
  margin-top: 40px;
  width: 100%;
}

.menu-lateral__content a.router-link-active li {
  background-color: $primary !important;
  color: $white;
}
@media screen and (min-width: 1400px) {
  .menu-lateral ul {
    font-size: 1.2rem !important;
  }
  .menu-lateral-icon {
    padding-right: 15px;
  }
  .menu-lateral li {
    padding: 20px 20px 20px 30px;
  }
}
</style>
