<template>
  <div class="container">
    <h3>{{vacancy.object.position}}</h3>
    <h5>{{vacancy.object.clientName}}</h5>
    <p> <i>тип роботи: </i>{{vacancy.object.employmentType}}</p>
    <p><i>статус: {{vacancy.object.status}}</i></p>
    <p><i>бажиний досвід роботи: {{vacancy.object.experience}}</i></p>
    <p><i>обов'язки: {{vacancy.object.role}}</i></p>
    <p><i>очікуваний рівень компенсації:</i> <strong>{{vacancy.object.salaryFrom}}грн - {{vacancy.object.salaryTo}}грн</strong></p>
    <p><i>валюта:{{vacancy.object.currency}}</i></p>
    <div v-html="vacancy.object.descr">
      {{vacancy.object.descr}}
    </div>
    <ul>
      <li
          v-for="item in vacancy.object.languages"
          :key="item.index"
      >
        мова:{{item.name}}, рівень: {{item.level}}
      </li>
    </ul>

    <ul>
      <li
          v-for="item in vacancy.object.desiredSkills"
          :key="item.index"
      >
        досвід: {{item.experience}}, навички: {{item.mustHave}}, {{item.skill}}
      </li>
    </ul>


  </div>
</template>

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