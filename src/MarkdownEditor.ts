import Vue, { VNode } from "vue";
import createEditor, { Editor } from "codemirror";
import "codemirror/mode/markdown/markdown";
import "codemirror/lib/codemirror.css";
import "../styles/MarkdownEditor.css";

const MarkdownEditor = Vue.extend({
  name: "MarkdownEditor",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editor: null as Editor | null,
    };
  },
  mounted() {
    this.editor = createEditor(this.$el as HTMLElement, {
      mode: "markdown",
      lineNumbers: true,
      value: this.value,
    });

    this.editor.on("change", this.onChange);
  },
  beforeDestroy() {
    this.editor?.off("change", this.onChange);
  },
  methods: {
    onChange() {
      this.$emit("input", this.editor?.getValue());
    },
  },
  render(h): VNode {
    return h("div", { class: "markdown-editor" });
  },
});

export default MarkdownEditor;
