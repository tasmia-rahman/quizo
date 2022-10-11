import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './Question.css';

const Question = ({ singleQuestion }) => {
    const { question, correctAnswer, options } = singleQuestion;

    const checkAnswer = (event) => {
        let answer = event.target.value;
        if (answer === correctAnswer) {
            toast('Correct answer');
        } else {
            toast('Wrong answer');
        }
    }

    const showAnswer = () => {
        toast(correctAnswer);
    }

    return (
        <div className='question-container'>
            <div className='icon'>
                <FontAwesomeIcon icon={faEye} onClick={showAnswer}></FontAwesomeIcon>
            </div>
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