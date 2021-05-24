import React from 'react';
import Counter from "./Counter";

export default function CountDownList() {
    return (
        <div id="countdown-container">
            <Counter timeUnit={"Days"}/>
            <Counter timeUnit={"Hours"}/>
            <Counter timeUnit={"Minutes"}/>
            <Counter timeUnit={"Seconds"}/>
        </div>
    )
}
