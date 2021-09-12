<template>
  <nav class="menu-lateral">
    <Logo size="small" />
    <ul>
      <router-link to="#">
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
          <font-awesome-icon icon="sign-out-alt" size="lg" class="menu-lateral-icon" />
          Sair
        </li>
      </a>
    </ul>
  </nav>
</template>

<script>
import Logo from "@/components/Logo.vue";
import { mapActions } from "vuex";

export default {
  name: "MenuLateral",
  components: {
    Logo,
  },
  methods: {
    ...mapActions(["userLogout"]),
    onLogout() {
      this.userLogout().then(() => {
        this.$router.push("/login");
      }).catch(() => {
        console.log(this.errorMessage);
      });
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/_variables.scss";

.menu-lateral-icon {
  color: $text-color;
  opacity: 0.7;
  padding-right: 20px;
}
.menu-lateral {
  width: 20vw;
  background-color: $white;
  margin-top: 40px;
}
.menu-lateral li {
  color: $text-color;
  font-weight: bold;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;
  padding: 20px;
  font-size: 1.2rem;
  margin: 30px 0;
}
.menu-lateral li:hover {
  opacity: 1;
  background-color: $primary;
  color: $white;
}

.menu-lateral ul {
  list-style: none;
  padding: 0;
  margin-top: 40px;
}
</style>
