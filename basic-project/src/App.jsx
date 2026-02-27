import { Routes, Route } from 'react-router-dom';
import './App.css';
import ArenaList from './ArenaList.jsx';
import QuestionSet from './QuestionSet.jsx';

const App=()=>{
    return(
        <div>
            {/* Routes for navigating */}
            <Routes>
                <Route path='/' element={<ArenaList />}></Route>
                <Route path='/arena/:arenaNumber' element={<QuestionSet />} />
            </Routes>
        </div>
    )
}

export default App;