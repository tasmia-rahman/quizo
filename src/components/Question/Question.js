import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './Question.css';

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
        <div className='question-container'>

            <h3>Quiz: {question}</h3>
            <div className='options'>
                {
                    options.map(option =>
                        <p className='option'><input onChange={checkAnswer} type="radio" value={option} name={question} />{option}
                            <Toaster></Toaster>
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default Question;