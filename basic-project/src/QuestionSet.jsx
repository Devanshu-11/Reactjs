import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './css/QuestionSet.css';
import mockData from './utils/mockQuestion.json';

const QuestionSet=()=>{
    const {arenaNumber}=useParams();

    return(
        <div className="question-set-page">
            <h1 className="question-title">Arena {arenaNumber} Questions</h1>

            <div className="question-container">
                {mockData[parseInt(arenaNumber)-1]?.data.map((question,index)=> <Link to={`/arena/${arenaNumber}/${index+1}`} className="question-card">

                <div className="question-number">Question {index+1}</div>
                </Link>)}
            </div>

            <div className="submit-btn-container">
                <button className="submit-btn">Submit Test</button>
            </div>
        </div>
    )
}

export default QuestionSet;