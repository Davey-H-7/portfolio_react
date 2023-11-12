import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';


const HeaderDiv = styled.div`
background-color: rgb(249, 148, 23);
height: 100vh;
padding-right: 0;
overflow:hidden;
`

const SocialLinks = styled.div`
list-style-type: none;
display:flex;
justify-content: space-evenly;
width: 40vw;
position: absolute;
top: 2%;

@media(max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 0 0 5px 5px;
}
`

const Social = styled.img`
max-width: 50px;
`

const IntroCircle = styled.div`
  height:60vw;
  width: 60vw;
  background-color: rgb(54, 48, 98);
  border-radius: 50%;
  position:relative;
  top:20%;
  left:-10%;
  display: flex;
  justify-content: center;
 align-items: center;
`
const ImageCircle = styled.div`
  height: 40vw;
  width: 40vw;
  background-color: rgb(54, 48, 98);
  border-bottom-left-radius: 100%;
  position:absolute;
  top: 0;
  right:0px;
`

const AboutImg = styled.img`
    width: 25vw;
    object-fit:contain;
    /* border: 3px solid rgb(54, 48, 98); */
    position: absolute;
    bottom: 30%;
    left: 30%;
    border-radius:30px;
`

const IntroTitle = styled.h1`
font-style: normal;
color: white;
font-size: 7vh;
width: 30vw;
text-align:center;
`
const Button = styled.button`
background-color: rgb(54, 48, 98);
color:white;
padding: 1em;
border-radius: 8px;
border-style: none;
margin: 1em;
font-size: 1.5em;

&:hover {
background-color: rgb(54, 48, 150);
}
`

const ButtonDiv = styled.div`
position: absolute;
bottom: 5%;
right: 8%;
width: 40%;

@media(max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 0 0 5px 5px;
}
`

const Header = () => {

    const navigate = useNavigate();

    const handleAbout= () => {
    navigate('/about')
    }

    const handleProjects = () => {
        navigate('/projects')
    }

return(
  <HeaderDiv>
    <SocialLinks>
      <a href ="https://github.com/Davey-H-7"><Social src ={require("../images/github.png")}/></a>
      <a href ="https://www.linkedin.com/in/david-hunter-8509a5b2/"><Social src ={require("../images/linkedin.png")}/></a>
    </SocialLinks>
    <IntroCircle>
      <IntroTitle> Hi, I'm Dave. Soon to be professional Software Developer. </IntroTitle>
    </IntroCircle>
    <ImageCircle>
      <AboutImg src = {require("../images/me.jpg")} alt ='a handsome bespectacled man in a blue suit with a floral orange tie'/>
    </ImageCircle>
    <ButtonDiv>
     <Button onClick = {handleAbout}> Learn About Me </Button>
      <Button onClick = {handleProjects}> See My Work </Button>
    </ButtonDiv>
  </HeaderDiv>
)

}


export default Header;