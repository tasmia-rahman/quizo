import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Question = ({ singleQuestion }) => {
    const { question, correctAnswer, options } = singleQuestion;

    const notifyCorrect = () => toast('Correct answer');
    const notifyIncorrect = () => toast('Wrong answer');

    const checkAnswer = (event) => {
        let answer = event.target.value;
        if (answer === correctAnswer) {
            notifyCorrect();
        } else {
            notifyIncorrect();
        }

    }
    return (
        <div>
            <h5>Quiz: {question}</h5>
            <div>
                {
                    options.map(option =>
                        <p><input onChange={checkAnswer} type="radio" value={option} name={question} />{option}
                            <Toaster></Toaster>
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default Question;