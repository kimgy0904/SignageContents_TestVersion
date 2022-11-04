// timer 설정 후 여러 페이지 visible, uunvisible
import React, {useRef, useState, Component, useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IDLE_page_3 from "./component/IDLE_page_3";
import BOARD_page from "./component/BOARD_page";


function App() {
    return(
        <div>
            <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
            <div>
                <IDLE_page_3/>
            </div>
            <div>
                <BOARD_page/>
            </div>
        </div>


        )
}

export default App;