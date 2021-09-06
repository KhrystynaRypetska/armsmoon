<template>
  <div class="home">
    <div class="container">
      <h1>ROBOTA.COM</h1>
      <catalog/>
    </div>
  </div>
</template>



<script>

import Catalog from "@/components/catalog/catalog.vue";
// import Vacation from "@/components/vacation/vacation.vue"


export default {
  name: 'Home',
  components: {
    Catalog,
    // Vacation
  },
}
</script>



<style scoped lang="scss">
.container {
  max-width: 1020px;
  padding: 15px;
}

h1 {
  font-size: 40px;
  text-align: center;
  margin-bottom: 30px;
}

</style>