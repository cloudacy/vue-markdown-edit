import { defineComponent, h } from 'vue';
import createEditor from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import '../styles/MarkdownEditor.css';
var MarkdownEditor = defineComponent({
    name: 'MarkdownEditor',
    props: {
        modelValue: {
            type: String,
            required: true,
        },
    },
    data: function () {
        return {
            editor: null,
        };
    },
    mounted: function () {
        this.editor = createEditor(this.$el, {
            mode: 'markdown',
            lineNumbers: true,
            value: this.modelValue,
        });
        this.editor.on('change', this.onChange);
    },
    beforeDestroy: function () {
        var _a;
        (_a = this.editor) === null || _a === void 0 ? void 0 : _a.off('change', this.onChange);
    },
    methods: {
        onChange: function () {
            var _a;
            this.$emit('update:modelValue', (_a = this.editor) === null || _a === void 0 ? void 0 : _a.getValue());
        },
    },
    render: function () {
        return h('div', { class: 'markdown-editor' });
    },
});
export default MarkdownEditor;
//# sourceMappingURL=MarkdownEditor.js.map