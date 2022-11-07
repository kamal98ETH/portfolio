import backgroundPic from "./images/xp-background.jpg";
import ToolBar from "./toolBar";
import './App.css';
import DesktopIcon from "./desktopIcon";
import Window from "./window";
import Cmd from "./cmd";
import Start from "./start";

function Desktop() {
    return (
        <div id="container">
            <img src={backgroundPic} alt="windows xp background wallpaper" id="background-img" />
            <div id="desktop">
                <ToolBar />
                <div id="desktop-icons">
                    <div id="icons">
                        <DesktopIcon />
                        <DesktopIcon />
                        <DesktopIcon />
                        <DesktopIcon />
                        <DesktopIcon />
                        <DesktopIcon />
                        <DesktopIcon />
                        <DesktopIcon />
                        <DesktopIcon />
                    </div>
                    <div></div>
                </div>
                {/* <Window /> */}
                <Cmd />
                {/* <Start /> */}
            </div>
        </div>
    )
}

export default Desktop;