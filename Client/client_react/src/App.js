import React, {useRef, useState, useEffect} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './component/App.module.css';
import IDLE_page_3 from "./component/IDLE_page_3";
import IDLE_page_4 from "./component/IDLE_page_4";
import IDLE_page_5 from "./component/IDLE_page_5";
import StyledComponentTest from "./component/StyledComponentTest";

import axios from "axios";

import ContentDetailView from "./component/ContentDetailView";
import SignageShow from "./component/SignageShow";
import Community from "./component/Community";
import IssueBoard from "./component/IssueBoard";
import DailyBoard from "./component/DailyBoard";
import PaintList from "./component/PaintList";
import MediaDetailView from "./component/MediaDetailView";

function App(){
    //5분 타이머
    const Ref = useRef(null);
    const [text, setText] = useState('');
    const [timer, setTimer] = useState();
    const [ ip , setIp ] = useState();

    const idle_time = 30;

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds =Math.floor((total / 1000) % 60);
        const minutes =Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }

    const startTimer = (e) => {
        setText("start");
        let { total, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
    // 이 기능은 타이머를 재설정하는 데 사용됩니다.
    // 즉, 타이머를 다시 시작하면 이전 카운트다운에서 남은 시간이 지워짐
    // 그렇지 않으면,
    const clearTimer = (e) => {
        setTimer('05:00');

        //clearInterval = 변수 초기화
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
    // 타이머의 기한 제공, 카운트다운 시작하려는 시점부터 시간 제공
    // 연장하려면 시간 추가
    const getDeadTime = () => {
        let deadline = new Date();
        //300 = 5분
        deadline.setSeconds(deadline.getSeconds() + idle_time);
        return deadline;
    }
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
    // 타이머 리셋
    const TimerReset = () => {
        setText("Timer Reset");
        clearTimer(getDeadTime());
    }

    // 카운터 00:00 정보 받아온 뒤 IDLE 페이지 이동
    const navigate = useNavigate();
    // const Page = ['/', '/page4', '/page5'];
    const Page = ['/', '/page4'];
    const [num, setNum] = useState(0);

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    useEffect((e) => {
            if (timer === '00:00') {
                const num_ = getRandomInt(3);
                setNum(num_);
                navigate(Page[num_]);
                console.log('change page' + num_);

                axios.get('https://geolocation-db.com/json/')
                .then((res) => {
                  setIp(res.data.IPv4);
                })
            }
    }, [timer]);



    return(
        <div>
            <div onClick={TimerReset} style={{fontSize : '3rem'}}>
                <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>

                {/*<div style={{backgroundColor : 'black', fontSize : '3rem',*/}
                {/*    fontFamily: 'yg-jalnan', color : 'white'}}>*/}
                {/*    {timer}*/}
                {/*    <br/>*/}
                {/*    {text}*/}
                {/*</div>*/}
            <Routes>
                <Route path='/' element={<IDLE_page_3/>}/>
                <Route path='/page4' element={<IDLE_page_4/>}/>
                {/*page5 seems to be useless*/}
                {/*<Route path='/page5' element={<IDLE_page_5/>} />*/}
                <Route path='/select' element={<SignageShow/>} />
                <Route path='/board' element={<Community/>} />
                <Route path='/issueboard' element={<IssueBoard/>} />
                <Route path='/dailyboard' element={<DailyBoard/>} />
                <Route path='/paintlist' element={<PaintList/>} />
                <Route path='/contentDetailView/:id' element={<ContentDetailView/>}/>
                <Route path='/mediaDetailView' element={<MediaDetailView/>}/>
                <Route path='/StyledComponentTest' element={<StyledComponentTest/>}/>
            </Routes>
            </div>
        </div>
    );
}
export default App;