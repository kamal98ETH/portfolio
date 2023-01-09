import backgroundPic from "../images/windows_xp_icons/xp-background.jpg";
import ToolBar from "./toolBar";
import '../App.css';
import FoldersFiles from "./foldersFiles";
import iconData from "../data/desktopicons.js";
import Popup from "./popup";
import Notification from "./notification";



function Desktop(props) {
    let desktopicons = iconData.map((icon) => {
        let key = iconData.indexOf(icon);
        return (
            <FoldersFiles key={key} icon={icon.icon} title={icon.title} id={icon.id} action={props.action} />
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
        <div id="container">
            <img src={backgroundPic} alt="windows xp background wallpaper" id="background-img" />
            <div id="desktop">
                {popup}
                {notification}
                <ToolBar active_components={props.active_components} action={props.action} popups={props.popups} notification={props.notification} />
                <div id="desktop-icons">
                    <div id="icons">
                        {desktopicons}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desktop;