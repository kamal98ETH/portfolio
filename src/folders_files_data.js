
import terminal from "./images/cmd-icon.jpg";
import profile from "./images/profile.ico";
import fcc from "./images/freecodecamp.png"
import folder from "./images/folder.ico";

let folders_files_data = {
    "welcome-page": {
        icon: terminal,
        title: "Welcome",
        type: "terminal",
        content: <p>K:\&gt; Hey, it's Kamal <br /> K:\&gt; Welcome to my portfolio</p>
    },
    "about-me": {
        icon: profile,
        title: "About me",
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
    "fcc-certs": {
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
    "web-dev-projects": {
        icon: folder,
        title: "Web Dev projects",
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
    }
}

export default folders_files_data;