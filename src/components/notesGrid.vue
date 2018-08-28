<template>
  <div class="notes-grid" ref="wrapper">
    <note v-for="item in array" :currentItem="item" :style="{backgroundColor: item.background}" :key="item.id" class="note" ref="item"></note>
  </div>
</template>

<script>
  export default {
    name: "notesGrid",
    props: ['array'],
    mounted(){
      //let wrapper = document.getElementsByClassName('.notes-grid');
      let wrapper = this.$refs.wrapper;
      let msnry = new Masonry(wrapper, {
        itemSelector: '.note',
        columnWidth: 200,
        gutter: 10
      });
    }
  }
</script>

<style scoped lang="scss">

</style>
