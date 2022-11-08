import WindowHeader from "./windowHeader";
import cmdIcon from "./images/cmd-icon.jpg"

function Cmd(props) {
    return (
        <div className="cmd">
            <WindowHeader icon={cmdIcon} />
            <div className="cmd-body">
                {props.content}
            </div>
        </div>
    )
};

export default Cmd;