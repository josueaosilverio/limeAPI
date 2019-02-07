import React, {Component} from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    @media only screen and (max-width : 399px) {
        width: 10%
    }
`;

const BtnFacebook = styled.button`
    width: 200px;
    height:35px;  
    border-radius: 4px;
    background: #3b5998;
    color:white;
    border:0px transparent;  
    text-align: left;
    margin:5px;
    display: inline-block;
`;
const BtnTwitter = styled.button`
    width: 200px;
    height:35px;  
    border-radius: 4px;
    background: #1DA1F2;
    color:white;
    border:0px transparent;  
    text-align: left;
    margin:5px;
    display: inline-block;
`;
const BtnGoogle = styled.button`
    margin:5px;
    width: 200px;
    height:35px;
    border-radius: 4px;
    background: #db3236;
    color:white;
    border:0px transparent;
    text-align: left;
`;

class SocialLoginButton extends Component {
    render() {
        return (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <Wrapper>
                    <a href="login/facebook">
                        <BtnFacebook>
                            <i className="fab fa-facebook"></i>
                            &nbsp;&nbsp;Login with Facebook
                        </BtnFacebook>
                    </a>
                    <br/>
                    <a href="login/twitter">
                        <BtnTwitter>
                            <i className="fab fa-twitter"></i>
                            &nbsp;&nbsp;Login with Twitter
                        </BtnTwitter>
                    </a>
                    <br/>
                    <a href="login/google">
                        <BtnGoogle>
                            <i className="fab fa-google"></i>
                            &nbsp;&nbsp;Login with Google
                        </BtnGoogle>
                    </a>
                </Wrapper>
            </div>
        )
    }
}

export default SocialLoginButton