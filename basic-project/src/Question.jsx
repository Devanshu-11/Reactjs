import { useParams } from "react-router-dom";
import './css/Question.css';
import mockData from './utils/mockQuestion.json';
import { useState } from "react";

const Question=()=>{
    const [chooseOption, setChooseOption]=useState(null);
    const {arenaNumber,quesNumber}=useParams();

    const optionHandler=(index)=>{
        setChooseOption(index);
    }

    const submitHandler=()=>{
        if(chooseOption===mockData[parseInt(arenaNumber)-1]?.data[parseInt(quesNumber)-1]?.solution){
            alert('Right Answer');
        }else{
            alert('Wrong Answer');
        }
    }

    return(
        <div>
            {/* Question */}
            <h1 className="question-title">{mockData[parseInt(arenaNumber)-1]?.data[parseInt(quesNumber)-1]?.ques}</h1>

            {/* Options */}
            <div className="options-container">

                {mockData[parseInt(arenaNumber)-1]?.data[parseInt(quesNumber)-1]?.option.map((option,index)=>{
                    return(
                        <button key={index} className={`option-btn ${chooseOption === index ? "selected" : ""}`} onClick={()=>optionHandler(index)}>{option}</button>
                    )
                })}
            </div>

            <div style={{ textAlign: 'center' }}>
                <button className="submit-btn" onClick={()=>submitHandler()}>Submit</button>
            </div>
        </div>
    )
}

export default Question;