<template>
  <div class="notes-grid" ref="wrapper">
    <note v-for="item in array" :currentItem="item" :style="{backgroundColor: item.background}" :key="item.id" class="note" ref="item"></note>
  </div>
</template>

<script>
  export default {
    name: "notesGrid",
    props: ['array'],
    data(){
      return{

      }
    },
    mounted(){
      //let wrapper = document.getElementsByClassName('.notes-grid');
      let wrapper = this.$refs.wrapper;
      let msnry = new Masonry(wrapper, {
        itemSelector: '.note',
        gutter: 10,
        percentPosition: true
      });
    },
    watch: {
      reloadMasonry(newVal){
        if(this.array.length !== newVal.array.length){
          alert('True')
        }
      }
    }
  }
</script>

<style scoped lang="scss">

  .note{
    width: 33.33%;
    margin-bottom: 10px;
  }

</style>
