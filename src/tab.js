function Tab(props) {
    return (
        <button className="tab">
            <img src={props.icon} alt="tab icon" />
            <h1>{props.title}</h1>
        </button>
    )
}

export default Tab;