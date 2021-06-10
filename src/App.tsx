import React, { useState } from 'react';
import { Difficulty, fetchQuestions, QuestionState } from './API';
import QuizCard from './components/QuizCard';

export type AnswerObject  = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;
const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [quesNumber, setQuesNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  console.log(questions);

  const startTrivia = async() =>{
      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchQuestions(TOTAL_QUESTIONS,Difficulty.EASY);

      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setQuesNumber(0)
      setLoading(false);
      
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
      if(!gameOver) {
        const answer = e.currentTarget.value;
      
      //check answer agains crrect answer
       const correct = questions[quesNumber].correct_answer === answer;
        // add score if the answer is correct
       if(correct) setScore((prev) => prev +1);
       //save aswer in the array  for user answer
       const answerObject  = {
        question: questions[quesNumber].question,
        answer,
        correct,
        correctAnswer: questions[quesNumber].correct_answer
      }

      setUserAnswers((prev) => [...prev,  answerObject]);


      }
  }


  const nextQuestion = () => {
    const nextQuestion = quesNumber + 1;

    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    }else{
      setQuesNumber(nextQuestion);
    }
  }


  return (
    <div className="App">
     Quiz
     {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
     <button onClick={startTrivia}>Start game</button>
     ): null}
     {!gameOver ? <p>Score: {score}</p>: null}
     {loading && <p>Loading questions...</p>}
     {!loading && !gameOver && (<QuizCard
      questionNr = {quesNumber + 1}
      totalQuestions = {TOTAL_QUESTIONS}
      question = {questions[quesNumber].question}
      answers = {questions[quesNumber].answers}
      userAnswer = {userAnswers?userAnswers[quesNumber]:undefined}
      callBack = {checkAnswer}
     /> )}

     {!gameOver  && !loading && userAnswers.length === quesNumber +1 && quesNumber !==TOTAL_QUESTIONS -1 ?(
     <button onClick={nextQuestion}>Next Question</button>
     ) : null}
    </div>
  );
}

export default App;
