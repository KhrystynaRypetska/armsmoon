
<template>
    <a-col :span="12">
      <a-card title="" :bordered="false">
        <div class="item">
          <div class="title">
            <h3>{{item_data.position}}</h3>
            <router-link :to="{name: 'Vacancy', params: {id: item_data.localId}}">
              Дктальніше...
            </router-link>
          </div>

          <p><i>тип роботи:</i> {{item_data.employmentType}}</p>
          <p><i>статус:</i> {{item_data.status}}</p>
          <p><i>бажиний досвід роботи:</i> {{item_data.experience}}</p>
          <p><i>рівен:</i> {{item_data.role}}</p>
          <p><i>очікуваний рівень компенсації:</i> <strong>{{item_data.salaryFrom}}грн - {{item_data.salaryTo}}грн</strong></p>
          <p>{{item_data.currency}}</p>
        </div>
      </a-card>

    </a-col>
</template>


<style lang="scss" scoped>
@import "catalog-item";
</style>

<script>
export default {
  name: "catalog-item",
  props: {
    item_data: {
      type: Object,
      default() {
        return{}
      }
    }
  },

  data () {
    return  {
      title : 'Vacancy'
    }
  }

}
</script>