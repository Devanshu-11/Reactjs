import './App.css';
import mockData from './utils/mockQuestion.json';
import ArenaSelector from './ArenaSelector';

const App=()=>{
    return(
        <div>
            <h1 className="arena-title">Arena Selection</h1>
            
            {mockData.map((arena,index)=>(
            <ArenaSelector key={index} number={index+1}/>
        ))}
        </div>
    )
}

export default App;