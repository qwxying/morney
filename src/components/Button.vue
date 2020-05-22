<template>
  <button class="button"
          @click="$emit('click',$event)">
    <slot/>
  </button>
</template>

<script lang="ts">
  export default {
    name: 'Button'
  };
</script>

<style lang="scss" scoped>
  .button {
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 32px;
    padding: 0 8px;

    &-wrapper {
      text-align: center;
      padding: 8px;
      margin-top: 8px;
    }
  }
</style>