import exemple from "./images/folder.ico"

function Tab() {
    return (
        <button className="tab">
            <img src={exemple} alt="tab icon" />
            <h1>Exemple tab</h1>
        </button>
    )
}

export default Tab;