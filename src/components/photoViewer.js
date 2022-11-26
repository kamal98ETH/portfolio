import WindowHeader from "./windowHeader";
import next from "../images/windows_xp_icons/next_photo.png"
import previous from "../images/windows_xp_icons/previous_photo.png"

function PhotoViewer(props) {
    console.log(props)
    return (
        <div className="photo" style={{ zIndex: props.z_index }}>
            <WindowHeader data={props.data} key_id={props.key_id} action={props.action} />
            <div className="photo-body">
                <img src={props.data.content} alt="project screenshot" />
            </div>
            <div className="photo-footer">
                <button onClick={props.action} ><img src={previous} alt="windows xp photo viewer previous photo button" id={"photo-previous-" + props.key_id} /></button>
                <button onClick={props.action} ><img src={next} alt="windows xp photo viewer next photo button" id={"photo-next-" + props.key_id} /></button>
            </div>
        </div>
    )
};

export default PhotoViewer;