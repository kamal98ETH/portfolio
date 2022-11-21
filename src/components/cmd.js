import WindowHeader from "./windowHeader";
import { useEffect, useState } from "react";

function Cmd(props) {
    // console.log(props)
    let data_content = props.data.content;
    let [content, setContent] = useState("")
    let [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < data_content.length) {
            setTimeout(() => {
                setContent(content + data_content[index])
                setIndex(index + 1)
            }, 50)
        }
    }, [index, content])

    return (
        <div className="cmd" style={{ zIndex: props.z_index }}>
            <WindowHeader data={props.data} minimize_id={props.minimize_id} maximize_id={props.maximize_id} close_id={props.close_id} action={props.action} />
            <div className="cmd-body">
                <p>{content}</p>
            </div>
        </div>
    )
};

export default Cmd;