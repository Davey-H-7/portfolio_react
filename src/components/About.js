import React from 'react';
import { styled } from 'styled-components';

const AboutDiv = styled.div`
display: flex;
justify-content: space-around;
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(254,145,2,1) 76%, rgba(235,124,4,1) 100%);
height: auto;
padding: 0 0 0 5px;
gap: 5px;

@media(max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 0 0 5px 5px;
}
`

const Title = styled.h1`
text-align: center;
`

const AboutSec = styled.section`
border-top: 1px solid black;
`

const AboutImg = styled.img`
    width: 350px;
    object-fit: cover;
    border: 3px solid black;
    line-height: 0;
    margin: 50px 0 50px 0;
    box-sizing: border-box;
`

const About = () => {
    return ( 
        <AboutDiv>
        <article>
        <Title> About me </Title>

        <AboutSec>
        <h3> Coding Journey </h3>
        <p> In June 2023 I joined CodeClan's Professional Software Development course where I found my passion for coding.</p>  
        <p> The liquidation of CodeClan during my second week of the course only fueled my determination to carry on, thankfully I was able to continue my studies under CodeBase and have to date completed 8 of the 16 weeks.  </p>
        <p> During this time I have built several full stack apps using Python, Javascript, React, HTML, CSS and PostGreSQL. Some examples of my work can be found under the projects tab.  </p>
        </AboutSec>
        <AboutSec>
        <h3> Past experience</h3>
        <p> Prior to venturing into software development I was an Electrical Engineer within a consultancy focusing on building services.</p>
        <p> My day-to-day here including crafting designs for a range of electrical services including lighting & fire alarms, collaborating with other teams within and external to my company and dealing with technical queries</p>
        </AboutSec>
        <AboutSec>
        <h3> Personal Life</h3>
        <p> Outside of work and coding I am an active member of Glasgow's Dodgeball team, <a href = 'https://www.instagram.com/kelvinrapids/?hl=en'>Kelvin Rapids</a>, regularly representing the team at leagues and tournaments and for which I am an event's prganiser and the team's Wellness Officer.</p>
        <p>I also have had a lifelong obsession with gaming and have in the past, livestreamed on Twitch and written for gaming website, GodisaGeek. You can see some of my favourite games here. </p>
        </AboutSec>
        </article>

        <AboutImg src = {require("../images/me.jpg")} alt ='a handsome bespectacled man in a blue suit with a floral orange tie'/>
        
        </AboutDiv>
     );
}
 
export default About;