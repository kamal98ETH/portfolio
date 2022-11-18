import windowsLogo from "../images/windows_xp_icons/xp-logo.png";
import { useEffect, useState } from 'react'
import Tab from "./tab";

function ToolBar(props) {
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

    // console.log(props)
    let key = -1;
    let tabs = props.active_components.map((active) => {
        key++;
        return (
            <Tab key={key} icon={active.data[active.render_index].icon} title={active.data[active.render_index].title} id={"tab-" + key} action={props.action} />
        )
    })
    return (
        <div id="toolbar">
            <button className="start" id="start" onClick={props.action}>
                <img src={windowsLogo} alt="windows xp logo" id="start" />
                <p id="start">Start</p>
            </button>
            <div id="tabs">
                {tabs}
            </div>
            <div id="time-notif">
                <div id="notifications"></div>
                <p id="time">{values.time}</p>
            </div>
        </div>
    )
}

export default ToolBar;