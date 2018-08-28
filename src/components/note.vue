<template>
  <div>
    <div>
      <p>{{currentItem.text}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "note",
        props:['currentItem']
    }
</script>

<style scoped>

</style>
