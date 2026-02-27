import { Link } from 'react-router-dom';
import './css/ArenaSelector.css';

const ArenaSelector=(props)=>{
    return(
        <div>
            <div className="arena-container">
                <div className="arena-card">
                    <h2 className="arena-name">Arena- {props.number}</h2>

                    <Link to={`/arena/${props.number}`}>
                        <button className="enter-btn">Enter the Arena</button>
                    </Link>
                </div>
            </div>  
        </div>
    )
}

export default ArenaSelector;