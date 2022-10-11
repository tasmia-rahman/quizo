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
        </div>
    );
};

export default Header;