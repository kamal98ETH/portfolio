import fullscreen_icon from "../images/windows_xp_icons/full-screen.png";

const notifications = {
    "notification-fullscreen-mode": {
        icon: fullscreen_icon,
        title: "Fullscreen mode",
        noti_body:
            <div>
                <p>For better experience fullscreen mode is recommended. Do you want to browse in fullscreen mode?</p>
                <div id="notification-fullscreen-mode-buttons">
                    <button onClick={() => {
                        let elem = document.documentElement;
                        if (elem.requestFullscreen) {
                            elem.requestFullscreen();
                        } else if (elem.webkitRequestFullscreen) {
                            elem.webkitRequestFullscreen();
                        } else if (elem.msRequestFullscreen) {
                            elem.msRequestFullscreen();
                        }
                    }}>Yes</button>
                    <button onClick={() => {

                        if (document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if (document.webkitExitFullscreen) {
                            document.webkitExitFullscreen();
                        } else if (document.msExitFullscreen) {
                            document.msExitFullscreen();
                        }
                    }}>Exit</button>
                </div>
            </div>
    }
}

export default notifications;