import exemple from "./images/folder.ico"

function DesktopIcon() {
    return (
        <div className="desktop-icon">
            <img src={exemple} alt="the desktop icon image" />
            <h1>exemple title</h1>
        </div>
    )
}

export default DesktopIcon;