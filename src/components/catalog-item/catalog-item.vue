<template>
  <div class="item">
    <h3>{{item_data.position}}</h3>
    <p>{{item_data.employmentType}}</p>
    <p>{{item_data.status}}</p>
    <p>{{item_data.experience}}</p>
    <p>{{item_data.role}}</p>
    <p><strong>{{item_data.salaryFrom}}грн - {{item_data.salaryTo}}грн</strong></p>
    <p>{{item_data.currency}}</p>
  </div>

</template>


<script>
export default {
  name: "catalog-item",
  props: {
    item_data: {
      type: Object,
      default() {
        return {}
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