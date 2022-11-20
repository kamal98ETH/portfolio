import terminal from "../../images/windows_xp_icons/cmd-icon.jpg";
import github from "../../images/desktop/about_me/github_logo.png";
import web_design_folder from "../../images/desktop/web_design_projects/web_design_folder.png";
import photo_folder from "../../images/windows_xp_icons/photo_folder_logo.png"
import photo_viewer from "../../images/windows_xp_icons/photo_viewer.ico";
import windows_logo_screen_1 from "../../images/desktop/web_design_projects/windows_xp_starting_page/web_design_windows_logo_1.png";
import windows_logo_screen_2 from "../../images/desktop/web_design_projects/windows_xp_starting_page/web_design_windows_logo_2.png";
import windows_logo_screen_3 from "../../images/desktop/web_design_projects/windows_xp_starting_page/web_design_windows_logo_3.png";

let fourth_desktop_item = {
    //web design projects folders
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
    //windoes XP starting page folder
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
                    icon: photo_folder,
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
    //windows XP starting page readme page
    "new-tab-dev-dev-project-windows-xp-starting-page-readme": {
        icon: terminal,
        title: "readme",
        type: "terminal",
        content: <p>K:\&gt; About this project <br /> K:\&gt; As part of making my portfolio inspired by microsoft windows xp <br /> K:\&gt; I decided to make the starting page with just html and css, without using any kind of logos or images <br /> K:\&gt; And also making the loading bar animation using css keyframes <br /> K:\&gt; This page is responsive to all kind of screen widths <br /> K:\&gt; Thanks for reading, any feedback is much appreciated</p>
    },
    //windows XP starting page source code
    "external-link-dev-project-windows-xp-starting-page-source-code": "https://github.com/kamal98ETH/kamal98ETH.github.io",
    //windows XP starting page screenshots folder
    "dev-project-windows-xp-starting-page-screenshots": {
        icon: photo_folder,
        title: "Dev project 1 screenshots",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: windows_logo_screen_1,
                    title: "Project screenshot 1",
                    id: "new-photo-tab-dev-project-windows-xp-starting-page-screenshot-0"
                },
                {
                    icon: windows_logo_screen_2,
                    title: "Project screenshot 2",
                    id: "new-photo-tab-dev-project-windows-xp-starting-page-screenshot-1"
                },
                {
                    icon: windows_logo_screen_3,
                    title: "Project screenshot 3",
                    id: "new-photo-tab-dev-project-windows-xp-starting-page-screenshot-2"
                }
            ]
        }
    },
    //windows XP starting page screenshots
    "new-photo-tab-dev-project-windows-xp-starting-page-screenshot": [{
        icon: photo_viewer,
        title: "Project Screenshot 1",
        type: "photo",
        content: windows_logo_screen_1
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 2",
        type: "photo",
        content: windows_logo_screen_2
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 3",
        type: "photo",
        content: windows_logo_screen_3
    }]
}
export default fourth_desktop_item;