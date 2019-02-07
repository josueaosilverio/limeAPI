import React, {Component} from 'react'
import ReceitaHeader from "../js/components/ReceitaHeader";
import ReceitaBody from "../js/components/ReceitaBody";
import axios from "axios";
import {carrinhoAdd, coleccaoDelete, fetchRecipes} from "../js/actions/actions";
import {connect} from "react-redux";
import styled from "styled-components";
import Row from "react-bootstrap/Row";

let recipe;

const mapDispatchToProps = dispatch => {
    return {
        fetchRecipes: (payload) => dispatch(fetchRecipes(payload)),
        carrinhoAdd: (payload) => dispatch(carrinhoAdd(payload)),
        coleccaoDelete: (payload) =>dispatch(coleccaoDelete(payload)),
        receitaAdd: (payload) => dispatch(receitaAdd(payload))
    }
};

const mapStateToProps = state => {
    return {recipes: state.HomeListReducer, carrinho: state.CarrinhoReducer, colecs: state.ColecListReducer }
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


class ReceitaView extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.recipes) {

            axios.get("/api/recipe").then(response => {

                this.props.fetchRecipes(response.data.data);
            }).catch(error => {
                console.log(error);
            })
            ;
        }
        if(!this.props.colecs){
            axios.get("/api/collection").then(response => {
                this.props.fetchColec({type: 'FETCH_COLEC', payload: response.data.data});

            }).catch(error => {
                console.log(error);
            })
        }
    }

    render() {
        if (this.props.recipes)
            recipe = this.props.recipes.find(recipesmap => recipesmap.id.toString() === this.props.match.params.id);

        if (recipe) {
            return (
                <div>
                    <ReceitaHeader recipe={recipe}/>
                    <ReceitaBody items={recipe.items} description={recipe.description}/>
                </div>

            )
        } else {
            return (
                <div>
                    <NothingContainer>
                        <StyledRow>
                            <div><img src="/img/draw/chef.svg" style={{width: "80vw"}} alt=""/></div>
                            <br/>
                            <br/>
                            <div><h3>A preparar a sua receita!</h3></div>
                        </StyledRow>
                    </NothingContainer>
                </div>
            )
        }
    }
}

const ReceitaViewC = connect(mapStateToProps, mapDispatchToProps)(ReceitaView);

export default ReceitaViewC
