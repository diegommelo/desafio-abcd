<template>
  <div :class="['logo', size]">
    <img src="@/assets/logo.png" alt="EduEdu Logo" />
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    size: {
      type: String,
      default: "normal",
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.logo {
  text-align: center;
  margin-bottom: 1rem;
  color: $primary;
}
.small {
  & img {
    width: 150px;
  }
}
.medium {
  & img {
    width: 200px;
  }
}
.large {
  & img {
    width: 250px;
  }
}
.normal {
  & img {
    width: 100%;
  }
}
</style>
