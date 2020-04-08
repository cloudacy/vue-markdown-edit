import Vue, { VNode } from "vue";
import VueMarkdown from "../../dist/MarkdownEditor";
import MarkdownRender from "vue-markdown-render";

Vue.config.productionTip = false;

const App = Vue.extend({
  name: "App",
  components: {
    VueMarkdown,
    MarkdownRender,
  },
  data() {
    return {
      i: 0,
      hide: false,
      val: "# markdown header\n## subheader\nIt just works!",
    };
  },
  render(h): VNode {
    return h("div", [
      h(
        "button",
        {
          attrs: { type: "button" },
          on: { click: () => (this.hide = !this.hide) },
        },
        "Show/Hide"
      ),
      this.hide
        ? h()
        : h("vue-markdown", {
            props: { value: this.val },
            on: { input: (val: string) => (this.val = val) },
          }),
      h("markdown-render", { props: { source: this.val } }),
    ]);
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
