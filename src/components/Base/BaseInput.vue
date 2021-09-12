<template>
  <div class="base-field">
    <input :value="value" @input="onInput" @blur="onBlur" :type="type" :name="name" required class="base-input" />
    <span class="icon">
      <i v-if="icon" :class="['fas', `fa-${icon}`, 'fa-lg position-absolute']"></i>
    </span>
  </div>
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
    },
    icon: {
      type: String,
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
    width: 100%;
    max-width: 100%;
    outline: none;
    transition: all 0.2s ease-in-out;
    border-color: $primary;
    height: 3rem;
    margin: 10px 0;
    font-size: 1.2rem;
    color: $text-color;
    box-sizing: border-box;
    padding-right: 2.3rem;
    &:focus {
      border-color: $primary-dark;
    }
  }
  .icon {
    position: absolute;
    top: 1.5rem;
    right: 0.8rem;
  }
  .base-field {
    position: relative;
  }
</style>