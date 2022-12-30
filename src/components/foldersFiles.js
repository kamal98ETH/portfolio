function FoldersFiles(props) {
    return (
        <button className="folders-files-icon" id={props.id} onClick={props.action} >
            <img src={props.icon} id={props.id} alt="Desktop icon" />
            <h1 id={props.id}>{props.title}</h1>
        </button>
    )
}

export default FoldersFiles;