import { useEffect } from "react";
import WindowHeader from "./windowHeader";
import next from "../images/windows_xp_icons/next_photo.png";
import previous from "../images/windows_xp_icons/previous_photo.png";

function PhotoViewer(props) {
    // console.log(props)

    useEffect(() => {
        //set window to be fullscreen or not
        if (window.innerWidth > 1000) {
            if (props.fullscreen) {
                //change the state fullscreen for selected window to be true
                document.querySelector(".window-" + props.key_id).style.width = "100vw"
                document.querySelector(".window-" + props.key_id).style.height = "calc(100vh - 3.188rem)"
                document.querySelector(".window-" + props.key_id).style.left = "0"
                document.querySelector(".window-" + props.key_id).style.top = "0"

            } else {
                //change style of selected window to be fullscreen
                document.querySelector(".window-" + props.key_id).style.width = "60%"
                document.querySelector(".window-" + props.key_id).style.height = "80%"
                document.querySelector(".window-" + props.key_id).style.left = "20%"
                document.querySelector(".window-" + props.key_id).style.top = "8%"
            }
        } else {
            document.querySelector(".window-" + props.key_id).style.width = "100vw"
            document.querySelector(".window-" + props.key_id).style.height = "calc(100vh - 3.188rem)"
            document.querySelector(".window-" + props.key_id).style.left = "0"
            document.querySelector(".window-" + props.key_id).style.top = "0"
        }
    })

    return (
        <div className={"window window-" + props.key_id} style={{ zIndex: props.z_index }}>
            <WindowHeader data={props.data} key_id={props.key_id} action={props.action} />
            <div className="photo-body">
                <img src={props.data.content} alt="project screenshot" />
            </div>
            <div className="photo-footer">
                <button onClick={props.action} ><img src={previous} alt="windows xp photoviewer previous  button" id={"photo-previous-" + props.key_id} /></button>
                <button onClick={props.action} ><img src={next} alt="windows xp photoviewer next button" id={"photo-next-" + props.key_id} /></button>
            </div>
        </div>
    )
};

export default PhotoViewer;