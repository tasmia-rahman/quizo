import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div className='banner'>
                <img src="https://img.freepik.com/premium-vector/quiz-text-speech-symbols-concept_149152-641.jpg?w=2000" alt="" />
                <p>Learn something exciting!</p>
            </div>
            <div className='topics'>
                {
                    topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;