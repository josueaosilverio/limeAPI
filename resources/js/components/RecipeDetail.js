import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchRecipes, carrinho, coleccaoDelete} from "../actions/actions";
import {Link} from "react-router-dom";
import axios from "axios";

let recipe;

const mapDispatchToProps = dispatch => {
    return{
        fetchRecipes: (payload) => dispatch(fetchRecipes(payload)),
        carrinho: (payload) => dispatch(carrinho(payload)),
        coleccaoDelete: (payload) =>dispatch(coleccaoDelete(payload))
    }
};

const mapStateToProps = state => {
    return {recipes: state.homeListReducer, receitasCarrinho: state.receitaCarrinhoReducer}
};

class recipeDetail extends Component{
    constructor(match){
        super(match);
    }



    componentWillMount(){
        console.log(this.props.recipes);
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

        recipe = this.props.recipes.find(recipesmap => recipesmap.id.toString() === this.props.match.params.id);

        if(recipe) {

            return (
                <div>
                    <p> {recipe.name}
                        {recipe.description}
                    </p>
                    <button className="btn btn-primary btn-lg" onClick={()=>{this.props.carrinho(recipe);}}> Adiciona à colecção</button>
                    <button className="btn btn-primary btn-lg" onClick={()=>{this.props.coleccaoDelete(recipe);}}> DeleteMe4Ever</button>
                    <Link to={'/lel'}> <button className="btn btn-primary btn-lg"> Back</button> </Link>
                </div>

            );
        }else{
            return (
                <div>
                    Volta para casa amigo, essa receita nem existe, seu cego!!
                </div>
            )
        }
    }
}

const RecipeDetail = connect(mapStateToProps, mapDispatchToProps)(recipeDetail);

export default RecipeDetail;