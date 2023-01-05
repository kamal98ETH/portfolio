function Popup(props) {
    // console.log(props.popup)
    let right;
    if (window.innerWidth > 1000) {
        right = props.popup[0].position[0];
    } else if (window.innerWidth <= 550) {
        right = props.popup[0].position[2];
    } else if (window.innerWidth <= 1000) {
        right = props.popup[0].position[1];
    }


    return (
        <div id="popup" style={{ right: right }}>
            <div id="popup-tip">
                <div id="popup-tip-border"></div>
                <div id="popup-tip-inner"></div>
            </div>
            <div id="popup-body">
                <div id="popup-body-header">
                    <img src={props.popup[0].icon} id="popup-body-header-icon" alt="popup icon" />
                    <div id="popup-body-header-title">{props.popup[0].title}</div>
                    <button id="popup-body-header-close" onClick={props.action}></button>
                </div>
                <div id="popup-body-text">{props.popup[0].body}</div>
                <div id="popup-body-line"></div>
            </div>
        </div>
    )
}

export default Popup;