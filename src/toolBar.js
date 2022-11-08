import windowsLogo from "./images/xp-logo.png";
import Tab from "./tab";

function ToolBar(props) {
    let tabs = props.active_components.map((active) => {
        let key = props.active_components.indexOf(active);
        return (
            <Tab key={key} icon={active.icon} title={active.title} />
        )
    })
    return (
        <div id="toolbar">
            <button id="start">
                <img src={windowsLogo} alt="windows xp logo" />
                <p>Start</p>
            </button>
            <div id="tabs">
                {tabs}
            </div>
            <div id="time-notif">
                <div id="notifications"></div>
                <p id="time">18:00</p>
            </div>
        </div>
    )
}

export default ToolBar;