<template>
  <BaseLayout>
    <div class="container">
      <SearchBar />
      <div class="kids-wrapper">
        <div
          v-for="(value, index) in kidsOrderedByYear"
          :key="index"
          class="kids-year"
        >
          <div v-if="value.length > 0" class="kids-year-title">
            <p v-if="index == 0">Pré</p>
            <p v-else>{{ index }}° ano</p>
          </div>
          <div class="kids-year-wrapper">
            <div v-for="kid in value" :key="kid.id" class="kid-card">
              <b-card :name="kid.name" :avatar="kid.avatar" :year="kid.year" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/views/Layouts/BaseLayout.vue";
import SearchBar from "@/components/Elements/SearchBar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Kids",
  components: {
    BaseLayout,
    SearchBar,
  },
  methods: {
    ...mapActions(["bindKids"]),
  },
  computed: {
    ...mapGetters(["kids"]),
    kidsOrderedByYear() {
      let yearZero = [];
      let yearOne = [];
      let yearTwo = [];
      let yearThree = [];
      this.kids.forEach((kid) => {
        if (kid.year === 0) {
          yearZero.push(kid);
        } else if (kid.year === 1) {
          yearOne.push(kid);
        } else if (kid.year === 2) {
          yearTwo.push(kid);
        } else if (kid.year === 3) {
          yearThree.push(kid);
        }
      });
      return {
        0: yearZero,
        1: yearOne,
        2: yearTwo,
        3: yearThree,
      };
    },
  },
  created() {
    this.bindKids();
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.kids-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
.kid-card {
  padding: 10px;
}

.kids-year {
  width: 100%;
}
.kids-year-title {
  border-bottom: 1px solid $white-box-shadow;
}
.kids-year-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.kids-year p {
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: bold;
}

//responsive
@media screen and (min-width: 376px) {
}
@media screen and (min-width: 576px) {
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {
  .kids-year-wrapper {
    width: 40vw;
    margin: 20px 0;
  }
  .kid-card {
    width: 10vw;
    padding: 0 30px 0 30px;
  }
}
@media screen and (min-width: 1200px) {
}

//ipad
@media screen and (min-width: 768px) and (max-width: 1024px) {
}
</style>
