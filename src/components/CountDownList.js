import React from 'react';
import Counter from "./Counter";
import useCountdown from "../hooks/useCoundown";

const futureDate = new Date("Jun 5, 2022 16:37:52").getTime();

export default function CountDownList() {

    const [days, hours, minutes, seconds] = useCountdown(futureDate)    
    return (
        <section id="countdown-container">
            <Counter 
                timeUnit={"Days"} 
                value={days}
            />
            <Counter 
                timeUnit={"Hours"} 
                value={hours} 
            />
            <Counter 
                timeUnit={"Minutes"} 
                value={minutes}
            />
            <Counter 
                timeUnit={"Seconds"} 
                value={seconds}
            />
        </section>
    )
}
