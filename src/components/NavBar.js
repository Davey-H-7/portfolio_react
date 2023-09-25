import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const NavLinks = styled.div`
list-style-type: none;
display:flex;
justify-content: space-evenly;
background-color: darkmagenta;
margin: 0;
padding: 1em;
text-decoration: none;
border-bottom: 3px solid black;
`

const StyledLink = styled(Link)`
text-decoration: none;
color: white;
padding: 1em;

&:hover {
background-color: darkblue;
}
`


const NavBar = () => {
    return ( 
       <NavLinks>
        <li>
            <StyledLink to ="/">About Me</StyledLink>
        </li>
        <li>
            <StyledLink to ="/projects">My Projects</StyledLink>
        </li>

       </NavLinks>
     );
}
 
export default NavBar;