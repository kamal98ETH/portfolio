import WindowHeader from "./windowHeader";
import { useEffect, useState } from "react";

function Cmd(props) {
    // console.log(props)
    let data_content = props.data.content;
    // let data_content = [
    //     {
    //         type: "paragraph",
    //         data: "test1 some random text here"
    //     },
    //     // {
    //     //     type: "break"
    //     // },
    //     {
    //         type: "link",
    //         data: "link to google",
    //         href: "https://www.google.com"
    //     },
    //     {
    //         type: "paragraph",
    //         data: "test1 some random text here"
    //     }
    // ];
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
                        if (data_content[data_content_array_index]["data"].length == data_content_str_index + 1) {
                            setDataContentArrayIndex(data_content_array_index + 1)
                            setDataContentStrIndex(0)
                        }
                    }, 50)
                }
                //check if we are receiving a break element
            } else {
                setDataContentArrayIndex(data_content_array_index + 1)
                setDataContentStrIndex(-1)
            }
        }
    }, [data_content_str_index])

    let text_to_display = paragraph_content.map((line) => {
        let key = paragraph_content.indexOf(line)
        if (data_content[key].type == "paragraph") {
            return <p key={key}>{line}</p>
        } else if (data_content[key].type == "link") {
            return <a key={key} href={data_content[key].href} target="_blank">{line}</a>
        } else if (data_content[key].type == "break") {
            console.log('br')
            return <br />
        }
    })

    // useEffect(() => {
    //     if (index < data_content.length) {
    //         setTimeout(() => {
    //             setContent(content + data_content[index])
    //             setIndex(index + 1)
    //         }, 50)
    //     }
    // }, [index, content])

    return (
        <div className="cmd" style={{ zIndex: props.z_index }}>
            <WindowHeader data={props.data} minimize_id={props.minimize_id} maximize_id={props.maximize_id} close_id={props.close_id} action={props.action} />
            <div className="cmd-body">
                {text_to_display}
                {/* {paragraph_content} */}
                {/* {data_content_str_index} */}
            </div>
        </div>
    )
};

export default Cmd;