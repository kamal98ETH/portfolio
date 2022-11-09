import closeIcon from "./images/close_window.png"

function WindowHeader(props) {
    return (
        <div className="window-header">
            <div className="window-header-title">
                <img src={props.data.icon} alt="window header icon" />
                <h1>{props.data.title}</h1>
            </div>
            <div className="window-header-display-tools">
                <button className="minimize" title="minimize">
                    <div className="min-icon-outer">
                        <div className="min-icon-inner"></div>
                    </div>
                </button>
                <button className="maximize" title="maximize">
                    <div className="max-icon-outer">
                        <div className="max-icon-inner"></div>
                    </div>
                </button>
                <button className="close" title="close" onClick={props.action}>
                    <img src={closeIcon} alt="window close button" id="close-button" />
                </button>
            </div>
        </div>
    )
}

export default WindowHeader;