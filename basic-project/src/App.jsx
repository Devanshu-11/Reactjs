import { Routes, Route } from 'react-router-dom';
import './App.css';
import ArenaList from './ArenaList.jsx';
import QuestionSet from './QuestionSet.jsx';
import Question from './Question.jsx';
import Error from './Error.jsx';

const App=()=>{
    return(
        <div>
            {/* Routes for navigating */}
            <Routes>
                <Route path='/' element={<ArenaList />}></Route>
                <Route path='/arena/:arenaNumber' element={<QuestionSet />} />
                <Route path='/arena/:arenaNumber/:quesNumber' element={<Question />}></Route>

                {/* Fallback route for invalid URLs */}
                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    )
}

export default App;