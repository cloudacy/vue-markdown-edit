import Vue, { VNode } from "vue";
import createEditor, { Editor } from "codemirror";
import "../node_modules/codemirror/lib/codemirror.css";
import "../styles/MarkdownEditor.css";

const MarkdownEditor = Vue.extend({
  name: "MarkdownEditor",
  props: {
    source: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editor: null as Editor | null,
    };
  },
  // computed: {
  //   content(): string | undefined {
  //     const src = this.source;
  //     return this.md?.render(src);
  //   }
  // },
  mounted() {
    this.editor = createEditor(this.$el as HTMLElement);
  },
  render(h): VNode {
    return h("div", { class: "markdown-editor" });
  },
});

export default MarkdownEditor;
