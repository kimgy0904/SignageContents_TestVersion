import Slider from "react-slick";
import React, {useRef, useState, useEffect, Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
    render() {

        const settings = {
            slide: 'div',
            dots: true,
            infinite: true,
            speed: 1000,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        };

        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                </Slider>
                <div>
                    <p>작품<br/>감상<br/><button id="button_a">GO</button></p>
                    <p className="line">커뮤<br/>니티<br/><button id="button_b">GO</button></p>
                    <p>기능<br/>추가 기능<br/><button id="button_c">GO</button></p>
                </div>
            </div>
        );
    }
}