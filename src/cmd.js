import WindowHeader from "./windowHeader";
import cmdIcon from "./images/cmd-icon.jpg"

function Cmd() {
    return (
        <div className="cmd">
            <WindowHeader icon={cmdIcon} />
            <div className="cmd-body">
                <p>K:\&gt; Hey, it's Kamal<br />K:\&gt; Welcome to my porfolio</p>
            </div>
        </div>
    )
};

export default Cmd;