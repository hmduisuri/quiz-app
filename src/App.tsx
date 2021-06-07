import React, { useState } from 'react';
import QuizCard from './components/QuizCard';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [quesNumber, setQuesNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  const startTrivia = async() =>{

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }


  const nextQuestion = () => {

  }


  return (
    <div className="App">
     Quiz
     <button onClick={startTrivia}>Start game</button>
     <p>Score:</p>
     <p>Loading questions...</p>
     {/* <QuizCard/> */}
     <button onClick={nextQuestion}>Next Question</button>


    </div>
  );
}

export default App;
