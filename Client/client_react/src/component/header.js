import React, {useEffect, useState} from "react";
import moment from "moment/moment";

function ClockContainer() {
    let timer = null;
    const [time, setTime] = useState(moment());
    useEffect(() => {
        timer = setInterval(() => {
            setTime(moment());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <div>
                {time.format('YYYY-MM-DD')}
            </div>
            <div> {time.format('HH-mm-ss')}</div>
        </div>
    );
}

export default ClockContainer;