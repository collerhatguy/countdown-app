import { useState, useEffect } from "react";

const msPerSecond = 1000;
const msPerMinute = msPerSecond * 60;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;

const useCountdown = (futureDate) => {

    const getMsLeft = () => futureDate - Date.now();

    const [msLeft, setMsLeft] = useState(getMsLeft())

    const getDaysLeft = () => Math.floor(msLeft / msPerDay)
    const getHoursLeft = () => Math.floor((msLeft % msPerDay) / msPerHour)
    const getMinutesLeft = () => Math.floor((msLeft % msPerHour) / msPerMinute)
    const getSecondsLeft = () => Math.floor((msLeft % msPerMinute) / msPerSecond)

    const [daysLeft, setDaysLeft] = useState(getDaysLeft());
    const [hoursLeft, setHoursLeft] = useState(getHoursLeft());
    const [minutesLeft, setMinutesLeft] = useState(getMinutesLeft())
    const [secondsLeft, setSecondsLeft] = useState(getSecondsLeft())
    const [secondsPassed, setSecondsPassed] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsPassed(prevSeconds => prevSeconds + 1);
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        setMsLeft(getMsLeft())
        setDaysLeft(getDaysLeft());
        setHoursLeft(getHoursLeft());
        setMinutesLeft(getMinutesLeft());
        setSecondsLeft(getSecondsLeft())
    }, [secondsPassed])

    return [daysLeft, hoursLeft, minutesLeft, secondsLeft]
}
export default useCountdown;