<template>
  <label for="for" class="base-label">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'BaseLabel',
  props: {
    for: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  @import '@/scss/_variables.scss';

  .base-label {
    display: inline-block;
    font-size: 1.05rem;
    margin: 10px 0 0 0;
    color: $primary;
  }
</style>