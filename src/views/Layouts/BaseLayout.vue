<template>
  <div class="base-layout">
    <MenuLateral class="is-mobile"/>
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
  width: 100%;
}
  .is-mobile {
    display: none;
  }

//ipad
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .is-mobile {
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
  .is-mobile {
    display: flex;
  }
  .content {
    width: 80vw;
  }
}
@media screen and (min-width: 992px) {
}

@media screen and (min-width: 1200px) {

}
</style>
