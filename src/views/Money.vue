<template>
  <Layout class-prefix="layout">
    <Tags/>
    <Notes/>
    <Types/>
    <NumberPad/>
  </Layout>
</template>

<script lang="ts">
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';

  export default {
    name: 'Money',
    components: {Types, Notes, Tags, NumberPad},
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

