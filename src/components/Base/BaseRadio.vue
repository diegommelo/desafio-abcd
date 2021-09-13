<template>
  <div class="base-radio">
    <label> {{ label }} </label>
    <input
      :type="type"
      :id="id"
      :name="name"
      :value="option"
      :checked="checked"
      @input="onInput"
    />
    <span class="checkmark"></span>
  </div>
</template>

<script>
export default {
  name: "BaseRadio",
  props: {
    id: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
    option: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "radio",
    },
  },
  data() {
    return {
      isChecked: this.checked,
      inputValue: this.value,
    };
  },
  methods: {
    onInput(e) {
      this.inputValue = e.target.value;
      this.isChecked = e.target.checked;
      if (this.type === "radio") {
        this.$emit("input", e.target.value);
      } else if (this.type === "checkbox") {
        this.$emit("input", e.target.checked);
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.base-radio {
  font-size: 1.1rem;
  color: $primary;
}
input[type="radio"],
input[type="checkbox"] {
  width: 1.2rem;
  height: 1.2rem;
}
.base-radio label {
  display: block;
  padding-bottom: 5px;
  text-align: center;
}
</style>
