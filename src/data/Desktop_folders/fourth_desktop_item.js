import terminal from "../../images/windows_xp_icons/cmd-icon.jpg";
import github from "../../images/desktop/about_me/github_logo.png";
import web_design_folder from "../../images/desktop/web_design_projects/web_design_folder.png";
import photo_folder from "../../images/windows_xp_icons/photo_folder_logo.png"
import photo_viewer from "../../images/windows_xp_icons/photo_viewer.ico";
import win_xp_starting_readme from "./cmd_body_text/web_design_projects/win_xp_starting_readme";
import windows_logo_screen_1 from "../../images/desktop/web_design_projects/windows_xp_starting_page/web_design_windows_logo_1.png";
import windows_logo_screen_2 from "../../images/desktop/web_design_projects/windows_xp_starting_page/web_design_windows_logo_2.png";
import windows_logo_screen_3 from "../../images/desktop/web_design_projects/windows_xp_starting_page/web_design_windows_logo_3.png";
import explorer_logo from "../../images/windows_xp_icons/internet_explorer_logo.png";
import survey_form_readme from "./cmd_body_text/web_design_projects/survey_form";
import survey_form_screenshot_1 from "../../images/desktop/web_design_projects/survey_form/survey-form-1.png"
import survey_form_screenshot_2 from "../../images/desktop/web_design_projects/survey_form/survey-form-2.png"

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
                },
                {
                    icon: web_design_folder,
                    title: "FCC: Survey Form",
                    id: "dev-project-survey-form"
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
                    id: "new-tab-dev-project-windows-xp-starting-page-readme"
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
                },
                {
                    icon: explorer_logo,
                    title: "Preview",
                    id: "new-tab-dev-project-windows-xp-starting-page-preview"
                }
            ]
        }
    },
    //windows XP starting page readme page
    "new-tab-dev-project-windows-xp-starting-page-readme": {
        icon: terminal,
        title: "readme",
        type: "terminal",
        content: win_xp_starting_readme
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
    }],
    //windows xp starting page preview
    "new-tab-dev-project-windows-xp-starting-page-preview":
    {
        icon: explorer_logo,
        title: "Windows Xp starting page",
        type: "explorer",
        content:
        {
            address: "k:// Web Dev projects",
            explorer_page:
                <iframe scrolling="no" title="windows xp starting page" src="https://codepen.io/kamal98eth/embed/mdKLgLJ?default-tab=result" frameBorder="no" loading="lazy" allowFullScreen={true}>
                    See the Pen <a href="https://codepen.io/kamal98eth/pen/mdKLgLJ">
                        windows xp starting page</a> by kamal (<a href="https://codepen.io/kamal98eth">@kamal98eth</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                </iframe>

        }
    },
    //survey form folder
    "dev-project-survey-form": {
        icon: web_design_folder,
        title: "Survey Form",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: terminal,
                    title: "readme",
                    id: "new-tab-dev-project-survey-form-readme"
                },
                {
                    icon: photo_folder,
                    title: "Project screenshots",
                    id: "dev-project-survey-form-screenshots"
                },
                {
                    icon: github,
                    title: "Source code",
                    id: "external-link-dev-project-survey-form-source-code"
                },
                {
                    icon: explorer_logo,
                    title: "Preview",
                    id: "new-tab-dev-dev-project-survey-form-preview"
                }
            ]
        }
    },
    //survey form readme
    "new-tab-dev-project-survey-form-readme": {
        icon: terminal,
        title: "readme",
        type: "terminal",
        content: survey_form_readme
    },
    ///survey form screenshots folder
    "dev-project-survey-form-screenshots": {
        icon: photo_folder,
        title: "Dev project 1 screenshots",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: survey_form_screenshot_1,
                    title: "Project screenshot 1",
                    id: "new-photo-tab-dev-project-survey-form-screenshot-0"
                },
                {
                    icon: survey_form_screenshot_2,
                    title: "Project screenshot 2",
                    id: "new-photo-tab-dev-project-survey-form-screenshot-1"
                }
            ]
        }
    },
    //survey form screenshots
    "new-photo-tab-dev-project-survey-form-screenshot": [{
        icon: photo_viewer,
        title: "Project Screenshot 1",
        type: "photo",
        content: survey_form_screenshot_1
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 2",
        type: "photo",
        content: survey_form_screenshot_2
    }],
    //survey form source code link
    "external-link-dev-project-survey-form-source-code": "https://github.com/kamal98ETH/Survey-Form",
    //survey form preview
    "new-tab-dev-dev-project-survey-form-preview":
    {
        icon: explorer_logo,
        title: "Windows Xp starting page",
        type: "explorer",
        content:
        {
            address: "k:// Web Dev projects",
            explorer_page:
                <iframe scrolling="no" title="Survey Form" src="https://codepen.io/kamal98eth/embed/qBKKRMV?default-tab=result" frameBorder="no" loading="lazy" allowFullScreen={true}>
                    See the Pen <a href="https://codepen.io/kamal98eth/pen/qBKKRMV">
                        Survey Form</a> by kamal (<a href="https://codepen.io/kamal98eth">@kamal98eth</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                </iframe>
        }
    }
}
export default fourth_desktop_item;