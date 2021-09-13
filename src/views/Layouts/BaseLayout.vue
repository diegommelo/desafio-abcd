<template>
  <div class="base-layout">
    <MenuLateral class="is-desktop" />
    <MenuMobile class="is-mobile" />
    <section class="content">
      <slot></slot>
    </section>
  </div>
</template>

<script>
import MenuLateral from "@/components/Elements/MenuLateral.vue";
import MenuMobile from "@/components/Elements/MenuMobile.vue";

export default {
  name: "BaseLayout",
  components: {
    MenuLateral,
    MenuMobile,
  },
};
</script>

<style lang="scss">
@import "../../scss/styles.scss";

.base-layout {
  width: 100%;
}
.content {
  width: 100%;
}
.is-desktop {
  display: none;
}

//ipad
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .is-desktop {
    display: none !important;
  }
  .content {
    width: 100% !important;
  }
}

//responsive
@media screen and (min-width: 376px) {
}

@media screen and (min-width: 576px) {
}

@media screen and (min-width: 768px) {
  .is-desktop {
    display: flex;
  }
  .content {
    width: 80vw;
  }
  .is-mobile {
    display: none;
  }
}
@media screen and (min-width: 992px) {
  .base-layout {
    display: flex;
  }
}

@media screen and (min-width: 1200px) {
}
</style>
