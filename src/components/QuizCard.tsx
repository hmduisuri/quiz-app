import React from 'react'

//types
import {AnswerObject} from '../App'

type prop = {
    question : string;
    answers: string[];
    callBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr:number;
    totalQuestions: number;
}

const QuizCard:React.FC<prop> = ({
    question,
    answers,
    callBack,
    userAnswer,
    questionNr,
    totalQuestions
}) => (
  
        <div>
            <p className='q__number'>
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html:question }}></p>
            <div>
                {answers.map((answer) => (
                    <div key= {answer}>
                        <button disabled={userAnswer? true: false} value = {answer} onClick={callBack}>
                        <span dangerouslySetInnerHTML={{__html:answer}}></span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
)

export default QuizCard
