<template>
  <Layout class-prefix="layout">
    <Tags :data-source.sync="tags"/>
    <Notes/>
    <Types/>
    <NumberPad/>
  </Layout>
</template>

<script>
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';

  export default {
    name: 'Money',
    components: {Types, Notes, Tags, NumberPad},
    data(){
      return{
        tags:['衣','食','住','行']
      }
    }
  };
</script>

<style lang="scss">
  .layout-content {
    /*border: 3px solid red;*/
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
</style>

