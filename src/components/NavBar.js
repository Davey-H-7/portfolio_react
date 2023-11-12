import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const NavLinks = styled.div`
list-style-type: none;
display:flex;
justify-content: space-evenly;
background-color: rgb(54, 48, 98);
margin: 0;
padding: 1em;
text-decoration: none;
border-bottom: 3px solid black;
height: 5vh;
`

const StyledLink = styled(Link)`
text-decoration: none;
color: white;
font-size: 3em;

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