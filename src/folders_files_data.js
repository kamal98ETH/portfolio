
import terminal from "./images/cmd-icon.jpg";
import profile from "./images/profile.ico";
import fcc from "./images/freecodecamp.png";
import folder from "./images/folder.ico";
import email from "./images/email_logo.png"
import github from "./images/github_logo.png";
import twitter from "./images/twitter_logo.png";
import replit from "./images/replit_logo.png";
import codepen from "./images/codepen_logo.png";
import linkedIn from "./images/linkedin_logo.png";
import python from "./images/python_logo.png";
import js from "./images/js_logo.jpg";
import html_css from "./images/html_css_logo.jpg";
import postgresql_bash from "./images/postgresql_bash_logo.png";
import react from "./images/react_logo.png";
import nodejs from "./images/nodejs_logo.png";
import web_design_folder from "./images/web_design_folder.png";
import photo_viewer from "./images/photo_viewer.ico";
import windows_logo_screen_1 from "./images/web_design_windows_logo_1.png";
import windows_logo_screen_2 from "./images/web_design_windows_logo_2.png";
import windows_logo_screen_3 from "./images/web_design_windows_logo_3.png";

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
        content: <p>K:\&gt; Hey, <br />K:\&gt; it's Kamal <br /> K:\&gt; I am a self-taught developer<br />K:\&gt; I started learning programming on my own in January 2022 and I have been loving it since <br />K:\&gt; I’ve learned a lot since then and I do have a lot more to learn <br />K:\&gt; I am glad that you found your way to my portfolio <br />K:\&gt; I will be constantly sharing my work over here as I learn more new things <br />K:\&gt; I hope you have a good time browsing around here <br />K:\&gt; M looking forward to getting to know you too, so feel free to contact me on my socials <br />K:\&gt; And also if you have any remarks, advices, mistakes you found… I would be very happy to hear from you </p>
    },
    "external-link-my-email": "mailto:kamal98eth@gmail.com",
    "external-link-my-github": "https://github.com/kamal98ETH",
    "external-link-my-fcc": "https://www.freecodecamp.org/kamalEzzoubir",
    "external-link-my-linkedin": "https://www.linkedin.com/in/kamal-ezzoubir-2a5967255/",
    "external-link-my-twitter": "https://twitter.com/Kamal98_eth",
    "external-link-my-replit": "https://replit.com/@Kamal1998",
    "external-link-my-codepen": "https://codepen.io/kamal98eth",
    //desktop third icon
    "new-tab-fcc-certs": {
        icon: fcc,
        title: "My freeCodeCamp certs",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: python,
                    title: "Scientific Computing with Python",
                    id: "external-link-scientific-computing-with-python"
                },
                {
                    icon: js,
                    title: "JavaScript Algorithms and Data Structures",
                    id: "external-link-javascript-algorithms-and-data-structures"
                },
                {
                    icon: html_css,
                    title: "Responsive Web Design",
                    id: "external-link-responsive-web-design"
                },
                {
                    icon: postgresql_bash,
                    title: "Relational Database",
                    id: "external-link-relational-database"
                },
                {
                    icon: react,
                    title: "Front End Development Libraries",
                    id: "external-link-front-end-development-libraries"
                },
                {
                    icon: nodejs,
                    title: "Back End Development and APIs",
                    id: "external-link-back-end-development-and-APIs"
                }
            ]
        }
    },
    //my freecodecamp certs
    "external-link-scientific-computing-with-python": "https://www.freecodecamp.org/certification/kamalEzzoubir/scientific-computing-with-python-v7",
    "external-link-javascript-algorithms-and-data-structures": "https://www.freecodecamp.org/certification/kamalEzzoubir/javascript-algorithms-and-data-structures",
    "external-link-responsive-web-design": "https://www.freecodecamp.org/certification/kamalEzzoubir/responsive-web-design",
    "external-link-relational-database": "https://www.freecodecamp.org/certification/kamalEzzoubir/relational-database-v8",
    "external-link-front-end-development-libraries": "https://www.freecodecamp.org/certification/kamalEzzoubir/front-end-development-libraries",
    "external-link-back-end-development-and-APIs": "https://www.freecodecamp.org/certification/kamalEzzoubir/back-end-development-and-apis",
    //fourth desktop icon
    "new-tab-web-design-projects": {
        icon: web_design_folder,
        title: "Web Design projects",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: web_design_folder,
                    title: "Windows XP Starting page",
                    id: "dev-project-windows-xp-starting-page"
                }
            ]
        }
    },
    //Web design projects folders
    "dev-project-windows-xp-starting-page": {
        icon: web_design_folder,
        title: "Windows XP Starting page",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: terminal,
                    title: "readme",
                    id: "new-tab-dev-dev-project-windows-xp-starting-page-readme"
                },
                {
                    icon: photo_viewer,
                    title: "Project screenshots",
                    id: "dev-project-windows-xp-starting-page-screenshots"
                },
                {
                    icon: github,
                    title: "Source code",
                    id: "external-link-dev-project-windows-xp-starting-page-source-code"
                }
            ]
        }
    },
    "new-tab-dev-dev-project-windows-xp-starting-page-readme": {
        icon: terminal,
        title: "readme",
        type: "terminal",
        content: <p>K:\&gt; About this project <br /> K:\&gt; As a part of making my portfolio inspired by microsoft windows xp <br /> K:\&gt; I decided to make the starting page with just html and css, without using any kind of logos or images <br /> K:\&gt; And also making the loading bar animation using css keyframes <br /> K:\&gt; This page is responsive to all kind of screen widths <br /> K:\&gt; Thanks for reading, any feedback is much appreciated</p>
    },
    "dev-project-windows-xp-starting-page-screenshots": {
        icon: folder,
        title: "Dev project 1 screenshots",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: windows_logo_screen_1,
                    title: "Project screenshot 1",
                    id: "new-tab-dev-project-windows-xp-starting-page-screenshot-1"
                },
                {
                    icon: windows_logo_screen_2,
                    title: "Project screenshot 2",
                    id: "new-tab-dev-project-windows-xp-starting-page-screenshot-2"
                },
                {
                    icon: windows_logo_screen_3,
                    title: "Project screenshot 3",
                    id: "new-tab-dev-project-windows-xp-starting-page-screenshot-3"
                }
            ]
        }
    },
    "external-link-dev-project-windows-xp-starting-page-source-code": "https://github.com/kamal98ETH/kamal98ETH.github.io",
    "new-tab-dev-project-windows-xp-starting-page-screenshot-1": {
        icon: photo_viewer,
        title: "Project Screenshot 1",
        type: "photo",
        content: windows_logo_screen_1
    },
    "new-tab-dev-project-windows-xp-starting-page-screenshot-2": {
        icon: photo_viewer,
        title: "Project Screenshot 2",
        type: "photo",
        content: windows_logo_screen_2
    },
    "new-tab-dev-project-windows-xp-starting-page-screenshot-3": {
        icon: photo_viewer,
        title: "Project Screenshot 3",
        type: "photo",
        content: windows_logo_screen_3
    }
}

export default folders_files_data;