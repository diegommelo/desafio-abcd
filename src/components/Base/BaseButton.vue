<template>
  <button :type="type" :class="['base-button',classes]" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    classes: {
      type: [String, Array],
      default: ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
  @import '@/scss/styles.scss';

  .base-button {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-size: 1rem;
    font-weight: 700;
    line-height: 2;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    margin: 10px 0;
    width: 100%;
  }
</style>