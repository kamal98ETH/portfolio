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
import survey_form_readme from "./cmd_body_text/web_design_projects/survey_form_readme";
import survey_form_screenshot_1 from "../../images/desktop/web_design_projects/survey_form/survey-form-1.png";
import survey_form_screenshot_2 from "../../images/desktop/web_design_projects/survey_form/survey-form-2.png";
import tribute_page_readme from "./cmd_body_text/web_design_projects/Tribute_page_readme";
import tribute_page_screenshot_1 from "../../images/desktop/web_design_projects/tribute_page/tribute-page-1.png";
import tribute_page_screenshot_2 from "../../images/desktop/web_design_projects/tribute_page/tribute-page-2.png";
import tribute_page_screenshot_3 from "../../images/desktop/web_design_projects/tribute_page/tribute-page-3.png";
import technical_documentation_page from "./cmd_body_text/web_design_projects/ technical_documentation_page_readme";
import technical_documentation_page_screenshot_1 from "../../images/desktop/web_design_projects/technical_documentation_page/technical-documentation-page-1.png";
import technical_documentation_page_screenshot_2 from "../../images/desktop/web_design_projects/technical_documentation_page/technical-documentation-page-2.png";
import technical_documentation_page_screenshot_3 from "../../images/desktop/web_design_projects/technical_documentation_page/technical-documentation-page-3.png";
import technical_documentation_page_screenshot_4 from "../../images/desktop/web_design_projects/technical_documentation_page/technical-documentation-page-4.png";
import technical_documentation_page_screenshot_5 from "../../images/desktop/web_design_projects/technical_documentation_page/technical-documentation-page-5.png";
import product_landing_page from "./cmd_body_text/web_design_projects/product_landing_page_readme";
import product_landing_page_screenshot_1 from "../../images/desktop/web_design_projects/product_landing_page/product-landing-page-1.png";
import product_landing_page_screenshot_2 from "../../images/desktop/web_design_projects/product_landing_page/product-landing-page-2.png";
import personal_portfolio_webpage from "./cmd_body_text/web_design_projects/personal_portfolio_webpage_readme";
import personal_portfolio_webpage_screenshot_1 from "../../images/desktop/web_design_projects/personal_portfolio_webpage/personal-portfolio-webpage-1.png";
import personal_portfolio_webpage_screenshot_2 from "../../images/desktop/web_design_projects/personal_portfolio_webpage/personal-portfolio-webpage-2.png";
import personal_portfolio_webpage_screenshot_3 from "../../images/desktop/web_design_projects/personal_portfolio_webpage/personal-portfolio-webpage-3.png";
import personal_portfolio_webpage_screenshot_4 from "../../images/desktop/web_design_projects/personal_portfolio_webpage/personal-portfolio-webpage-4.png";
import personal_portfolio_webpage_screenshot_5 from "../../images/desktop/web_design_projects/personal_portfolio_webpage/personal-portfolio-webpage-5.png";
import personal_portfolio_webpage_screenshot_6 from "../../images/desktop/web_design_projects/personal_portfolio_webpage/personal-portfolio-webpage-6.png";
import personal_portfolio_webpage_screenshot_7 from "../../images/desktop/web_design_projects/personal_portfolio_webpage/personal-portfolio-webpage-7.png";

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
                },
                {
                    icon: web_design_folder,
                    title: "FCC: Tribute Page",
                    id: "dev-project-tribute-page"
                },
                {
                    icon: web_design_folder,
                    title: "FCC: Technical Documentation Page",
                    id: "dev-project-technical-documentation-page"
                },
                {
                    icon: web_design_folder,
                    title: "FCC: Product Landing Page",
                    id: "dev-project-product-landing-page"
                },
                {
                    icon: web_design_folder,
                    title: "FCC: Personal Portfolio Webpage",
                    id: "dev-project-personal-portfolio-webpage"
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
        title: "Project screenshots",
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
        title: "FCC: Survey Form",
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
        title: "Project screenshots",
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
        title: "FCC: Survey form",
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
    },


    //tribute page folder
    "dev-project-tribute-page": {
        icon: web_design_folder,
        title: "FCC: Tribute Page",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: terminal,
                    title: "readme",
                    id: "new-tab-dev-project-tribute-page-readme"
                },
                {
                    icon: photo_folder,
                    title: "Project screenshots",
                    id: "dev-project-tribute-page-screenshots"
                },
                {
                    icon: github,
                    title: "Source code",
                    id: "external-link-dev-project-tribute-page-source-code"
                },
                {
                    icon: explorer_logo,
                    title: "Preview",
                    id: "new-tab-dev-dev-project-tribute-page-preview"
                }
            ]
        }
    },
    //tribute page readme
    "new-tab-dev-project-tribute-page-readme": {
        icon: terminal,
        title: "readme",
        type: "terminal",
        content: tribute_page_readme
    },
    ///tribute page screenshots folder
    "dev-project-tribute-page-screenshots": {
        icon: photo_folder,
        title: "Project screenshots",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: tribute_page_screenshot_1,
                    title: "Project screenshot 1",
                    id: "new-photo-tab-dev-project-tribute-page-screenshot-0"
                },
                {
                    icon: tribute_page_screenshot_2,
                    title: "Project screenshot 2",
                    id: "new-photo-tab-dev-project-tribute-page-screenshot-1"
                },
                {
                    icon: tribute_page_screenshot_3,
                    title: "Project screenshot 3",
                    id: "new-photo-tab-dev-project-tribute-page-screenshot-2"
                }
            ]
        }
    },
    //tribute page screenshots
    "new-photo-tab-dev-project-tribute-page-screenshot": [{
        icon: photo_viewer,
        title: "Project Screenshot 1",
        type: "photo",
        content: tribute_page_screenshot_1
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 2",
        type: "photo",
        content: tribute_page_screenshot_2
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 3",
        type: "photo",
        content: tribute_page_screenshot_3
    }],
    //tribute page source code link
    "external-link-dev-project-tribute-page-source-code": "https://github.com/kamal98ETH/Tribute-Page",
    //tribute page preview
    "new-tab-dev-dev-project-tribute-page-preview":
    {
        icon: explorer_logo,
        title: "FCC: Tribute Page",
        type: "explorer",
        content:
        {
            address: "k:// Web Dev projects",
            explorer_page:
                <iframe scrolling="no" title="Tribute Page" src="https://codepen.io/kamal98eth/embed/eYKKLOg?default-tab=result" frameBorder="no" loading="lazy" allowFullScreen={true}>
                    See the Pen <a href="https://codepen.io/kamal98eth/pen/eYKKLOg">
                        Tribute Page</a> by kamal (<a href="https://codepen.io/kamal98eth">@kamal98eth</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                </iframe>
        }
    },


    //Technical Documentation Page folder
    "dev-project-technical-documentation-page": {
        icon: web_design_folder,
        title: "FCC: Technical Documentation Page",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: terminal,
                    title: "readme",
                    id: "new-tab-dev-project-technical-documentation-page-readme"
                },
                {
                    icon: photo_folder,
                    title: "Project screenshots",
                    id: "dev-project-technical-documentation-page-screenshots"
                },
                {
                    icon: github,
                    title: "Source code",
                    id: "external-link-dev-project-technical-documentation-page-source-code"
                },
                {
                    icon: explorer_logo,
                    title: "Preview",
                    id: "new-tab-dev-dev-project-technical-documentation-page-preview"
                }
            ]
        }
    },
    //Technical Documentation Page readme
    "new-tab-dev-project-technical-documentation-page-readme": {
        icon: terminal,
        title: "readme",
        type: "terminal",
        content: technical_documentation_page
    },
    ///Technical Documentation Page screenshots folder
    "dev-project-technical-documentation-page-screenshots": {
        icon: photo_folder,
        title: "Project screenshots",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: technical_documentation_page_screenshot_1,
                    title: "Project screenshot 1",
                    id: "new-photo-tab-dev-project-technical-documentation-page-screenshot-0"
                },
                {
                    icon: technical_documentation_page_screenshot_2,
                    title: "Project screenshot 2",
                    id: "new-photo-tab-dev-project-technical-documentation-page-screenshot-1"
                },
                {
                    icon: technical_documentation_page_screenshot_3,
                    title: "Project screenshot 3",
                    id: "new-photo-tab-dev-project-technical-documentation-page-screenshot-2"
                },
                {
                    icon: technical_documentation_page_screenshot_4,
                    title: "Project screenshot 4",
                    id: "new-photo-tab-dev-project-technical-documentation-page-screenshot-3"
                },
                {
                    icon: technical_documentation_page_screenshot_5,
                    title: "Project screenshot 5",
                    id: "new-photo-tab-dev-project-technical-documentation-page-screenshot-4"
                }
            ]
        }
    },
    //Technical Documentation Page screenshots
    "new-photo-tab-dev-project-technical-documentation-page-screenshot": [{
        icon: photo_viewer,
        title: "Project Screenshot 1",
        type: "photo",
        content: technical_documentation_page_screenshot_1
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 2",
        type: "photo",
        content: technical_documentation_page_screenshot_2
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 3",
        type: "photo",
        content: technical_documentation_page_screenshot_3
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 4",
        type: "photo",
        content: technical_documentation_page_screenshot_4
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 5",
        type: "photo",
        content: technical_documentation_page_screenshot_5
    }],
    //Technical Documentation Page source code link
    "external-link-dev-project-technical-documentation-page-source-code": "https://github.com/kamal98ETH/Technical-Documentation-Page",
    //Technical Documentation Page preview
    "new-tab-dev-dev-project-technical-documentation-page-preview":
    {
        icon: explorer_logo,
        title: "FCC: Technical Documentation Page",
        type: "explorer",
        content:
        {
            address: "k:// Web Dev projects",
            explorer_page:
                <iframe scrolling="no" title="Technical Documentation Page" src="https://codepen.io/kamal98eth/embed/xxzzydo?default-tab=result" frameborder="no" loading="lazy" allowFullScreen={true}>
                    See the Pen <a href="https://codepen.io/kamal98eth/pen/xxzzydo">
                        Technical Documentation Page</a> by kamal (<a href="https://codepen.io/kamal98eth">@kamal98eth</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                </iframe>
        }
    },


    //Product Landing Page folder
    "dev-project-product-landing-page": {
        icon: web_design_folder,
        title: "FCC: Product Landing Page",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: terminal,
                    title: "readme",
                    id: "new-tab-dev-project-product-landing-page-readme"
                },
                {
                    icon: photo_folder,
                    title: "Project screenshots",
                    id: "dev-project-product-landing-page-screenshots"
                },
                {
                    icon: github,
                    title: "Source code",
                    id: "external-link-dev-project-product-landing-page-source-code"
                },
                {
                    icon: explorer_logo,
                    title: "Preview",
                    id: "new-tab-dev-dev-project-product-landing-page-preview"
                }
            ]
        }
    },
    //Product Landing Page readme
    "new-tab-dev-project-product-landing-page-readme": {
        icon: terminal,
        title: "readme",
        type: "terminal",
        content: product_landing_page
    },
    ///Product Landing Page screenshots folder
    "dev-project-product-landing-page-screenshots": {
        icon: photo_folder,
        title: "Project screenshots",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: product_landing_page_screenshot_1,
                    title: "Project screenshot 1",
                    id: "new-photo-tab-dev-project-product-landing-page-screenshot-0"
                },
                {
                    icon: product_landing_page_screenshot_2,
                    title: "Project screenshot 2",
                    id: "new-photo-tab-dev-project-product-landing-page-screenshot-1"
                }
            ]
        }
    },
    //Product Landing Page screenshots
    "new-photo-tab-dev-project-product-landing-page-screenshot": [{
        icon: photo_viewer,
        title: "Project Screenshot 1",
        type: "photo",
        content: product_landing_page_screenshot_1
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 2",
        type: "photo",
        content: product_landing_page_screenshot_2
    }],
    //Product Landing Page source code link
    "external-link-dev-project-product-landing-page-source-code": "https://github.com/kamal98ETH/Product-Landing-Page",
    //Product Landing Page preview
    "new-tab-dev-dev-project-product-landing-page-preview":
    {
        icon: explorer_logo,
        title: "FCC: Product Landing Page",
        type: "explorer",
        content:
        {
            address: "k:// Web Dev projects",
            explorer_page:
                <iframe scrolling="no" title="Product Landing Page" src="https://codepen.io/kamal98eth/embed/yLEERGZ?default-tab=result" frameborder="no" loading="lazy" llowFullScreen={true}>
                    See the Pen <a href="https://codepen.io/kamal98eth/pen/yLEERGZ">
                        Product Landing Page</a> by kamal (<a href="https://codepen.io/kamal98eth">@kamal98eth</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                </iframe>
        }
    },


    //Personal Portfolio Webpage folder
    "dev-project-personal-portfolio-webpage": {
        icon: web_design_folder,
        title: "FCC: Personal Portfolio Webpage",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: terminal,
                    title: "readme",
                    id: "new-tab-dev-project-personal-portfolio-webpage-readme"
                },
                {
                    icon: photo_folder,
                    title: "Project screenshots",
                    id: "dev-project-personal-portfolio-webpage-screenshots"
                },
                {
                    icon: github,
                    title: "Source code",
                    id: "external-link-dev-project-personal-portfolio-webpage-source-code"
                },
                {
                    icon: explorer_logo,
                    title: "Preview",
                    id: "new-tab-dev-dev-project-personal-portfolio-webpage-preview"
                }
            ]
        }
    },
    //Personal Portfolio Webpage readme
    "new-tab-dev-project-personal-portfolio-webpage-readme": {
        icon: terminal,
        title: "readme",
        type: "terminal",
        content: personal_portfolio_webpage
    },
    ///Personal Portfolio Webpage screenshots folder
    "dev-project-personal-portfolio-webpage-screenshots": {
        icon: photo_folder,
        title: "Project screenshots",
        type: "window",
        content: {
            address: "k:// Web Dev projects",
            folders_files: [
                {
                    icon: personal_portfolio_webpage_screenshot_1,
                    title: "Project screenshot 1",
                    id: "new-photo-tab-dev-project-personal-portfolio-webpage-screenshot-0"
                },
                {
                    icon: personal_portfolio_webpage_screenshot_2,
                    title: "Project screenshot 2",
                    id: "new-photo-tab-dev-project-personal-portfolio-webpage-screenshot-1"
                },
                {
                    icon: personal_portfolio_webpage_screenshot_3,
                    title: "Project screenshot 3",
                    id: "new-photo-tab-dev-project-personal-portfolio-webpage-screenshot-2"
                },
                {
                    icon: personal_portfolio_webpage_screenshot_4,
                    title: "Project screenshot 4",
                    id: "new-photo-tab-dev-project-personal-portfolio-webpage-screenshot-3"
                },
                {
                    icon: personal_portfolio_webpage_screenshot_5,
                    title: "Project screenshot 5",
                    id: "new-photo-tab-dev-project-personal-portfolio-webpage-screenshot-4"
                },
                {
                    icon: personal_portfolio_webpage_screenshot_6,
                    title: "Project screenshot 6",
                    id: "new-photo-tab-dev-project-personal-portfolio-webpage-screenshot-5"
                },
                {
                    icon: personal_portfolio_webpage_screenshot_7,
                    title: "Project screenshot 7",
                    id: "new-photo-tab-dev-project-personal-portfolio-webpage-screenshot-6"
                }
            ]
        }
    },
    //Personal Portfolio Webpage screenshots
    "new-photo-tab-dev-project-personal-portfolio-webpage-screenshot": [{
        icon: photo_viewer,
        title: "Project Screenshot 1",
        type: "photo",
        content: personal_portfolio_webpage_screenshot_1
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 2",
        type: "photo",
        content: personal_portfolio_webpage_screenshot_2
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 3",
        type: "photo",
        content: personal_portfolio_webpage_screenshot_3
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 4",
        type: "photo",
        content: personal_portfolio_webpage_screenshot_4
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 5",
        type: "photo",
        content: personal_portfolio_webpage_screenshot_5
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 6",
        type: "photo",
        content: personal_portfolio_webpage_screenshot_6
    },
    {
        icon: photo_viewer,
        title: "Project Screenshot 7",
        type: "photo",
        content: personal_portfolio_webpage_screenshot_7
    }],
    //Personal Portfolio Webpage source code link
    "external-link-dev-project-personal-portfolio-webpage-source-code": "https://github.com/kamal98ETH/Personal-Portfolio-Webpage",
    //Personal Portfolio Webpage preview
    "new-tab-dev-dev-project-personal-portfolio-webpage-preview":
    {
        icon: explorer_logo,
        title: "FCC: Personal Portfolio Webpage",
        type: "explorer",
        content:
        {
            address: "k:// Web Dev projects",
            explorer_page:
                <iframe scrolling="no" title="Personal Portfolio Webpage" src="https://codepen.io/kamal98eth/embed/oNyyQzW?default-tab=result" frameborder="no" loading="lazy" allowFullScreen={true}>
                    See the Pen <a href="https://codepen.io/kamal98eth/pen/oNyyQzW">
                        Personal Portfolio Webpage</a> by kamal (<a href="https://codepen.io/kamal98eth">@kamal98eth</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                </iframe>
        }
    }
}
export default fourth_desktop_item;