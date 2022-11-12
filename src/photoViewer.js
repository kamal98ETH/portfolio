import WindowHeader from "./windowHeader";

function PhotoViewer(props) {
    // console.log(props)
    return (
        <div className="photo" style={{ zIndex: props.z_index }}>
            <WindowHeader data={props.data} minimize_id={props.minimize_id} maximize_id={props.maximize_id} close_id={props.close_id} action={props.action} />
            <div className="photo-body">
                <img src={props.data.content} alt="project screenshot" />
            </div>
        </div>
    )
};

export default PhotoViewer;