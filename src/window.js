import closeIcon from "./images/close_window.png"
import windowLogo from "./images/xp-logo.png"
import folderBack from "./images/move-back.png"
import folderForward from "./images/move-forward.png"
import folder from "./images/folder.ico"
import search from "./images/search.ico"

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
            <div className="file-toolbar">
                <div>
                    <button>File</button>
                    <button>Edit</button>
                    <button>View</button>
                    <button>Favorites</button>
                    <button>Tools</button>
                    <button>Help</button>
                </div>
                <div className="window-toolbar-logo">
                    <img src={windowLogo} alt="windows xp logo" />
                </div>
            </div>
            <div className="folder-toolbar">
                <button className="folder-toolbar-back">
                    <div className="round-icon">
                        <img src={folderBack} alt="move back folder icon" />
                    </div>
                    <p>Back</p>
                </button>
                <button className="folder-toolbar-forward">
                    <div className="round-icon">
                        <img src={folderForward} alt="move forward folder icon" />
                    </div>
                </button>
                <button className="folder-toolbar-search">
                    <img src={search} alt="search icon" />
                    <p>Search</p>
                </button>
                <button className="folder-toolbar-folders">
                    <img src={folder} alt="folder icon" />
                    <p>Folders</p>
                </button>
            </div>
            <div className="search-toolbar">
                <p>Address</p>
                <form>
                    <input type="text" name="search" />
                    <button type="submit">
                        <div className="go-icon">
                            <img src={folderForward} alt="forward arrow towards the right" />

                        </div>
                        Go
                    </button>
                </form>
            </div>
            <div className="window-content"></div>
            <div className="window-footer"></div>
        </div >
    )
}

export default Window;