import React, {Component} from "react";
import {connect} from "react-redux";
import {coleccaoCreate, fetchColec} from "../js/actions/actions";
import {Link} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const mapDispatchToProps = dispatch => {
    return {
        fetchColec: (payload) => dispatch(fetchColec(payload)),
        coleccaoCreate: (payload) => dispatch(coleccaoCreate(payload))
    }
};

const mapStateToProps = state => {
    return {colecs: state.ColecListReducer};
};


const NothingContainer = styled.div`
  background: #ECF2F7;
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  
  color: #2ECC71;
  font-weight: bold;
  text-align: center;
  
  &>div>div{
  display: block;
  }    
`;

const ContainerC = styled.div`
padding-top: 10px;
flex-direction: column;
`;
const FlexCont = styled.div`
  display: flex !important;
`;

const StyledRow = styled(Row)`
  margin: 0;
`;

const StyledButton = styled(Button)`

  background-color: #2ECC71;
  border-color: #2ECC71;
  width: 80vw;
  
  &:focus,:default{
    background-color: #2ECC71 !important;
  border-color: #2ECC71 !important;
  }

`;
const StyledCard = styled(Card)`

color: #000;
font-weight: bold;
text-decoration: none;
border-left: #2ecc71 2px solid;
width: 80vw;
max-width: 80vw;
min-width: 80vw;
text-align: left;
font-size: 1em;
margin-top: 10px;
margin-left: 10vw;

`;


class ColecsView extends Component {
    constructor() {
        super();

        //this.clickAction = this.clickAction.bind(this);
    }

    componentDidMount() {

        if (this.props.colecs.length === 0) {
            axios.get("/api/collection").then(response => {
                this.props.fetchColec(response.data.data);

            }).catch(error => {
                console.log(error);
            })
        }
    }


    render() {


        let colecs = this.props.colecs;

        console.log("isto são as colecs");
        console.log("here", colecs[0]);
        console.log("there", colecs);
        console.log(this.props.colecs);

        return (

            <NothingContainer>
                {
                    (colecs.length > 0) ?
                        <ContainerC>
                            <StyledButton onClick={() => {
                                this.props.coleccaoCreate([{id: 10, name: "Coleção Nova"}])
                            }}> Criar um livro de receitas
                            </StyledButton>
                            {
                                colecs.map((el, index) => (
                                        <Link to={`/coleccao/${el.id}`} key={index}>
                                            <StyledCard body>
                                                {el.name}
                                            </StyledCard>
                                        </Link>
                                    )
                                )}
                        </ContainerC>
                        :
                        <FlexCont>
                            <StyledRow>
                                <div><img src="/img/draw/empty.svg" style={{width: "80vw"}} alt=""/></div>
                                <br/>
                                <br/>
                                <div><h3>Ainda não tem livros! Crie um!</h3></div>
                                <StyledButton onClick={() => {
                                    this.props.coleccaoCreate([{id: 99, name: "Coleção Nova"}])
                                }}> Criar um livro de receitas
                                </StyledButton>
                            </StyledRow>
                        </FlexCont>

                }
            </NothingContainer>

        )


    }
}

/*
            }*/

const ColecsViewC = connect(mapStateToProps, mapDispatchToProps)(ColecsView);

export default ColecsViewC;