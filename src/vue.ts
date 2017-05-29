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
    hoveringLeft = false;
    hoveringRight = false;
    currentCount = 0;

    beforeMount() {
        this.currentCount = +this.count;
        this.data.push(...this.data.slice(0, this.currentCount));
        this.start();
    }

    get leftStyle() {
        return {
            opacity: this.hoveringLeft ? 100 : 0,
        };
    }

    get rightStyle() {
        return {
            opacity: this.hoveringRight ? 100 : 0,
        };
    }

    moveLeft(num: number) {
        common.setStyle(num, 200);
        common.runAnimation(this.$refs.ul as HTMLElement, this.timeout, "move-left", num, () => {
            this.currentIndex -= num;
            if (this.currentIndex < 0) {
                this.currentIndex = this.data.length - this.currentCount + this.currentIndex;
            }
        });
    }
    moveRight(num: number) {
        common.setStyle(num, 200);
        common.runAnimation(this.$refs.ul as HTMLElement, this.timeout, "move-right", num, () => {
            this.currentIndex += num;
            if (this.currentIndex >= this.data.length - this.currentCount) {
                this.currentIndex -= (this.data.length - this.currentCount);
            }
        });
    }
    pause() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    start() {
        this.timer = setInterval(() => {
            this.moveRight(1);
        }, this.interval);
    }
    mouseenterLeft() {
        this.hoveringLeft = true;
        this.pause();
    }
    mouseleaveLeft() {
        this.hoveringLeft = false;
        this.start();
    }
    mouseenterRight() {
        this.hoveringRight = true;
        this.pause();
    }
    mouseleaveRight() {
        this.hoveringRight = false;
        this.start();
    }
}

Vue.component("carousel", Carousel);
