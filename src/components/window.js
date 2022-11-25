
import windowLogo from "../images/windows_xp_icons/xp-logo.png"
import folderBack from "../images/windows_xp_icons/move-back.png"
import folderForward from "../images/windows_xp_icons/move-forward.png"
import folderUp from "../images/windows_xp_icons/folder-up.png"
import folder from "../images/windows_xp_icons/folder.ico"
import search from "../images/windows_xp_icons/search.ico"
import WindowHeader from "./windowHeader"
import FoldersFiles from "./foldersFiles"

function Window(props) {
    // console.lo g(props)
    let folders_files = props.data.content.folders_files.map((folder_file) => {
        // console.log(folder_file)
        let key = props.data.content.folders_files.indexOf(folder_file)
        return (
            <FoldersFiles key={key} icon={folder_file.icon} title={folder_file.title} id={folder_file.id} action={props.action} />
        )
    })

    return (
        < div className="window" style={{ zIndex: props.z_index }} >
            <WindowHeader data={props.data} minimize_id={props.minimize_id} maximize_id={props.maximize_id} close_id={props.close_id} action={props.action} />
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
                <button className="folder-toolbar-back" onClick={props.action} id={props.back_id}>
                    <div className="round-icon" id={props.back_id}>
                        <img src={folderBack} alt="move back folder icon" id={props.back_id} />
                    </div>
                    <p id={props.back_id}>Back</p>
                </button>
                <button className="folder-toolbar-forward" onClick={props.action} id={props.forward_id}>
                    <div className="round-icon" id={props.forward_id}>
                        <img src={folderForward} alt="move forward folder icon" id={props.forward_id} />
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