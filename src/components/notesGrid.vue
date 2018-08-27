<template>
  <div class="notes-grid">
    <note :array="array" ></note>
  </div>
</template>

<script>
  export default {
    name: "notesGrid",
    props: ['array']
  }
</script>

<style scoped lang="scss">

</style>
