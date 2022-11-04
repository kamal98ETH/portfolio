import windowsLogo from "./images/xp-logo.png";

function ToolBar() {
    return (
        <div id="toolbar">
            <button id="start">
                <img src={windowsLogo} alt="windows xp logo" />
                <p>Start</p>
            </button>
        </div>
    )
}

export default ToolBar;