import React, {Component} from 'react';
import styled from "styled-components";
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {connect} from "react-redux";
import {carrinhoDelete} from "../actions/actions";

const Container = styled.div`
  background: #ECF2F7;
  width: 100vw;
  height: 90vh;

  padding-top: 10px;
`;


const NothingContainer = styled.div`
  background: #ECF2F7;
  width: 100vw;
  max-width: 100vw;
  height: 90vh;

  padding-top: 10px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: #2ECC71;
  font-weight: bold;
  text-align: center;
  
  &>div{
  display: block;
  }
    
`;

const StyledRow = styled(Row)`
  margin: 0;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavPill = styled(Nav.Link)`
  background: #FFF;
  border: 2px #2ECC71 solid;
  height: 50%;
  width: 30vw;
  color: #2ECC71;
  font-size: 1em;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;

  border-radius: 200px 200px 200px 200px;
  -moz-border-radius: 200px 200px 200px 200px;
  -webkit-border-radius: 200px 200px 200px 200px;

  display: flex;
  justify-content: center;
  align-items: center;

 &.active {
    background: #2ECC71 !important; 
    color: white !important;
  }
`;
const mapStateToProps = state => {
    return {carrinho: state.CarrinhoReducer}
};

const mapDispatchToProps = dispatch => {
    return{
        carrinhoDelete: (payload) => dispatch(carrinhoDelete(payload)),
    }
};
class Cart extends Component {
    constructor(props) {
        super(props);
    }

//todo ver cenas receita e ingred
    render() {
        if (this.props.carrinho.length > 0) {
            return (
                <Container>
                    <Tab.Container defaultActiveKey="recipe">
                        <StyledRow>
                            <Col sm={3}>
                                <NavContainer>
                                    <Nav variant="pills" className="flex">
                                        <Nav.Item>
                                            <NavPill eventKey="recipe">Receita</NavPill>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <NavPill eventKey="items">Ingredientes</NavPill>
                                        </Nav.Item>
                                    </Nav>
                                </NavContainer>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="recipe">
                                        <Card body>{this.props.description}</Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="items">
                                        <Card>
                                            <ListGroup variant="flush">
                                                {
                                                    (this.props.carrinho != null) ? this.props.carrinho.map((el, index) => (
                                                        <ListGroup.Item key={index}> <i className="fas fa-check"></i> {el.name} <button onClick={this.props.carrinhoDelete(el.id)}>delete</button></ListGroup.Item>
                                                    )) : <ListGroup.Item>PlaceHolder</ListGroup.Item>

                                                }
                                            </ListGroup>
                                        </Card>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </StyledRow>
                    </Tab.Container>
                </Container>
            );
        } else {
            return (
                <div>
                    <NothingContainer>
                        <StyledRow>
                            <div><img src="img/draw/cart.svg" style={{width: "80vw"}} alt=""/></div>
                            <br/>
                            <br/>
                            <div><h3>Não tem nada para comprar! Aproveite o dia!</h3></div>
                        </StyledRow>
                    </NothingContainer>
                </div>
            )
                ;
        }
    }
}
const CartC = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartC