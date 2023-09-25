import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import styled from 'styled-components'
import About from '../components/About';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const Construction = styled.h1`
text-align: center;
`


const PortfolioContainer = () => {

    return ( 
        <>
        <Construction> &#128679; Site under construction &#128679; </Construction>
        <Router>
            <NavBar/>
                <Routes>
                    <Route path ="/" element ={<About/>} />
                    <Route path ="/projects" element ={<Projects/>} />
                </Routes>
            <Footer/>
        </Router>
        </>
     );
}
 
export default PortfolioContainer;