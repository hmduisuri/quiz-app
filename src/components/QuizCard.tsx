import React from 'react'

//types
import {AnswerObject} from '../App'
import { ButtonWrapper, Wrapper } from './Quizcard.styles'

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
  
        <Wrapper>
            <p className='q__number'>
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html:question }}></p>
            <div>
                {answers.map((answer) => (
                    <ButtonWrapper 
                    key= {answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked = {userAnswer?.answer === answer}
                    >
                        <button disabled={userAnswer? true: false} value = {answer} onClick={callBack}>
                        <span dangerouslySetInnerHTML={{__html:answer}}></span>
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
)

export default QuizCard
