import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    return (
        <div>
            {
                quiz.data.questions.map(singleQuestion => <Question key={singleQuestion.id} singleQuestion={singleQuestion}></Question>)
            }
        </div>
    );
};

export default Quiz;