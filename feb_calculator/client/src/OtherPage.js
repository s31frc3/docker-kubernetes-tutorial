import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <div>
            this is other page
            <Link to="/">go bakc home</Link>
        </div>
    );
};