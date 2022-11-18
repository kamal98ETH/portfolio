function Folders_files(props) {
    return (
        <button className="folders-files-icon" id={props.id} onClick={props.action} >
            <img src={props.icon} id={props.id} alt="Desktop icon image" />
            <h1 id={props.id}>{props.title}</h1>
        </button>
    )
}

export default Folders_files;