import React from 'react'

type prop = {
    question : string;
    answers: string[];
    callBack: any;
    userAnswer: boolean;
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
                    <div>
                        <button disabled={userAnswer} onClick={callBack}>
                        <span dangerouslySetInnerHTML={{__html:answer}}></span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
)

export default QuizCard
