import closeIcon from "./images/close_window.png"

function WindowHeader(props) {
    // console.log(props)
    return (
        <div className="window-header">
            <div className="window-header-title">
                <img src={props.data.icon} alt="window header icon" />
                <h1>{props.data.title}</h1>
            </div>
            <div className="window-header-display-tools">
                <button className="minimize" title="minimize" onClick={props.action} id={props.minimize_id}>
                    <div className="min-icon-outer" id={props.minimize_id}>
                        <div className="min-icon-inner" id={props.minimize_id}></div>
                    </div>
                </button>
                <button className="maximize" title="maximize" onClick={props.action} id={props.maximize_id}>
                    <div className="max-icon-outer" id={props.maximize_id}>
                        <div className="max-icon-inner" id={props.maximize_id}></div>
                    </div>
                </button>
                <button className="close" title="close" onClick={props.action}>
                    <img src={closeIcon} alt="window close button" id={props.close_id} />
                </button>
            </div>
        </div>
    )
}

export default WindowHeader;