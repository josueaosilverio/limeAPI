import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchColec} from "../js/actions/actions";
import {FETCH_COLEC} from "../js/actions/constants";
import {Link} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Row from "react-bootstrap/Row";


let colecs;

const mapDispatchToProps = dispatch => {
    return {
        fetchColec: () => dispatch(fetchColec())
    }
};

const mapStateToProps = state => {
    return {colecs: state.ColecListReducer};
};


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

class ColecsView extends Component {
    constructor() {
        super();

        //this.clickAction = this.clickAction.bind(this);
    }

    componentWillMount() {

        if (this.props.colecs.length < 1) {
            axios.get("/api/collection").then(response => {
                this.props.fetchColec({type: 'FETCH_COLEC', payload: response.data.data});

            }).catch(error => {
                console.log(error);
            })
        }
    }


    render() {
        console.log(this.props.colec);

        if (this.props.colecs.length > 0) {
            colecs = this.props.colecs;
        } else {
            colecs = [];
        }
        console.log("isto são as colecs");
        console.log(colecs);


        if (colecs.length === 0) {

            return (

                <div>
                    <NothingContainer>
                        {colecs.map((el, index) => (
                                <div key={index}>
                                    <p> {el.id}</p>
                                    <Link to={`/coleccao/${el.id}`}><p> {el.name}  </p></Link>
                                </div>
                            )
                        )}
                    </NothingContainer>
                </div>

            )
        } else {
            return (
                <div>
                    <NothingContainer>
                        <StyledRow>
                            <div><img src="/img/draw/empty.svg" style={{width: "80vw"}} alt=""/></div>
                            <br/>
                            <br/>
                            <div><h3>Ainda não tem livros! Crie um!</h3></div>
                        </StyledRow>
                    </NothingContainer>
                </div>

            )
        }


    }
}

/*
            }*/

const ColecsViewC = connect(mapStateToProps, mapDispatchToProps)(ColecsView);

export default ColecsViewC;