
import React from 'react';
import '../push/styles.css'

import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='notfound'>
            <div className='notfound-container'>
            <h2>404 - Page Not Found</h2>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to='/dashboard'>Return To Dashboard</Link>
            </div>
        </div>
    );
};

export default NotFound;
