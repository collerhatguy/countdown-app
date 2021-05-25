import React from 'react'

export default function Counter({timeUnit, value}) {
    return (
        <div className="counter">
            <div className="time-box">
                {value}
            </div>
            <div className="time-unit">{timeUnit}</div>
        </div>
    )
}
