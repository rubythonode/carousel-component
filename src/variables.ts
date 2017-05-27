export const srcVueTemplateHtml = `<div class="carousel">
    <div class="main">
        <ul :style="ulStyle">
            <li v-for="(d, i) in data">{{i}}</li>
        </ul>
    </div>
    <div class="left"></div>
    <div class="right"></div>
</div>`;
