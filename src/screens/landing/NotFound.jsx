
import React from 'react';
import '../push/css/styles.css'

import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='notfound'>
            <div className='notfound-container'>
            <h2>404 - Page Not Found</h2>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to='/announcement'style={{color: "#3085d6"}}>Return To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
