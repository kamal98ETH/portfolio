import windowsLogo from "./images/xp-logo.png";
import Tab from "./tab";

function ToolBar(props) {
    // console.log(props)
    let key = -1;
    let tabs = props.active_components.map((active) => {
        key++;
        return (
            <Tab key={key} icon={active.data[active.render_index].icon} title={active.data[active.render_index].title} id={"tab-" + key} action={props.action} />
        )
    })
    return (
        <div id="toolbar">
            <button className="start" id="start" onClick={props.action}>
                <img src={windowsLogo} alt="windows xp logo" id="start" />
                <p id="start">Start</p>
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