<template>
  <div id="app" class="main">
    <noteEditor @text="getText($event)"></noteEditor>
    <note :array="cards"></note>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      cards: [
        {
          text: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis',
          background: 'yellow',
          id: 1
        },
        {
          text: ' Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus',
          background: 'yellow',
          id: 2
        },
        {
          text: 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum',
          background: 'yellow',
          id: 3
        }
      ]
    }
  },
  methods:{
    getText(item){
      let newItem = {
        text: item,
        background: 'yellow',
        id: Date.now()
      };
      this.cards.push(newItem)
    }
  }
}
</script>

<style scoped lang="scss">

  .main{
    max-width: 600px;
    margin: 0 auto;
  }

</style>
