
import windowLogo from "./images/xp-logo.png"
import folderBack from "./images/move-back.png"
import folderForward from "./images/move-forward.png"
import folderUp from "./images/folder-up.png"
import folder from "./images/folder.ico"
import search from "./images/search.ico"
import WindowHeader from "./windowHeader"
import Folders_files from "./folders_files"

function Window(props) {
    let folders_files = props.data.content.folders_files.map((folder_file) => {
        // console.log(folder_file)
        let key = props.data.content.folders_files.indexOf(folder_file)
        return (
            <Folders_files key={key} icon={folder_file.icon} title={folder_file.title} id={folder_file.id} action={props.action} />
        )
    })

    return (
        < div className="window" >
            <WindowHeader data={props.data} action={props.action} />
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
                <button className="folder-toolbar-folderUp" >
                    <img src={folderUp} alt="folder up icon" />
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
            <div className="window-content">
                <div className="window-content-shortcuts"></div>
                <div className="window-content-main">
                    <div className="window-folders-files">
                        {folders_files}
                    </div>
                </div>
            </div>
            <div className="window-footer"></div>
        </div >
    )
}

export default Window;