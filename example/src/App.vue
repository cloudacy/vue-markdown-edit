<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <button type="button" @click="hide = !hide">Show/Hide</button>
    <markdown-editor v-model="val"></markdown-editor>
    <markdown-render :source="val"></markdown-render>
  </div>
</template>

<script lang="ts" setup>
import MarkdownEditor from '../../dist/MarkdownEditor'
import MarkdownRender from 'vue-markdown-render'
import { ref } from 'vue'

const hide = ref(false)
const val = ref('# markdown header\n## subheader\nIt just works!')
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
