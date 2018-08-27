<template>
    <div class="edit-block">
      <textarea rows="8" class="editor" @keyup.enter="getValue" v-model="note"></textarea>
      <button @click="getValue">Add</button>
    </div>
</template>

<script>
    export default {
        name: "noteEditor",
        data(){
          return{
            note: ''
          }
        },
      methods:{
        getValue(){
          let messageBody = this.note;
          this.$emit('text', messageBody);
          this.note = ''
        }
      }
    }
</script>

<style scoped lang="scss">

  .edit-block{
    width: 100%;
    position: relative;

    button{
      position: absolute;
      right: 10px;
      bottom: 15px;
      background: green;
      border: none;
      cursor: pointer;
      color: white;
      font-size: 15px;
      border-radius: 20px;
      padding: 6px 40px;

      &:focus{
        outline: 0;
      }
    }

    .editor{
      width: 100%;
      resize: none;
    }
  }

</style>
