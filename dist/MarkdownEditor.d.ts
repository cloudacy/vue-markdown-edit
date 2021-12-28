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
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
} & {
    modelValue: string;
} & {}>, {}>;
export default MarkdownEditor;
