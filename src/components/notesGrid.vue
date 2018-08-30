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
        initialCount: 0,
        manry: new Masonry()
      }
    },
    mounted(){
      /*let wrapper = this.$refs.wrapper;
      let msnry = new Masonry(wrapper, {
        itemSelector: '.note',
        gutter: 10,
        percentPosition: true
      });*/
      this.setInitialCount();
    },
    methods:{
      setInitialCount(){
        this.initialCount = this.array
      }
    },
    watch: {
      array: function(val) { // watch it
        if(val){
          msnry.reloadItems();
          msnry.layout();
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
