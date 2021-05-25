import React, { useEffect, useState } from 'react';
import Counter from "./Counter";

export default function CountDownList() {
    const futureDate = new Date("Jun 25, 2031 16:37:52").getTime();
    const [currentDate, setCurrentDate] = useState(new Date().getTime());
    const [timeLeft, setTimeLeft] = useState(futureDate - currentDate);
    const [daysLeft, setDaysLeft] = useState(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
    const [hoursLeft, setHoursLeft] = useState(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const [minutesLeft, setMinutesLeft] = useState(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)))
    const [secondsLeft, setSecondsLeft] = useState(Math.floor((timeLeft % (1000 * 60)) / 1000))
    const [secondPassed, setSecondPassed] = useState(0);
    setInterval(() => {
        setSecondPassed(secondPassed + 1);
    }, 1000)
    useEffect(() => {
        setCurrentDate(new Date().getTime())
        setTimeLeft(futureDate - currentDate)
        setDaysLeft(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
        setHoursLeft(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutesLeft(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
        setSecondsLeft(Math.floor((timeLeft % (1000 * 60)) / 1000))
    }, [secondPassed])

    return (
        <div id="countdown-container">
            <Counter 
                timeUnit={"Days"} 
                value={daysLeft}
            />
            <Counter 
                timeUnit={"Hours"} 
                value={hoursLeft} 
            />
            <Counter 
                timeUnit={"Minutes"} 
                value={minutesLeft}
            />
            <Counter 
                timeUnit={"Seconds"} 
                value={secondsLeft}
            />
        </div>
    )
}
