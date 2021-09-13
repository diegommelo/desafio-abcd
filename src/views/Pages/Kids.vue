<template>
  <BaseLayout>
    <div class="container">
      <SearchBar v-model="search" @input="onSearch"/>
      <!-- Search Result -->
      <div class="kids-wrapper">
        <div v-if="searchResults.length >0" class="kids-year">
          <div class="kids-year-title">
            <p>Resultado da busca</p>
          </div>
          <div class="kids-year-wrapper">
            <div v-for="kid in searchResults" :key="kid.id" class="kid-card">
              <b-card :name="kid.name" :avatar="kid.avatar" :year="kid.year"></b-card>
            </div>
          </div>
        </div>
        <!-- Kids List -->
        <div
          v-else
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
  data () {
    return {
      search: "",
      searchResults: [],
    };
  },
  components: {
    BaseLayout,
    SearchBar,
  },
  methods: {
    ...mapActions(["bindKids"]),
    onSearch(event){
      this.search = event;
      if(this.search.length == 0){
        this.searchResults = [];
      }
      if(this.search.length >= 3) {
        this.searchResults = this.kids.filter(kid => {
          return kid.name.toLowerCase().includes(this.search.toLowerCase());
        });
      }
    }    
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
  padding: 5px;
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
  flex-wrap: wrap;
  justify-content: flex-start;
}
.kids-year p {
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: bold;
}

//responsive
@media screen and (min-width: 992px) {
  .kids-year-wrapper {
    margin: 20px 0;
  }
  .kid-card {
    width: 10vw;
    padding: 0 30px 30px 30px;
  }
}

</style>
