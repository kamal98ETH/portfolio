import WindowHeader from "./windowHeader";
import { useEffect, useState } from "react";

function Cmd(props) {
    // console.log(props)
    let data_content = props.data.content;

    //set a dynamic typing speed depending on number of letters to be displayed
    const ANIMATION_TIME = 5000;
    let number_of_letters = 0;
    for (let index in data_content) {
        if (data_content[index].data) {
            number_of_letters += data_content[index].data.length
        }
    }
    let interval = ANIMATION_TIME / number_of_letters;

    //new variable that will copy data content but letter by letter to form the typing animation
    let [paragraph_content, setParagraphContent] = useState([])
    //index representing the letter we are currently copying
    let [data_content_str_index, setDataContentStrIndex] = useState(0)
    //index representing the data_content item we are currently copying
    let [data_content_array_index, setDataContentArrayIndex] = useState(0)

    useEffect(() => {
        // check if we did not exceed the length of data coming from props
        if (data_content_array_index < data_content.length) {
            //check if the we are receiving a paragraph or a link
            if (data_content[data_content_array_index]["data"]) {
                //check if the index we want to render doesn't exceed the length of the string we are currently copying
                if (data_content_str_index < data_content[data_content_array_index]["data"].length) {
                    setTimeout(() => {
                        setDataContentStrIndex(data_content_str_index + 1)
                        if (paragraph_content[data_content_array_index]) {
                            setParagraphContent([...paragraph_content.slice(0, data_content_array_index), paragraph_content[data_content_array_index] + data_content[data_content_array_index]["data"][data_content_str_index]])
                        } else {
                            setParagraphContent([...paragraph_content.slice(0, data_content_array_index), data_content[data_content_array_index]["data"][data_content_str_index]])
                        }
                        //check if we copied the whole string we are currently on
                        if (data_content[data_content_array_index]["data"].length === data_content_str_index + 1) {
                            setDataContentArrayIndex(data_content_array_index + 1)
                            setDataContentStrIndex(0)
                        }
                    }, interval)
                }
                //check if we are receiving a break element
            } else {
                setDataContentArrayIndex(data_content_array_index + 1)
                setDataContentStrIndex(-1)
            }
        }
    }, [data_content_str_index, data_content, interval, paragraph_content, data_content_array_index])

    let key = -1
    let text_to_display = paragraph_content.map((line) => {
        key++
        if (data_content[key].type === "paragraph") {
            return <p key={key}>{line}</p>
        } else if (data_content[key].type === "link") {
            return <a key={key} href={data_content[key].href} target="_blank" rel="noreferrer">{line}</a>
        } else if (data_content[key].type === "break") {
            return <br key={key} />
        }
        return null;
    })

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
            <div className="cmd-body">
                {text_to_display}
            </div>
        </div>
    )
};

export default Cmd;