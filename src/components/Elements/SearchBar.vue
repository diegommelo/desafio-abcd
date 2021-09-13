<template>
  <div class="search-bar">
    <b-input type="search" v-model="search" placeholder="Pesquisar" icon="search"></b-input>
    <div class="filter">
      Filtrar por
    </div>
    <div class="new-student">
      <b-button classes="is-primary" icon="plus" @click="newKid()">Adicionar novo aluno</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    newKid() {
      this.$router.push({name: 'NewKid'})
    }
  },
}
</script>

<style lang="scss">
@import '@/scss/styles.scss';

.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem;
  background-color: $white;
  box-shadow: 0 4px 0 $white-box-shadow;
  border-radius: 20px;
  width: 50vw;
  margin: 0 auto;
}
.filter {
  color: $primary;
  font-weight: 500;
  letter-spacing: 1px;
}
</style>