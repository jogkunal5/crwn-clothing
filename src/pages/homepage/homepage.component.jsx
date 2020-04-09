import React from 'react';
//import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

// Importing the styled-component here
import { HomePageContainer } from './homepage.styles';

// Functional Component
const HomePage = () => (
    // <div className='homepage'>
    //     <Directory></Directory>
    // </div>
    <HomePageContainer>
        <Directory></Directory>
    </HomePageContainer>
)

export default HomePage;