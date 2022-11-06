import React, { useState, useRef, useEffect } from 'react'

const Counter = () => {

    const[text, setText] = useState("START");

    const MoveIDLE = () => {
        if(setTimer()){
            setText("Move IDLE page");
        }
    }

    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);

    // The state for our timer
    const [timer, setTimer] = useState('00:00');

    const getTimeRemaining = (e) => {
        MoveIDLE();
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
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

    const clearTimer = (e) => {

        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next
        setTimer('05:00');

        //clearInterval = 변수 초기화
        if (Ref.current) clearInterval(Ref.current);

        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();

        // This is where you need to adjust if
        // you entend to add more time
        //300 = 5분
        deadline.setSeconds(deadline.getSeconds() + 30);
        return deadline;
    }

    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible

    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const TimerReset = () => {
        setText("Timer Reset");
        clearTimer(getDeadTime());
    }

    return (
        <div onTouchStart={TimerReset}>
            <h2>{timer}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Counter;