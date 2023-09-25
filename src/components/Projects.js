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

const Projects = () => {
    return ( 
        <ProjectsDiv>
        <article>
        <Title> Some of my work </Title>
        

        <section>
        <h3> Sickley's Veterinary Surgery </h3>
        <p> Objective: To create an application for managing a veterinary practice focusing on CRUD functionality for vet staff, pets and owners.</p>  
        <p> Tech Stack: Python backend, HTML & CSS frontend with Flask framework, PostgreSQL for database management. </p>
        <p> Key Learnings:</p>
        <ul>
            <li>
                Time required to follow methodical process for planning, testing, writing code and debugging.
            </li>
            <li>
                Consolidation of several technologies into my first full-stack application.
            </li>
            <li>
                Advancement of CSS knowledge.
            </li>
        </ul>  
        <img src =''></img>
        </section>

        <section>
        <h3> Pokemon  </h3>
        <p> Objective: To create an application for managing a veterinary practice focusing on CRUD functionality for vet staff, pets and owners.</p>  
        <p> Tech Stack: Python backend, HTML & CSS frontend with Flask framework, PostgreSQL for database management. </p>
        <p> Key Learnings:</p>
        <ul>
            <li>
                Time required to follow methodical process for planning, testing, writing code and debugging.
            </li>
            <li>
                Consolidation of several technologies into my first full-stack application.
            </li>
            <li>
                Advancement of CSS knowledge.
            </li>
        </ul>  
        <img src =''></img>
        </section>



        </article>
        </ProjectsDiv>
     );
}
 
export default Projects;