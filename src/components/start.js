import profileLogo from "../images/windows_xp_icons/icon.ico";
import rightArrow from "../images/windows_xp_icons/go-arrow.png";
import exemple from "../images/windows_xp_icons/folder.ico";
import StartPrograms from "./startPrograms";

function Start() {
    return (
        <div id="start-page">
            <div id="start-header">
                <img src={profileLogo} alt="profile logo" />
                <h1>Admin</h1>
            </div>
            <div id="start-body">
                <div id="start-body-left-programs">
                    <StartPrograms icon={exemple} />
                    <StartPrograms icon={exemple} />
                    <StartPrograms icon={exemple} />
                    <hr />
                    <StartPrograms icon={exemple} />
                    <StartPrograms icon={exemple} />
                    <StartPrograms icon={exemple} />
                    <hr />
                    <button>
                        All Programs
                        <img src={rightArrow} alt="green arrow facing the right" />
                    </button>
                </div>
                <div id="start-body-right-programs">
                    <StartPrograms icon={exemple} />
                    <StartPrograms icon={exemple} />
                    <StartPrograms icon={exemple} />
                    <hr />
                    <StartPrograms icon={exemple} />
                    <StartPrograms icon={exemple} />
                    <StartPrograms icon={exemple} />
                    <hr />
                    <StartPrograms icon={exemple} />
                    <StartPrograms icon={exemple} />
                    <StartPrograms icon={exemple} />
                </div>
            </div>
            <div id="start-footer">
                <StartPrograms icon={exemple} />
                <StartPrograms icon={exemple} />
            </div>
        </div>
    )
}

export default Start;