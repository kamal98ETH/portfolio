function StartPrograms(props) {
    return (
        <button className="start-program" onClick={props.action} id={props.id}>
            <img src={props.icon} alt="program icon" id={props.id} />
            <h2 id={props.id}>{props.title}</h2>
        </button>
    )
}

export default StartPrograms;