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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Kids",
  components: {
    BaseLayout,
  },
  methods: {
    ...mapActions(["bindKids"]),
  },
  computed: {
    ...mapGetters(["kids"]),
  },
  created() {
    this.bindKids();
  }
};
</script>

<style lang="scss"></style>
