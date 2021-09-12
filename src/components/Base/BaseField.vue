<template>
  <div class="base-field">
    <slot name="label"></slot>
    <slot name="icon"></slot>
    <slot name="input"></slot>
  </div>
</template>

<script>
export default {
  name: "BaseField",
  props: {
    icon: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
.base-field i {
  position: absolute;
}
.icon {
  padding: 10px;
  width: 100%;
}
</style>
