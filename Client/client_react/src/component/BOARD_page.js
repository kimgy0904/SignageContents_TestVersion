import React, { useState, useRef, useEffect } from 'react'
import Counter from "./counter";

const BOARD_page = () => {

    return(
        <div>
            <Counter/>
            <p>게시판</p>
        </div>
    );
}

export default BOARD_page;
