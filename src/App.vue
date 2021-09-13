<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import titleMixin from '@/mixins/titleMixin'

 export default {
   name: 'App',
   mixins: [titleMixin],
   title: "EduEdu - Instituto ABCD"
 }
</script>


<style lang="scss">
@import "@/scss/styles.scss";
body {
  background-color: $background-color;
}
</style>
