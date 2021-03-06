import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchRecipes, carrinhoAdd, coleccaoDelete} from "../actions/actions";
import {Link} from "react-router-dom";
import axios from "axios";

let recipe;

const mapDispatchToProps = dispatch => {
    return{
        fetchRecipes: (payload) => dispatch(fetchRecipes(payload)),
        carrinhoAdd: (payload) => dispatch(carrinhoAdd(payload)),
        coleccaoDelete: (payload) =>dispatch(coleccaoDelete(payload))
    }
};

const mapStateToProps = state => {
    return {recipes: state.homeListReducer, carrinho: state.carrinhoReducer}
};

class recipeDetail extends Component{
    constructor(match){
        super(match);
    }



    componentWillMount(){
        if(this.props.recipes.length === 0){
            axios.get("/api/recipe").then(response => {
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
                    <button className="btn btn-primary btn-lg" onClick={()=>{this.props.carrinhoAdd(recipe);}}> Adiciona à colecção</button>
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