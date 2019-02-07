import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchColec, carrinhoAdd, coleccaoDelete, receitaDelete} from "../js/actions/actions";
import {Link} from "react-router-dom";
import axios from "axios";
import store from "../js/store/store";
import styled from "styled-components";
import Row from "react-bootstrap/Row";

const mapDispatchToProps = dispatch => {
    return {
        fetchColec: () => dispatch(fetchColec()),
        carrinhoAdd: (payload) => dispatch(carrinhoAdd(payload)),
        coleccaoDelete: (payload) => dispatch(coleccaoDelete(payload)),
        receitaDelete: (payload) => dispatch(receitaDelete(payload))
    }
};

const mapStateToProps = state => {
    return {colecs: state.ColecListReducer}
};



const NothingContainer = styled.div`
  background: #ECF2F7;
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  color: #2ECC71;
  font-weight: bold;
  text-align: center;
  
  &>div{
  display: block;
  }    
`;

const Mosaic = styled.div`
width: 50vw;
height: 50vw;
background: url(${props => props.bg}) 50%;
`;


const StyledRow = styled(Row)`
  margin: 0;
`;



class ColecView extends Component {
    constructor(match) {
        super(match);
    }

    componentWillMount() {
        console.log(this.props.colecs);
        if (this.props.colecs.length === 0) {
            axios.get("/api/collection").then(response => {
                this.props.fetchColec({type: 'FETCH_COLEC', payload: response.data.data});

            }).catch(error => {
                console.log(error);
            })
        }
    }


    render() {
        let colec = this.props.colecs.find(colecsmap => colecsmap.id.toString() === this.props.match.params.id);
        let receitas = [];
        if (colec) {
            if (colec.recipes.length > 0) {
                colec.recipes.map((el, index) => {
                    receitas.push(
                        <div>
                            <Link to={`/receita/${el.id}`} key={index}> <Mosaic
                                bg={el.image}><i className="fas fa-trash-alt" onClick={() => {
                                this.props.receitaDelete([{receita: el, coleccao: colec}])
                            }}></i>
                                <i className="fas fa-cart-plus" onClick={() => {
                                    this.props.carrinhoAdd({receitas: colec.recipes, index: index});
                                }}></i></Mosaic></Link>

                        </div>);


                });
            }

            return (
                <div>
                    <NothingContainer>
                        {receitas}
                    </NothingContainer>
                </div>

            );
        } else {
            return (
                <StyledRow>
                    <div><img src="img/draw/chef.svg" style={{width: "80vw"}} alt=""/></div>
                    <br/>
                    <br/>
                    <div><h3>A cozinhar as suas receitas!</h3></div>
                </StyledRow>
            )
        }
    }
}


const ColecViewC = connect(mapStateToProps, mapDispatchToProps)(ColecView);

export default ColecViewC;