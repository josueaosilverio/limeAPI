import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const FooterDiv = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 10%;
  background-color: #FFFFFF;
  color: #666666;
  
  -webkit-box-shadow: 0px -2px 5px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px -2px 5px 0px rgba(0,0,0,0.2);
  box-shadow: 0px -2px 5px 0px rgba(0,0,0,0.2);
  
  
    display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuItem = styled.div`
    width: 23vw;
    text-decoration: none;
    color: #666;
    text-align: center;
    font-size: 1.5em;
`;

const Footer = () => (
    <FooterDiv>
        <div className='container nav'>
            <Link className="nav-item" to='/'><MenuItem><i className="fas fa-home"></i></MenuItem></Link>
            <Link className="nav-item" to='/login'><MenuItem><i className="fas fa-book"></i></MenuItem></Link>
            <Link className="nav-item" to='/receita/1'><MenuItem><i className="fas fa-shopping-cart"></i></MenuItem></Link>
            <Link className="nav-item" to='/lel'><MenuItem><i className="fas fa-cog"></i></MenuItem></Link>
        </div>
    </FooterDiv>
);

export default Footer