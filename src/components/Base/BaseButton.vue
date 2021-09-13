<template>
  <button
    :type="type"
    :class="['base-button', classes]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="icon" :class="['icon-button', 'fas', `fa-${icon}`, 'fa-lg']"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: {
      type: String,
      default: "Button",
    },
    type: {
      type: String,
      default: "text",
    },
    size: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: [String, Array],
      default: "",
    },
    icon: {
      type: String,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

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
.base-button:hover {
  filter: hue-rotate(60deg);
}
.icon-button {
  padding-right: 0.5rem;
}
</style>
