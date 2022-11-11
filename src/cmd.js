import WindowHeader from "./windowHeader";

function Cmd(props) {
    // console.log(props)
    return (
        <div className="cmd" style={{ zIndex: props.z_index }}>
            <WindowHeader data={props.data} minimize_id={props.minimize_id} maximize_id={props.maximize_id} close_id={props.close_id} action={props.action} />
            <div className="cmd-body">
                {props.data.content}
            </div>
        </div>
    )
};

export default Cmd;