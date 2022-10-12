import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css';

const Quiz = () => {
    const quiz = useLoaderData();

    return (
        <div className='quiz'>
            <h2>Quiz of {quiz.data.name}</h2>
            <div>
                {
                    quiz.data.questions.map((singleQuestion, index) => <Question index={index + 1} key={singleQuestion.id} singleQuestion={singleQuestion}></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;