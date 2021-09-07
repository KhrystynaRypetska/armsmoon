<template>
  <a-layout-content>
    <catalog/>
  </a-layout-content>
</template>




<script>

import Catalog from "@/components/catalog/catalog.vue";


export default {
  name: 'Home',
  components: {
    Catalog,
  },
}
</script>



<style scoped lang="scss">
.ant-layout-content {
  max-width: 1020px;
  padding: 15px;
  margin: 0 auto;
}

</style>