<template>
    <div id="components-layout-demo-basic">
      <Header/>
      <router-view/>
    </div>
</template>


<script>

import Header from '@/components/header/header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>