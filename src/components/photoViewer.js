import { useEffect, useRef, useState } from "react";
import WindowHeader from "./windowHeader";
import next from "../images/windows_xp_icons/next_photo.png";
import previous from "../images/windows_xp_icons/previous_photo.png";

function PhotoViewer(props) {
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
        <div className={"window window-" + props.key_id} style={{ zIndex: props.z_index }} ref={myRef}>
            <WindowHeader data={props.data} key_id={props.key_id} action={props.action} moveWindow={moveWindow} />
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