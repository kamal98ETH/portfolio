import backgroundPic from "../images/windows_xp_icons/xp-background.jpg";
import ToolBar from "./toolBar";
import '../App.css';
import FoldersFiles from "./foldersFiles";
import iconData from "../data/desktopicons.js";
import Notification from "./notification";


function Desktop(props) {
    let desktopicons = iconData.map((icon) => {
        let key = iconData.indexOf(icon);
        return (
            <FoldersFiles key={key} icon={icon.icon} title={icon.title} id={icon.id} action={props.action} />
        )
    })

    let notification;
    if (props.notifications.length) {
        notification = <Notification notification={props.notifications} action={props.action} />
    }

    return (
        <div id="container">
            <img src={backgroundPic} alt="windows xp background wallpaper" id="background-img" />
            <div id="desktop">
                {notification}
                <ToolBar active_components={props.active_components} action={props.action} notifications={props.notifications} />
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