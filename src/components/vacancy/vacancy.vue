<template>
  <a-layout-content>
    <div class="vacancy" v-if="vacancy" >
      <h3>{{vacancy.position}}</h3>
      <h5>{{vacancy.clientName}}</h5>
      <p> <i>тип роботи: </i>{{vacancy.employmentType}}</p>
      <p><i>статус: {{vacancy.status}}</i></p>
      <p><i>бажиний досвід роботи: {{vacancy.experience}}</i></p>
      <p><i>обов'язки: {{vacancy.role}}</i></p>
      <p><i>очікуваний рівень компенсації:</i> <strong>{{vacancy.salaryFrom}}грн - {{vacancy.salaryTo}}грн</strong></p>
      <p><i>валюта:{{vacancy.currency}}</i></p>
      <div v-html="vacancy.descr">
        <p>{{vacancy.descr}}</p>
      </div>
      <ul>
        <li
            v-for="item in vacancy.languages"
            :key="item.index"
        >
          мова:{{item.name}}, рівень: {{item.level}}
        </li>
      </ul>

      <ul>
        <li
            v-for="item in vacancy.desiredSkills"
            :key="item.index"
        >
          досвід: {{item.experience}}, навички: {{item.mustHave}}, {{item.skill}}
        </li>
      </ul>


    </div>
  </a-layout-content>
</template>


<style lang="scss" scoped>
@import "vacancy.scss";
</style>

<script>

import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  name: "vacancy",
  computed: {
    ...mapGetters({
      vacancy: 'VACANCY'
    })
  },
  methods: {
    ...mapActions([
      "GET_VACANCY_FROM_API"
    ])
  },
  mounted() {
    const vacancyId = this.$route.params.id
    this.GET_VACANCY_FROM_API(vacancyId)
  }
}
</script>