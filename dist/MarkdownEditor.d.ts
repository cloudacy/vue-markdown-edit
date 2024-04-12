import createEditor from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import '../styles/MarkdownEditor.css';
declare const MarkdownEditor: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: true;
    };
}, unknown, {
    editor: createEditor.Editor | null;
}, {}, {
    onChange(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: true;
    };
}>>, {}, {}>;
export default MarkdownEditor;
