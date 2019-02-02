import React, {Component} from 'react'
import SocialLoginButton from "../js/components/SocialLoginButton";
import styled from 'styled-components';


const BackgroundContainer = styled.div`
background: url("img/login_bg2.jpg") center;
 position: fixed;
  left: 0;
  right: 0;
  z-index: 1;

  display: block;
  width: 1200px;
  height: 800px;

  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);

`;
const ContentContainer = styled.div`
  position: relative;
  left: 0;
  right: 0;
  z-index: 9999;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  `;
const ImageContainer = styled.div`
  position: relative;
  left: 0;
  right: 0;
  z-index: 9999;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  
  filter: brightness(0) invert(1);
  
  display: flex;
  justify-content: center;
  align-items: center;
  `;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  `;

class LoginView extends Component {
    render() {
        return (
            <div>
                <BackgroundContainer>
                </BackgroundContainer>
                <Container>
                <ImageContainer>
                    <img width="60%" src="img/Logo.png" alt=""/>
                </ImageContainer>
                <ContentContainer>
                    <SocialLoginButton/>
                </ContentContainer>
                </Container>
            </div>
        )
    }
}

export default LoginView
