import terminal from "../../images/windows_xp_icons/cmd-icon.jpg";
import profile from "../../images/windows_xp_icons/profile.ico";
import fcc from "../../images/desktop/about_me/freecodecamp.png";
import email from "../../images/desktop/about_me/email_logo.png"
import github from "../../images/desktop/about_me/github_logo.png";
import twitter from "../../images/desktop/about_me/twitter_logo.png";
import replit from "../../images/desktop/about_me/replit_logo.png";
import codepen from "../../images/desktop/about_me/codepen_logo.png";
import linkedIn from "../../images/desktop/about_me/linkedin_logo.png";

let sec_desktop_item = {
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
        content: "K:> Hey, \n K:> it's Kamal \n K:> I am a self-taught developer\n K:> I started learning programming on my own in January 2022 and I have been loving it since \n K:> I’ve learned a lot since then and I do have a lot more to learn \n K:> I am glad that you found your way to my portfolio \n K:> I will be constantly sharing my work over here as I learn more new things \n K:> I hope you have a good time browsing around here \n K:> M looking forward to getting to know you too, so feel free to contact me on my socials \n K:> And also if you have any remarks, advices, mistakes you found… I would be very happy to hear from you"
    },
    "external-link-my-email": "mailto:kamal98eth@gmail.com",
    "external-link-my-github": "https://github.com/kamal98ETH",
    "external-link-my-fcc": "https://www.freecodecamp.org/kamalEzzoubir",
    "external-link-my-linkedin": "https://www.linkedin.com/in/kamal-ezzoubir-2a5967255/",
    "external-link-my-twitter": "https://twitter.com/Kamal98_eth",
    "external-link-my-replit": "https://replit.com/@Kamal1998",
    "external-link-my-codepen": "https://codepen.io/kamal98eth"
}
export default sec_desktop_item;