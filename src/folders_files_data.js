
import terminal from "./images/cmd-icon.jpg";
import profile from "./images/profile.ico";
import fcc from "./images/freecodecamp.png"
import folder from "./images/folder.ico";

let folders_files_data = {
    "new-tab-welcome-page": {
        icon: terminal,
        title: "Welcome",
        type: "terminal",
        content: <p>K:\&gt; Hey, it's Kamal <br /> K:\&gt; Welcome to my portfolio</p>
    },
    "new-tab-about-me": {
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