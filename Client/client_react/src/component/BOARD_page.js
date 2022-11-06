import React, { useState, useRef, useEffect } from 'react'
import Counter from "./counter";

const BOARD_page = () => {

    return(
        <div>
            <p>게시판</p>
            <Counter/>
        </div>
    );
}

export default BOARD_page;
