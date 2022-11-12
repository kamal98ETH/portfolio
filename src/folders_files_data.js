
import terminal from "./images/cmd-icon.jpg";
import profile from "./images/profile.ico";
import fcc from "./images/freecodecamp.png";
import folder from "./images/folder.ico";
import email from "./images/email_logo.png"
import github from "./images/github_logo.png";
import twitter from "./images/twitter_logo.png";
import replit from "./images/replit_logo.png";
import codepen from "./images/codepen_logo.png";

let folders_files_data = {
    //first desktop icon
    "new-tab-welcome-page": {
        icon: terminal,
        title: "Welcome",
        type: "terminal",
        content: <p>K:\&gt; Hey, it's Kamal <br /> K:\&gt; Welcome to my portfolio</p>
    },
    //second desktop icon
    "new-tab-about-me": {
        icon: profile,
        title: "About me",
        type: "window",
        content: {
            address: "k:\ Web Dev projects",
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
        content: <p>K:\&gt; Hey, <br />K:\&gt; it's Kamal <br /> K:\&gt; I am a self-taught developer<br />K:\&gt; I started learning programming on my own in January 2022 and I have been loving it since <br />K:\&gt; I’ve learned a lot since then and I do have a lot more to learn <br />K:\&gt; I am glad that you found your way to my portfolio <br />K:\&gt; I will be constantly sharing my work over here as I learn more new things <br />K:\&gt; I hope you have a good time browsing around here <br />K:\&gt; M looking forward to getting to know you too, do feel free to contact me on my socials <br />K:\&gt; And also if you have any remarks, advices, mistakes you found… I would be very happy to hear from you </p>
    },
    "external-link-my-email": "mailto:kamal98eth@gmail.com",
    "external-link-my-github": "https://github.com/kamal98ETH",
    "external-link-my-twitter": "https://twitter.com/Kamal98_eth",
    "external-link-my-replit": "https://replit.com/@Kamal1998",
    "external-link-my-codepen": "https://codepen.io/kamal98eth",
    //desktop third icon
    "new-tab-fcc-certs": {
        icon: fcc,
        title: "My freeCodeCamp certs",
        type: "window",
        content: {
            address: "k:\ Web Dev projects",
            folders_files: [
                {
                    icon: folder,
                    title: "folder1"
                },
                {
                    icon: folder,
                    title: "folder1"
                },
                {
                    icon: folder,
                    title: "folder1"
                },
                {
                    icon: folder,
                    title: "folder1"
                }
            ]
        }
    },
    //fourth desktop icon
    "new-tab-web-dev-projects": {
        icon: folder,
        title: "Web Dev projects",
        type: "window",
        content: {
            address: "k:\ Web Dev projects",
            folders_files: [
                {
                    icon: folder,
                    title: "Dev project 1",
                    id: "dev-project-1"
                }
            ]
        }
    }, "dev-project-1": {
        icon: folder,
        title: "Dev project 1",
        type: "window",
        content: {
            address: "k:\ Web Dev projects",
            folders_files: [
                {
                    icon: terminal,
                    title: "readme",
                    id: "new-tab-dev-project-1-readme"
                },
                {
                    icon: folder,
                    title: "Project screenshots",
                    id: "dev-project-1-screenshots"
                },
                {
                    icon: folder,
                    title: "Source code",
                    id: "external-link-dev-project-1-source-code"
                }
            ]
        }
    }, "new-tab-dev-project-1-readme": {
        icon: terminal,
        title: "readme",
        type: "terminal",
        content: <p>K:\&gt; Hey, it's Kamal <br /> K:\&gt; Welcome to my project</p>
    }, "dev-project-1-screenshots": {
        icon: folder,
        title: "Dev project 1 screenshots",
        type: "window",
        content: {
            address: "k:\ Web Dev projects",
            folders_files: [
                {
                    icon: folder,
                    title: "Project screenshot 1",
                    // id: "dev-project-1-screenshot-1"
                },
                {
                    icon: folder,
                    title: "Project screenshot 2",
                    // id: "dev-project-1-screenshot-2"
                },
                {
                    icon: folder,
                    title: "Project screenshot 3",
                    // id: "dev-project-1-screenshot-3"
                }
            ]
        }
    }, "external-link-dev-project-1-source-code": "https://www.google.com/"
}

export default folders_files_data;