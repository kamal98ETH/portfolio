import { useEffect, useRef, useState } from "react";
import windowLogo from "../images/windows_xp_icons/xp-logo.png";
import folderBack from "../images/windows_xp_icons/move-back.png";
import folderForward from "../images/windows_xp_icons/move-forward.png";
import explorer_x from "../images/windows_xp_icons/explorer_x.png";
import reload from "../images/windows_xp_icons/explorer_reload.png";
import home from "../images/windows_xp_icons/explorer_home_logo.png";
import favorites from "../images/windows_xp_icons/favorites.png";
import search from "../images/windows_xp_icons/search.ico";
import WindowHeader from "./windowHeader";

function Explorer(props) {
    // console.log(props)

    const [position, setPosition] = useState({ top: "8%", left: "20%" })

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
                        <img src={folderForward} alt="move forward page icon" id={"forward-" + props.key_id} />
                    </div>
                </button>
                <button className="folder-toolbar-x" >
                    <img src={explorer_x} alt="explorer x icon" />
                </button>
                <button className="folder-toolbar-reload" >
                    <img src={reload} alt="explorer reload icon" />
                </button>
                <button className="folder-toolbar-home" >
                    <img src={home} alt="explorer home icon" />
                </button>
                <button className="folder-toolbar-search">
                    <img src={search} alt="search icon" />
                    <p>Search</p>
                </button>
                <button className="folder-toolbar-folders">
                    <img src={favorites} alt="folder icon" />
                    <p>Favorites</p>
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
            <div className="explorer-content-main">
                {props.data.content.explorer_page}
            </div>
            <div className="window-footer"></div>
        </div >
    )
}

export default Explorer;