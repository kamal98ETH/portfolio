import fcc from "../../images/desktop/about_me/freecodecamp.png";
import python from "../../images/desktop/my_fcc_certs/python_logo.png";
import js from "../../images/desktop/my_fcc_certs/js_logo.png";
import html_css from "../../images/desktop/my_fcc_certs/html_css_logo.png";
import postgresql_bash from "../../images/desktop/my_fcc_certs/postgresql_bash_logo.png";
import react from "../../images/desktop/my_fcc_certs/react_logo.png";
import nodejs from "../../images/desktop/my_fcc_certs/nodejs_logo.png";

let My_FCC_Certs_folder = {
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
    "external-link-back-end-development-and-APIs": "https://www.freecodecamp.org/certification/kamalEzzoubir/back-end-development-and-apis"
}
export default My_FCC_Certs_folder;