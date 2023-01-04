import { useEffect, useState } from 'react'

function Time() {
    let current_time = new Date().toTimeString().slice(0, 5);
    let [values, setValues] = useState({
        time: current_time,
        colon: true
    })

    useEffect(() => {
        const interval = setInterval(() => {
            let current_time = new Date().toTimeString().slice(0, 5);
            let new_colon;
            if (values.colon) {
                current_time = current_time.replace(":", " ")
                new_colon = false
            } else {
                current_time = current_time.replace(" ", ":")
                new_colon = true
            }
            setValues({
                time: current_time,
                colon: new_colon
            })
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    })

    return (

        <p id="time">{values.time}</p>

    )
}

export default Time;