function DesktopIcon(props) {
    return (
        <button className="desktop-icon">
            <img src={props.icon} alt="Desktop icon image" />
            <h1>{props.title}</h1>
        </button>
    )
}

export default DesktopIcon;