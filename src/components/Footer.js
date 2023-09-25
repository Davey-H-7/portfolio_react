import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
background-color: darkmagenta;
margin: 0;
padding-bottom: 0;
text-decoration: none;
bottom: 0;
left: 0;
right: 0;
border-top: 3px solid black;
height: auto;
position: relative;
`

const SocialsHeading = styled.h3`
display: flex;
justify-content: center;
font-style: normal;
color: white;
`

const SocialLinks = styled.div`
list-style-type: none;
display:flex;
justify-content: space-evenly;

`

const Social = styled.img`
max-width: 50px;
border: none;`


const Footer = () => {
    return ( 

        <StyledFooter>
        <SocialLinks>
        <a href ="https://github.com/Davey-H-7"><Social src ={require("../images/github.png")}/></a>
        <SocialsHeading>Socials</SocialsHeading>
        <a href ="https://www.linkedin.com/in/david-hunter-8509a5b2/"><Social src ={require("../images/linkedin.png")}/></a>
        </SocialLinks>
        </StyledFooter>
     );


}
 
export default Footer;