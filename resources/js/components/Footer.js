import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';

const FooterDiv = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 30;
  width: 100%;
  height: 10vh;
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
    text-align: center;
    font-size: 1.5em;
    
`;

const StyledLink = styled(NavLink)`
color: #666;

&.active{
color: #2ECC71 !important;
}
`;

const Footer = () => (
    <FooterDiv>
        <div className='container nav'>
            <StyledLink className="nav-item" activeClassName="active" to='/home'><MenuItem><i
                className="fas fa-home"></i></MenuItem></StyledLink>
            <StyledLink className="nav-item" activeClassName="active" to='/coleccao'><MenuItem><i
                className="fas fa-book"></i></MenuItem></StyledLink>
            <StyledLink className="nav-item" activeClassName="active" to='/cart'><MenuItem><i
                className="fas fa-shopping-cart"></i></MenuItem></StyledLink>
            <StyledLink className="nav-item" activeClassName="active" to='/lel'><MenuItem><i className="fas fa-cog"></i></MenuItem></StyledLink>
        </div>
    </FooterDiv>
);

export default Footer