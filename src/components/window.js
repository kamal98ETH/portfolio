
import { useEffect, useRef, useState } from "react";
import windowLogo from "../images/windows_xp_icons/xp-logo.png";
import folderBack from "../images/windows_xp_icons/move-back.png";
import folderForward from "../images/windows_xp_icons/move-forward.png";
import folderUp from "../images/windows_xp_icons/folder-up.png";
import folder from "../images/windows_xp_icons/folder.ico";
import search from "../images/windows_xp_icons/search.ico";
import WindowHeader from "./windowHeader";
import FoldersFiles from "./foldersFiles";

function Window(props) {
    const [position, setPosition] = useState({ top: "8%", left: "20%" })
    // console.lo g(props)
    let folders_files = props.data.content.folders_files.map((folder_file) => {
        // console.log(folder_file)
        let key = props.data.content.folders_files.indexOf(folder_file)
        return (
            <FoldersFiles key={key} icon={folder_file.icon} title={folder_file.title} id={folder_file.id} action={props.action} />
        )
    })

    const myRef = useRef(null);

    function moveWindow(newPosition) {
        setPosition(newPosition)
    }

    useEffect(() => {
        //set window to be fullscreen or not
        if (window.innerWidth > 1000) {
            if (props.fullscreen) {
                //change the state fullscreen for selected window to be true
                document.querySelector(".window-" + props.key_id).style.width = "100%"
                document.querySelector(".window-" + props.key_id).style.height = "calc(100% - 3.188rem)"
                document.querySelector(".window-" + props.key_id).style.left = "0"
                document.querySelector(".window-" + props.key_id).style.top = "0"

            } else {
                //change style of selected window to be fullscreen
                document.querySelector(".window-" + props.key_id).style.width = "60%"
                document.querySelector(".window-" + props.key_id).style.height = "80%"
                document.querySelector(".window-" + props.key_id).style.left = position.left
                document.querySelector(".window-" + props.key_id).style.top = position.top
            }
        } else {
            document.querySelector(".window-" + props.key_id).style.width = "100%"
            document.querySelector(".window-" + props.key_id).style.height = "calc(100% - 3.188rem)"
            document.querySelector(".window-" + props.key_id).style.left = "0"
            document.querySelector(".window-" + props.key_id).style.top = "0"
        }
    })

    return (
        < div className={"window window-" + props.key_id} style={{ zIndex: props.z_index }} ref={myRef} >
            <WindowHeader data={props.data} key_id={props.key_id} action={props.action} moveWindow={moveWindow} />
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
                <button className="folder-toolbar-back" onClick={props.action} id={"back-" + props.key_id}>
                    <div className="round-icon" id={"back-" + props.key_id}>
                        <img src={folderBack} alt="move back folder icon" id={"back-" + props.key_id} />
                    </div>
                    <p id={"back-" + props.key_id}>Back</p>
                </button>
                <button className="folder-toolbar-forward" onClick={props.action} id={"forward-" + props.key_id}>
                    <div className="round-icon" id={"forward-" + props.key_id}>
                        <img src={folderForward} alt="move forward folder icon" id={"forward-" + props.key_id} />
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