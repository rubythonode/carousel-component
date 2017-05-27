import * as Vue from "vue";
import Component from "vue-class-component";
import * as common from "./common";
import { srcVueTemplateHtml } from "./variables";

@Component({
    template: srcVueTemplateHtml,
    props: ["data", "timeout", "interval", "count"],
})
class Carousel extends Vue {
    data: common.CarouselData[];
    timeout: number;
    interval: number;
    count: number;

    timer: NodeJS.Timer;
    currentIndex = 0;
    width = 200;

    beforeMount() {
        this.timer = setInterval(() => {
            this.currentIndex++;
        }, this.interval);
    }

    get ulStyle() {
        return {
            left: -this.currentIndex * this.width + "px",
        };
    }
}

Vue.component("carousel", Carousel);
