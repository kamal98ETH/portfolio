import backgroundPic from "./images/xp-background.jpg";
import ToolBar from "./toolBar";
import './App.css';
import DesktopIcon from "./desktopIcon";
import iconData from "./desktopicons.js";

let desktopicons = iconData.map((icon) => {
    let key = iconData.indexOf(icon);
    return (
        <DesktopIcon key={key} icon={icon.icon} title={icon.title} />
    )
})

function Desktop(props) {
    return (
        <div id="container">
            <img src={backgroundPic} alt="windows xp background wallpaper" id="background-img" />
            <div id="desktop">
                <ToolBar active_components={props.active_components} />
                <div id="desktop-icons">
                    <div id="icons">
                        {desktopicons}
                    </div>
                    <div></div>
                </div>

            </div>
        </div>
    )
}

export default Desktop;