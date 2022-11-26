import closeIcon from "../images/windows_xp_icons/close_window.png"

function WindowHeader(props) {
    // console.log(props)
    return (
        <div className="window-header">
            <div className="window-header-title">
                <img src={props.data.icon} alt="window header icon" />
                <h1>{props.data.title}</h1>
            </div>
            <div className="window-header-display-tools">
                <button className="minimize" title="minimize" onClick={props.action} id={"minimize-" + props.key_id}>
                    <div className="min-icon-outer" id={"minimize-" + props.key_id}>
                        <div className="min-icon-inner" id={"minimize-" + props.key_id}></div>
                    </div>
                </button>
                <button className="maximize" title="maximize" onClick={props.action} id={"maximize-" + props.key_id}>
                    <div className="max-icon-outer" id={"maximize-" + props.key_id}>
                        <div className="max-icon-inner" id={"maximize-" + props.key_id}></div>
                    </div>
                </button>
                <button className="close" title="close" onClick={props.action}>
                    <img src={closeIcon} alt="window close button" id={"close-" + props.key_id} />
                </button>
            </div>
        </div>
    )
}

export default WindowHeader;