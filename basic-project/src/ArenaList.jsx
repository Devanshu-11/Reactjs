import ArenaSelector from "./ArenaSelector";
import mockData from './utils/mockQuestion.json';

const ArenaList=()=>{
    return(
        <div>
            <h1 className="arena-title">Arena Selection</h1>
            
            {mockData.map((arena,index)=>(
            <ArenaSelector key={index} number={index+1}/>
        ))}
        
        </div>
    )
}

export default ArenaList;