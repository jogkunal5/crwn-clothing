/**
 * Styled Components allow you to write plain CSS in your components without worrying about 
 * class name collisions. It helps to write CSS that's scoped to a single component and does 
 * not leak to any other element in the page
 * 
 * styled-components utilises tagged template literals to style your components. 
 * It removes the mapping between components and styles. This means that when you're 
 * defining your styles, you're actually creating a normal React component, that has 
 * your styles attached to it.
 */

import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
`