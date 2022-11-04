import backgroundPic from "./images/xp-background.jpg";
import './App.css';

function Background() {
    return (
        <div id="container">
            <img src={backgroundPic} alt="windows xp background wallpaper" id="background-img" />
        </div>
    )
}

export default Background;