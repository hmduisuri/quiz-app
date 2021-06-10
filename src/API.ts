import { shuffleArray } from "./utils";

export type Question = {
    catogory: string;
    disfficulty: string;
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] }

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuestions = async (amount: Number, difficulty: Difficulty) => {
    const baseurl = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(baseurl)).json();
    return data.results.map((question: Question) => (
        {
                ...question,
                answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ));
}