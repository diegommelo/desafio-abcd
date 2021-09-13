<template>
  <div class="base-layout">
    <MenuLateral />
    <section class="content">
      <slot></slot>
    </section>
  </div>
</template>

<script>
import MenuLateral from "@/components/Elements/MenuLateral.vue";
export default {
  name: "BaseLayout",
  components: {
    MenuLateral,
  },
};
</script>

<style lang="scss">
@import "../../scss/styles.scss";

.base-layout {
  display: flex;
  width: 100%;
}
.content {
  width: 80vw;
}
</style>
