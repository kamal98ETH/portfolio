import closeIcon from "./images/close_window.png"

function Window() {
    return (
        <div className="window">
            <div className="window-header">
                <div className="window-header-icon"></div>
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
                    <button className="close" title="close">
                        <img src={closeIcon} alt="window close button" />
                    </button>
                </div>
            </div>
            <div className="file-toolbar"></div>
            <div className="search-toolbar"></div>
            <div className="window-content"></div>
            <div className="window-footer"></div>
        </div>
    )
}

export default Window;