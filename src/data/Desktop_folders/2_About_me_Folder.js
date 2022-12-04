import terminal from "../../images/windows_xp_icons/cmd-icon.jpg";
import profile from "../../images/windows_xp_icons/profile.ico";
import fcc from "../../images/desktop/about_me/freecodecamp.png";
import email from "../../images/desktop/about_me/email_logo.png"
import github from "../../images/desktop/about_me/github_logo.png";
import twitter from "../../images/desktop/about_me/twitter_logo.png";
import replit from "../../images/desktop/about_me/replit_logo.png";
import codepen from "../../images/desktop/about_me/codepen_logo.png";
import linkedIn from "../../images/desktop/about_me/linkedin_logo.png";
import me_exe from "./cmd_body_text/2_about_me/me_exe_text"

let About_me_Folder = {
    "new-tab-about-me": {
        icon: profile,
        title: "About me",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: terminal,
                    title: "me.exe",
                    id: "new-tab-me"
                },
                {
                    icon: email,
                    title: "My Email",
                    id: "external-link-my-email"
                },
                {
                    icon: github,
                    title: "My Github",
                    id: "external-link-my-github"
                },
                {
                    icon: fcc,
                    title: "My freecodecamp profile",
                    id: "external-link-my-fcc"
                },
                {
                    icon: linkedIn,
                    title: "My LinkedIn",
                    id: "external-link-my-linkedin"
                },
                {
                    icon: twitter,
                    title: "My Twitter",
                    id: "external-link-my-twitter"
                },
                {
                    icon: replit,
                    title: "My Replit",
                    id: "external-link-my-replit"
                },
                {
                    icon: codepen,
                    title: "My Codepen",
                    id: "external-link-my-codepen"
                }
            ]
        }
    },
    //about me's files
    "new-tab-me": {
        icon: terminal,
        title: "me.exe",
        type: "terminal",
        content: me_exe
    },
    "external-link-my-email": "mailto:kamal98eth@gmail.com",
    "external-link-my-github": "https://github.com/kamal98ETH",
    "external-link-my-fcc": "https://www.freecodecamp.org/kamalEzzoubir",
    "external-link-my-linkedin": "https://www.linkedin.com/in/kamal-ezzoubir-2a5967255/",
    "external-link-my-twitter": "https://twitter.com/Kamal98_eth",
    "external-link-my-replit": "https://replit.com/@Kamal1998",
    "external-link-my-codepen": "https://codepen.io/kamal98eth"
}
export default About_me_Folder;