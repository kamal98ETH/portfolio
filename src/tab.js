function Tab(props) {
    return (
        <button className="tab" id={props.id} onClick={props.action}>
            <img src={props.icon} id={props.id} alt="tab icon" />
            <h1 id={props.id}>{props.title}</h1>
        </button>
    )
}

export default Tab;