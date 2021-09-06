<template>
  <div class="container">
    <div class="item-job">
      <div class="catalog">
        <CatalogItem
            v-for="item in data"
            :key="item.id"
            :item_data="item"
        />
      </div>
    </div>
  </div>
</template>



<script>
import CatalogItem from '@/components/catalog-item/catalog-item.vue';
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';


export default {
  name: 'catalog',
  components: {
    CatalogItem,
  },
  computed: {
    ...mapGetters({
      data: "DATA",
      items: "ITEMS",
    })
  },
  methods: {
    ...mapActions([
      "GET_DATA_FROM_API"
    ])
  },
  mounted() {
    this.GET_DATA_FROM_API()
  }
}
</script>