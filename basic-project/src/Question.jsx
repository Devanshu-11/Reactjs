import { useParams } from "react-router-dom";
import './css/Question.css';
import mockData from './utils/mockQuestion.json';

const Question=()=>{
    const {arenaNumber,quesNumber}=useParams();

    return(
        <div>
            {/* Question */}
            <h1 className="question-title">{mockData[parseInt(arenaNumber)-1]?.data[parseInt(quesNumber)-1]?.ques}</h1>

            {/* Options */}
            <div className="options-container">
                <button className="option-btn">{mockData[parseInt(arenaNumber)-1]?.data[parseInt(quesNumber)-1]?.option[0]}</button>

                <button className="option-btn">{mockData[parseInt(arenaNumber)-1]?.data[parseInt(quesNumber)-1]?.option[1]}</button>

                <button className="option-btn">{mockData[parseInt(arenaNumber)-1]?.data[parseInt(quesNumber)-1]?.option[2]}</button>

                <button className="option-btn">{mockData[parseInt(arenaNumber)-1]?.data[parseInt(quesNumber)-1]?.option[3]}</button>

            </div>

            <div style={{ textAlign: 'center' }}>
                <button className="submit-btn">Submit</button>
            </div>
        </div>
    )
}

export default Question;