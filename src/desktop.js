import backgroundPic from "./images/xp-background.jpg";
import ToolBar from "./toolBar";
import './App.css';
import Folders_files from "./folders_files";
import iconData from "./desktopicons.js";


function Desktop(props) {
    let desktopicons = iconData.map((icon) => {
        let key = iconData.indexOf(icon);
        return (
            <Folders_files key={key} icon={icon.icon} title={icon.title} id={icon.id} action={props.action} />
        )
    })

    return (
        <div id="container">
            <img src={backgroundPic} alt="windows xp background wallpaper" id="background-img" />
            <div id="desktop">
                <ToolBar active_components={props.active_components} />
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