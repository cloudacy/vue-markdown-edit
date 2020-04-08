# vue-markdown-edit

This is a **simple** markdown editor based on CodeMirror built for VueJS.

## Usage

```vue
<template>
  <div>
    <markdown-editor v-model="src">
  </div>
</template>

<script lang="ts">
import MarkdownEditor from 'vue-markdown-edit'

export default defineComponent({
  name: 'MyComponent',
  components: {
    MarkdownEditor
  },
  setup(props, ctx) {
    const src = ref('# header')

    return {
      src
    }
  }
})
</script>
```
