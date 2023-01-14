import WindowHeader from "./windowHeader";
import { useEffect, useRef, useState } from "react";
import CmdBody from "./cmd_body";

function Cmd(props) {
    // console.log(props)
    let data_content = props.data.content;

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
                document.querySelector(".window-" + props.key_id).style.width = "100vw"
                document.querySelector(".window-" + props.key_id).style.height = "calc(100vh - 3.188rem)"
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
            document.querySelector(".window-" + props.key_id).style.width = "100vw"
            document.querySelector(".window-" + props.key_id).style.height = "calc(100vh - 3.188rem)"
            document.querySelector(".window-" + props.key_id).style.left = "0"
            document.querySelector(".window-" + props.key_id).style.top = "0"
        }
    })


    return (
        <div className={"window window-" + props.key_id} style={{ zIndex: props.z_index }} ref={myRef}>
            <WindowHeader data={props.data} key_id={props.key_id} action={props.action} moveWindow={moveWindow} />
            <CmdBody data_content={data_content} />
        </div>
    )
};

export default Cmd;