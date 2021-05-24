import React from 'react'

export default function Counter({timeUnit}) {
    return (
        <div className="counter">
            <div className="time-box">

            </div>
            <div className="time-unit">{timeUnit}</div>
        </div>
    )
}
