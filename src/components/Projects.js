import React from 'react';
import { styled } from 'styled-components';

const ProjectsDiv = styled.div`
display: flex;
justify-content: space-around;
background-color: darkorange;
height: auto;
padding: 0 0 0 5px;
gap: 5px;
`


const Title = styled.h1`
text-align: center;
`

const Project = styled.section`
display: flex;
border-top: 2px solid black;
gap: 10px;
`

const ProjectAlt = styled.section`
display: flex;
flex-direction: row-reverse;
border-top: 2px solid black;
gap: 10px;
`

const Desc = styled.p`
margin: 2% 0 2% 0;
`

const ProjectImg = styled.img`
    width: 350px;
    object-fit: cover;
    border: 3px solid black;
    line-height: 0;
    margin: 50px 0 50px 0;
    box-sizing: border-box;
`

const Projects = () => {
    return ( 
        <ProjectsDiv>
        <article>
        <Title> Stuff Dave Made </Title>
        

        <Project>
        <div>
        <h3> Sickley's Veterinary Surgery </h3>
        <p> Objective: To create an application to be useful for managing a veterinary practice, providing full CRUD functionality to the user for practice staff as well as registered pets and owners.</p>  
        <p> Tech Stack: Python backend, HTML & CSS frontend with Flask framework, PostgreSQL for database management. </p>
        <Desc> Sickley's was my first proper full stack application as well as my first module-capping project during CodeClan. This week long task taught me how vital planning is when it comes to coding as well as how time consuming it can be to properly test and debug along the way. While my understanding of all the technologies improved a great deal, my CSS abilities were seriously lacking going into this project and so that stands out as a key lesson. Overall I'm very proud of this work and showed it off to many friends and family.</Desc>
        </div>
        <ProjectImg src ={require("../images/vetmanagementapp.png")} alt = 'screenshot of vet management app home page'/>
        </Project>

        <ProjectAlt>
        <div>
        <h3> Pokemon Selector </h3>
        <p> Objective: To handle JSON information from an API, convert it to JavaScript and display to the user in a readable format.</p>  
        <p> Tech Stack: Javascript with React. </p>
        <Desc> As a lifelong gamer, creating a Pokedex application spoke to me when the time came to attempt implementing an API into a React application. The particular challenge here was the list of Pokemon from PokeAPI presented only a name and a URL, necessitating a second fetch request to obtain further information from the user selection.</Desc>
        </div>
        <ProjectImg src ={require("../images/vetmanagementapp.png")} alt = 'screenshot of vet management app home page'/>
        </ProjectAlt> 



        </article>
        </ProjectsDiv>
     );
}
 
export default Projects;