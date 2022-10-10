// Signage 5 - App.js

import Slider from "react-slick";
import React, {Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
        />
    );
};

const dots = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "inline-block"}}
            onClick={onClick}
        />
    );
};

export default class App extends Component {
    render() {
        const settings = {
            slide: 'div',
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dotsClass: "slick-dots slick-thumb",
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        return (
            <div>
                <Slider {...settings}>
                    <div className="whole">
                        <p className="this_place">이곳은</p>
                        <p className="park">경상감영공원</p>
                        <p className="park">스마트 쉘터 입니다</p>
                        <p className="an">쉘터 내,<br/><span>코로나 환기 규정</span> 준수 중!</p>
                    </div>
                    <div>2</div>
                    <div>3</div>
                </Slider>
                <div className="buttonDiv">
                    <div>작품 감상</div>
                    <p></p>
                    <div>커뮤니티</div>
                </div>

            </div>
        );
    }
}