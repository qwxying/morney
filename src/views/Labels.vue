<template>
  <Layout>
    <div class="tags">
      <router-link class="tag"
                   v-for="tag in tags  "
                   :key="tag.id"
                   :to="`/labels/edit/${tag.name}`">
        <span>{{tag.name}}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import Button from '@/components/Button.vue';

  tagListModel.fetch();
  @Component({
    components: {Button}
  })
  export default class extends Vue {
    tags = tagListModel.data;

    createTag() {
      const name = window.prompt('请输入标签名：');
      if (name) {
        const message = tagListModel.create(name);
        if (message === 'success') {
          window.alert('添加成功');
        } else if (message === 'duplicated') {
          window.alert('标签名重复，请重新输入');
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tags {
    background: white;
    font-size: 16px;
    padding: 0 16px;

    > .tag {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
    }
  }

  .createTag {
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
