<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>标签</p>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Labels',
  };
</script>

<style lang="scss" scoped>
  .nav-wrapper {
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .content {
    border: 1px solid blue;
    overflow: auto;
    flex-grow: 1;
  }

</style>