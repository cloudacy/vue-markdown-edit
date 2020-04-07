import Vue, { VNode } from "vue";
import VueMarkdown from "../../dist/MarkdownEditor";

Vue.config.productionTip = false;
const x: string = "tes";

const App = Vue.extend({
  name: "App",
  components: {
    VueMarkdown,
  },
  data() {
    return {
      i: 0,
    };
  },
  render(h): VNode {
    return h("div", [
      h(
        "button",
        {
          on: {
            click: () => {
              this.i++;
            },
          },
        },
        "Increment"
      ),
      h("vue-markdown", {
        props: {
          source: `# This is a markdown heading\n## This is your number: ${this.i}`,
        },
      }),
    ]);
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
