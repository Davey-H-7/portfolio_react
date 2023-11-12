import React from 'react';
import { styled } from 'styled-components';


const AboutDiv = styled.div`
color: white;
font-size: 1.5em;
display: flex;
justify-content: space-around;
height: auto;
gap: 5px;
background-color:rgb(54, 48, 98);

@media(max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 0 0 5px 5px;
}
`

const AboutSec = styled.section`
margin: 0 0 5% 2%; 
`



const About = () => {
    return ( 
        <>
        <AboutDiv>
        <article>

        <AboutSec>
        <h3> My Coding Journey </h3>
        <p> Having dabbled in coding in the past, In June 2023 I made the life-altering decision to join CodeClan's Professional Software Development course seeking new challenges and an exciting career in tech. There I immediately found my passion and a natural ability for coding.</p>  
        <p> The liquidation of CodeClan during my second week of the course only fueled my determination to carry on. At this point I was set on teaching myself the course materials in order to not give up on this path I had so recently begun. Thankfully CodeBase stepped in to take over running of the course and I was able to carry on with the CodeClan cirriculum under the tutelage of same excellent instructors.  </p>
        <p> To date I have completed a rollercoaster 13 weeks of the 16 week course. During this time I have built several full stack apps using languages such as Python, Javascript and Java with frameworks on Spring and Flask as well as MongoDB and PostGreSQL databases and built front-ends with React, HTML & CSS. I have also gained experience working with industry techniques such as daily stand-ups, pair & mob programming, remote working and Test-Driven Development.   </p>
        </AboutSec>
        <AboutSec>
        <h3> Past experience</h3>
        <p> Prior to venturing into software development I was an Electrical Engineer within a consultancy focusing on building services. My day-to-day here including crafting designs for a range of electrical services including lighting & fire alarms, collaborating on projects with colleagues and other teams and balancing multiple deadlines while also dealing with technical queries for ongoing projects.</p>
        </AboutSec>
        <AboutSec>
        <h3> Personal Life</h3>
        <p> When I'm not coding I am an active member of Glasgow's Dodgeball team, <a href = 'https://www.instagram.com/kelvinrapids/?hl=en'>Kelvin Rapids</a>, regularly representing the team at leagues and tournaments and for which I am an events oprganiser and the team's Wellness Officer. Yes, it is a bit like the film but I've seen no pirates so far.</p>
        <p>I also have had a lifelong obsession with gaming and have in the past, livestreamed on Twitch and written for gaming website, GodisaGeek. You can see some of my favourite and recent games on my backloggd <a href ='https://www.backloggd.com/u/Davey_H/'>here.</a> </p>
        </AboutSec>
        </article>
        
        </AboutDiv>
        </>
     );
}
 
export default About;