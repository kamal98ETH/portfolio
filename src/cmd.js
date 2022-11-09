import WindowHeader from "./windowHeader";

function Cmd(props) {
    return (
        <div className="cmd">
            <WindowHeader data={props.data} action={props.action} />
            <div className="cmd-body">
                {props.data.content}
            </div>
        </div>
    )
};

export default Cmd;