import './css/ArenaSelector.css';

const ArenaSelector=(props)=>{
    return(
        <div>
            <div className="arena-container">
                <div className="arena-card">
                    <h2 className="arena-name">Arena- {props.number}</h2>

                    <button className="enter-btn">Enter the Arena</button>
                </div>
            </div>  
        </div>
    )
}

export default ArenaSelector;