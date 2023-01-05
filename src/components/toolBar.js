import windowsLogo from "../images/windows_xp_icons/xp-logo.png";
import Tab from "./tab";
import fullscreen_icon from "../images/windows_xp_icons/full-screen.png"
import Time from "./time";
import Popup from "./popup";
import Notification from "./notification";

function ToolBar(props) {
    // let current_time = new Date().toTimeString().slice(0, 5);
    // let [values, setValues] = useState({
    //     time: current_time,
    //     colon: true
    // })

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         let current_time = new Date().toTimeString().slice(0, 5);
    //         let new_colon;
    //         if (values.colon) {
    //             current_time = current_time.replace(":", " ")
    //             new_colon = false
    //         } else {
    //             current_time = current_time.replace(" ", ":")
    //             new_colon = true
    //         }
    //         setValues({
    //             time: current_time,
    //             colon: new_colon
    //         })
    //     }, 1000);
    //     return () => {
    //         clearInterval(interval)
    //     }
    // })

    // console.log(props)
    let key = -1;
    let tabs = props.active_components.map((active) => {
        key++;
        return (
            <Tab key={key} icon={active.data[active.render_index].icon} title={active.data[active.render_index].title} id={"tab-" + key} action={props.action} />
        )
    })


    let popup;
    if (props.popups.length) {
        popup = <Popup popup={props.popups} action={props.action} />
    }

    let notification;
    if (props.notification) {
        notification = <Notification action={props.action} notification={props.notification} />
    }

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
                <div id="notifications">
                    <button onClick={props.action} id="notification-fullscreen-mode">
                        <img src={fullscreen_icon} alt="fullscreen icon" id="notification-fullscreen-mode" />
                    </button>
                </div>
                <Time />
                {/* <p id="time">{values.time}</p> */}
            </div>
            {popup}
            {notification}
        </div>
    )
}

export default ToolBar;