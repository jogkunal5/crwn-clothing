import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

// Functional Component
const HomePage = () => (
    <div className='homepage'>
        <Directory></Directory>
    </div>
)

export default HomePage;