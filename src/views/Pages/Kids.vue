<template>
  <BaseLayout>
    <div>
      <h1>Kids</h1>
      {{kids}}
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/views/Layouts/BaseLayout.vue";
import { mapGetters } from "vuex";

export default {
  name: "Kids",
  components: {
    BaseLayout,
  },
  computed: {
    ...mapGetters(["kids"]),
  }
};
</script>

<style lang="scss"></style>
