import * as Vue from "vue";
import Component from "vue-class-component";
import "../../dist/vue";

@Component({
    template: `
    <carousel :data="data"
        timeout="500"
        interval="3000"
        count="5"
        width="200"></carousel>
    `,
})
class App extends Vue {
    data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

/* tslint:disable:no-unused-expression */
new App({ el: "#container" });
/* tslint:enable:no-unused-expression */
