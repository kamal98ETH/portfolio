import windowsLogo from "./images/xp-logo.png";

function ToolBar() {
    return (
        <div id="toolbar">
            <button id="start">
                <img src={windowsLogo} alt="windows xp logo" />
                <p>Start</p>
            </button>
            <div id="tabs"></div>
            <div id="time-notif">
                <p id="time">18:00</p>
            </div>
        </div>
    )
}

export default ToolBar;