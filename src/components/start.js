import profileLogo from "../images/windows_xp_icons/icon.ico";
import rightArrow from "../images/windows_xp_icons/go-arrow.png";
import StartPrograms from "./startPrograms";
import web_design_folder from "../images/desktop/web_design_projects/web_design_folder.png";
import js_folder from "../images/desktop/js_projects/js_folder.png";
import python_folder from "../images/desktop/python_projects/python_folder.png";
import react_forlder from "../images/desktop/react_projects/react_folder.png";
import sql_folder from "../images/desktop/relational_database_projects/sql_folder.png";
import nodeJS from "../images/desktop/backend_projects/nodeJS_folder.png";
import log_off from "../images/windows_xp_icons/log-off.ico";
import turn_off from "../images/windows_xp_icons/turn-off.ico";

function Start(props) {
    return (
        <div id="start-page">
            <div id="start-header">
                <img src={profileLogo} alt="profile logo" />
                <h1>Kamal</h1>
            </div>
            <div id="start-body">
                <div id="start-body-left-programs">
                    <StartPrograms icon={web_design_folder} title="Web Design Projects" id="new-tab-web-design-projects" action={props.action} />
                    <StartPrograms icon={js_folder} title="JavaScript Projects" id="new-tab-js-projects" action={props.action} />
                    <StartPrograms icon={python_folder} title="Python Projects" id="new-tab-python-projects" action={props.action} />
                    <hr />
                    <StartPrograms icon={react_forlder} title="React Projects" id="new-tab-react-projects" action={props.action} />
                    <StartPrograms icon={sql_folder} title="Relational DataBase Projects" id="new-tab-relatinal-database-projects" action={props.action} />
                    <StartPrograms icon={nodeJS} title="BackEnd Projects" id="new-tab-backend-projects" action={props.action} />
                    <hr />
                    <button>
                        All Programs
                        <img src={rightArrow} alt="green arrow facing the right" />
                    </button>
                </div>
                <div id="start-body-right-programs">
                    <StartPrograms icon={web_design_folder} title="Windows XP Starting page" id="new-tab-dev-project-windows-xp-starting-page" action={props.action} />
                    <StartPrograms icon={web_design_folder} title="FCC: Personal Portfolio Webpage" id="new-tab-dev-project-personal-portfolio-webpage" action={props.action} />
                    <StartPrograms icon={js_folder} title="FCC: Cash Register" id="new-tab-dev-project-cash-register" action={props.action} />
                    <hr />
                    <StartPrograms icon={python_folder} title="FCC: Budget App" id="new-tab-dev-project-budget-app" action={props.action} />
                    <StartPrograms icon={python_folder} title="FCC: Probability Calculator" id="new-tab-dev-project-probability-calculator" action={props.action} />
                    <StartPrograms icon={react_forlder} title="FCC: Drum Machine" id="new-tab-dev-project-drum-machine" action={props.action} />
                    <hr />
                    <StartPrograms icon={react_forlder} title="FCC: JavaScript Calculator" id="new-tab-dev-project-js-calculator" action={props.action} />
                    <StartPrograms icon={sql_folder} title="FCC: Salon Appointment Scheduler" id="new-tab-dev-project-salon-appointment-scheduler" action={props.action} />
                    <StartPrograms icon={sql_folder} title="FCC: Number Guessing Game" id="new-tab-dev-project-number-guessing-game" action={props.action} />
                    <StartPrograms icon={nodeJS} title="FCC: Exercise Tracker" id="new-tab-dev-project-exercise-tracker" action={props.action} />
                </div>
            </div>
            <div id="start-footer">
                <StartPrograms icon={turn_off} title="Turn of computer" />
                <StartPrograms icon={log_off} title="Log off" />
            </div>
        </div>
    )
}

export default Start;