import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <h3>{name}</h3>
            <p>Number of quiz: {total}</p>
            <button>
                <Link to={`/quiz/${id}`}>
                    Start Practice
                    <FontAwesomeIcon icon={faRightLong}></FontAwesomeIcon>
                </Link>
            </button>
        </div>
    );
};

export default Topic;