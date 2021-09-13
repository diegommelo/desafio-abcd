<template>
  <div>
    <input
      type="range"
      :value="value"
      @input="handleInput"
      @change="handleChange"
      :min="min"
      :max="max"
      :step="step"
      :list="list"
      class="base-range"
    />
    <datalist id="school-year" class="datalist">
      <option value="0">Pré</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </datalist>
  </div>
</template>

<script>
export default {
  name: "BaseRange",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 3,
    },
    step: {
      type: Number,
      default: 1,
    },
    list: {
      type: String,
      default: "school-year",
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  methods: {
    handleInput(event) {
      this.inputValue = event.target.value;
      this.$emit("input", event.target.value);
    },
    handleChange(event) {
      this.inputValue = event.target.value;
      this.$emit("change", event.target.value);
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.base-range {
  width: 100%;
}
.datalist {
  display: flex;
  justify-content: space-between;
  color: $primary;
  width: 100%;
}
</style>
