import React, {Component} from 'react';
import styled from 'styled-components'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const StyledContainer = styled.div`
background: #fff;
height: 20vh;
`;


const ExtraInfoContainer = styled.div`
  color: #666666;
  
  position: absolute;
  top: 75px;
  left: 150px;
  z-index: 20;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.div`
background: url(${props => props.image || ""}) 50% 50% no-repeat; /* 50% 50% centers image in div */
  width: 120px;
  height: 120px;
  border-radius: 20px;
  margin-top: 20px;
  
  -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
  -moz-box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
`;

const PriceDiv = styled.div`
  position: absolute;
  top: 5px;
  left: 120px;
  z-index: 20;
  
  width: 35px;
  height: 35px;
  border-radius: 35px;
  border: 2px #2ECC71 solid;
  color: #2ECC71;
  background-color: #fff;
  
    
  display: flex;
  justify-content: center;
  align-items: center;
  
  
`;

const RecipeTitle = styled.div`
  text-align: center;
  width: 60vw;
  font-size: 6vw;
  font-weight: bold;
  
  position: absolute;
  top: 35px;
  left: 140px;
  z-index: 25;
  
`;


const StyledRow = styled(Row)`
margin: 0;
`;


export default class ReceitaHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledContainer>
                <Container>
                    <StyledRow>
                        <StyledImage image={this.props.recipe.image}/>
                        <PriceDiv>{this.props.recipe.est_price}€</PriceDiv>
                        <RecipeTitle>{this.props.recipe.name} à Lagareiro</RecipeTitle>
                        <ExtraInfoContainer>
                            <i className="fas fa-user"></i> {this.props.recipe.feeds} doses <br/>
                            <i className="fas fa-burn"></i> {this.props.recipe.kcal}kcal <br/>
                            <i className="far fa-clock"></i> {this.props.recipe.time} <br/>
                        </ExtraInfoContainer>
                    </StyledRow>
                </Container>
            </StyledContainer>
        );
    }
}