<template>
  <div>
    <div v-for="item in array" :style="{backgroundColor: item.background}" :key="item.id">
      <p>{{item.text}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "note",
        props: ['array']
    }
</script>

<style scoped>

</style>
