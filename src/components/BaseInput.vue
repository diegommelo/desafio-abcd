<template>
  <input :value="value" @input="onInput" @blur="onBlur" :type="type" :name="name" required class="base-input" />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFocused: false,
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
    onBlur(e) {
      this.isFocused = false
      this.$emit('blur', e.target.value)
    },
    onFocus(e) {
      this.isFocused = true
      this.$emit('focus', e.target.value)
    },
  },
}
</script>

<style lang="scss">
  @import '@/scss/_variables.scss';

  .base-input {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 5px;
    width: 100%;
    outline: none;
    transition: all 0.2s ease-in-out;
    border-color: $primary;
    height: 2.5rem;
    margin: 10px 0;
    font-size: 1.2rem;
    color: $text-color;
    margin: 10px 0;
    &:focus {
      border-color: $primary-dark;
    }
  }
</style>