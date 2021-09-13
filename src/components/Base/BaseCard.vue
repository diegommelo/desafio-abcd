<template>
  <div class="base-card">
    <div class="base-card-content">
      <img :src="formatedAvatar" />
      <span class="name">{{ name }}</span>
      <span v-if="year === 0">Pré</span>
      <span v-else>{{ year }}° ano</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    name: {
      type: String,
      default: "",
    },
    avatar: {
      type: String,
      default: "",
    },
    year: {
      type: Number,
      default: 0,
    },
    id: {
      type: String,
      default: "",
    },
  },
  computed: {
    formatedAvatar() {
      return require(`@/assets/kids/${this.avatar}.png`);
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";

.base-card {
  background-color: $white;
  width: 20vw;
  padding: 15px 15px 5px 15px;
  border-radius: 10px;
  box-shadow: 0 4px 0 $white-box-shadow;
  font-size: 1rem;
}
.base-card-content span {
  display: block;
  margin: 10px 0;
}
.base-card img {
  width: 100%;
  border-radius: 10px;
}
.name {
  font-weight: bold;
}
@media screen and (min-width: 992px) {
  .base-card {
    width: 100%;
  }
}
</style>
