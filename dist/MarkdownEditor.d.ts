import Vue from "vue";
import createEditor from "codemirror";
import "codemirror/mode/markdown/markdown";
import "codemirror/lib/codemirror.css";
import "../styles/MarkdownEditor.css";
declare const MarkdownEditor: import("vue/types/vue").ExtendedVue<Vue, {
    editor: createEditor.Editor | null;
}, {
    onChange(): void;
}, unknown, {
    value: string;
}>;
export default MarkdownEditor;
