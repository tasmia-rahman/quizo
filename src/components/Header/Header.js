import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav className='flex'>
                <div>
                    <h1>Quizo</h1>
                </div>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </nav>
            <div className='banner'>
                <img src="https://img.freepik.com/premium-vector/quiz-text-speech-symbols-concept_149152-641.jpg?w=2000" alt="" />
                <p>Learn something exciting!</p>
            </div>
        </div>
    );
};

export default Header;