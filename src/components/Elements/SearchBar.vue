<template>
  <div class="search-bar">
    <div class="search-input">
      <b-input
        type="search"
        v-model="search"
        placeholder="Pesquisar (em breve)"
        icon="search"
      ></b-input>
    </div>
    <div class="filter">
      <p>Filtrar por</p>
      <small>Em breve</small>
    </div>
    <div class="new-student">
      <b-button classes="is-primary" icon="plus" @click="newKid()"
        >Adicionar novo aluno</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    newKid() {
      this.$router.push({ name: "NewKid" });
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";

.search-bar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1.1rem;
  background-color: $white;
  box-shadow: 0 4px 0 $white-box-shadow;
  border-radius: 20px;
  width: 80vw;
  margin: 0 auto;
}
.filter {
  color: $primary;
  font-weight: 500;
  letter-spacing: 1px;
}
.filter p {
  margin: 10px;
}
.search-input,
.filter {
  width: 100%;
  text-align: center;
  margin: 10px 0;
}
.new-student {
  width: 80%;
}

//ipad
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .new-student {
    width: 50% !important;
  }
}

//responsive
@media screen and (min-width: 376px) {
}

@media screen and (min-width: 576px) {
}

@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {
  .search-bar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    padding: 1.1rem;
    background-color: $white;
    box-shadow: 0 4px 0 $white-box-shadow;
    border-radius: 20px;
    width: 60vw;
    margin: 0 auto;
  }
  .new-student {
    width: 80%;
  }
}

@media screen and (min-width: 1200px) {
}
</style>
