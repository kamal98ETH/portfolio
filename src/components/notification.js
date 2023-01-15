function Notification(props) {
    return (
        <div id="notification-window">
            <div id="popup-body-header">
                <img src={props.notification.icon} id="popup-body-header-icon" alt="notification icon" />
                <div id="notif-window-header-title"><h3>{props.notification.title}</h3></div>
                <button id="notification-header-close" onClick={props.action} ></button>
            </div>
            <div id='notif-window-body'>
                {props.notification.noti_body}
            </div>
        </div>
    )
}

export default Notification;