function Notification(props) {
    console.log(props.notification)
    let right;
    if (window.innerWidth > 1000) {
        right = props.notification[0].position[0];
    } else if (window.innerWidth <= 550) {
        right = props.notification[0].position[2];
    } else if (window.innerWidth <= 1000) {
        right = props.notification[0].position[1];
    }


    return (
        <div id="notification" style={{ right: right }}>
            <div id="notif-tip">
                <div id="notif-tip-border"></div>
                <div id="notif-tip-inner"></div>
            </div>
            <div id="notif-body">
                <div id="notif-body-header">
                    <img src={props.notification[0].icon} id="notif-body-header-icon" alt="notification icon" />
                    <div id="notif-body-header-title">{props.notification[0].title}</div>
                    <button id="notif-body-header-close" onClick={props.action}></button>
                </div>
                <div id="notif-body-text">{props.notification[0].body}</div>
                <div id="notif-body-line"></div>
            </div>
        </div>
    )
}

export default Notification;