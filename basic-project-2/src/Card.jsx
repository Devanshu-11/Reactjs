const Card=(props)=>{
    return(
        <div className="Card">
            <span className="card-name">{props.number}</span>
            <span className="card-name">{props.searchText}</span>
            <button className="delete-btn" onClick={props.onDelete}>Delete</button>
        </div>
    )
}

export default Card;