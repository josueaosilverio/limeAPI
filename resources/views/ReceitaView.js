import React, {Component} from 'react'
import ReceitaHeader from "../js/components/ReceitaHeader";
import ReceitaBody from "../js/components/ReceitaBody";
import axios from "axios";
import {carrinhoAdd, coleccaoDelete, fetchRecipes} from "../js/actions/actions";
import {connect} from "react-redux";

let recipe;

const mapDispatchToProps = dispatch => {
    return{
        fetchRecipes: (payload) => dispatch(fetchRecipes(payload)),
        carrinhoAdd: (payload) => dispatch(carrinhoAdd(payload)),
        coleccaoDelete: (payload) =>dispatch(coleccaoDelete(payload))
    }
};

const mapStateToProps = state => {
    return {recipes: state.homeListReducer, carrinho: state.CarrinhoReducer}
};

class ReceitaView extends Component {

    constructor(props) {
        super(props);
        this.state = {recipe: ""};
    }

    componentDidMount() {
        if(this.props.recipes.length === 0){
            console.log("if começa aqui");
            axios.get("/api/recipe").then(response => {
                console.log("this is the response data");
                console.log(response.data.data);
                this.props.fetchRecipes(response.data.data);
            }).catch(error => {
                console.log(error);
            })
            ;
        }
    }

    render() {
        if(this.props.recipes)
            recipe = this.props.recipes.find(recipesmap => recipesmap.id.toString() === this.props.match.params.id);

            if (recipe){
        return (
            <div>
                <ReceitaHeader recipe={recipe}/>
                <ReceitaBody items={recipe.items} description={recipe.description}/>
            </div>

        )}else{
                return (
                    <div>
                        cenas //TODO adicionar graf de nao ha *shrug*
                    </div>

                )
            }
    }
}

const ReceitaViewC = connect(mapStateToProps, mapDispatchToProps)(ReceitaView);

export default ReceitaViewC
