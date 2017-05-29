export interface CarouselData {
    /* tslint:disable:ban-types */
    component: string | Function;
    /* tslint:enable:ban-types */
    data: any;
}

const animationKeyframesIdName = "carousel-animation-keyframes";

export function setStyle(num: number, width: number) {
    let style = document.getElementById(animationKeyframesIdName) as HTMLStyleElement;
    if (!style) {
        style = document.createElement("style");
        style.type = "text/css";
        style.id = animationKeyframesIdName;
        document.getElementsByTagName("head")[0].appendChild(style);
    }
    style.innerHTML = `@keyframes move-left {
    0% { left: 0; }
    100% { left: ${width * num}px; }
}
@keyframes move-right {
    0% { left: 0; }
    100% { left: -${width * num}px; }
}`;
}

export function runAnimation(ul: HTMLElement, timeout: number, keyframes: string, num: number, next: () => void) {
    ul.style.animation = "";
    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            ul.style.animation = `${timeout / 1000}s linear 0s normal ${keyframes}`;
            setTimeout(() => {
                next();
            }, timeout);
        });
    });
}
