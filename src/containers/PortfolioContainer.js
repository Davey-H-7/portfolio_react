import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components'
import About from '../components/About';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Header from '../components/Header';

const ContainerDiv = styled.div`
width:100vw;
`



const PortfolioContainer = () => {

    return ( 
        <ContainerDiv>
        <Router>
                <Routes>
                    <Route path ="/" element ={<Header/>} />
                    <Route path = "/about" element = {<About/>}/>
                    <Route path ="/projects" element ={<Projects/>} />
                </Routes>
        </Router>
        </ContainerDiv>
     );
}
 
export default PortfolioContainer;