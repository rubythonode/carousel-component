import * as React from "react";
import * as ReactDOM from "react-dom";

import { Carousel } from "../../dist/react";
import { CarouselData } from "../../dist/common";

class CarouselItem extends React.Component<{ data: number }, {}> {
    render() {
        return (
            <span>{this.props.data}</span>
        );
    }
}

class Main extends React.Component<{}, {}> {
    data: CarouselData[] = [
        { data: 1, component: CarouselItem },
        { data: 2, component: CarouselItem },
        { data: 3, component: CarouselItem },
        { data: 4, component: CarouselItem },
        { data: 5, component: CarouselItem },
        { data: 6, component: CarouselItem },
        { data: 7, component: CarouselItem },
        { data: 8, component: CarouselItem },
        { data: 9, component: CarouselItem },
    ];

    render() {
        return (
            <Carousel data={this.data}
                timeout={500}
                interval={3000}
                count={5}
                width={200}
                height={150}>
            </Carousel>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
