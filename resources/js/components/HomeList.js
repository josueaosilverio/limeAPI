import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchRecipes} from "../actions/actions";
import {FETCH_RECIPES} from "../actions/constants";
import {Link} from "react-router-dom";
import axios from "axios";


const mapDispatchToProps = dispatch => {
    return{
        fetchRecipes: (payload) => dispatch(fetchRecipes(payload))
    }
};

const mapStateToProps = state => {
    return {homeList: state.homeListReducer};
};


class homeList extends Component {
    constructor(){
        super();

        //this.clickAction = this.clickAction.bind(this);
    }

    componentDidMount(){
        console.log("componentWillMount");

        if(this.props.homeList.length < 1) {
            axios.get("/api/recipe").then(response => {
                this.props.fetchRecipes(response.data.data);

            }).catch(error => {
                console.log(error);
            })
            ;


        }
    }



    render(){
        console.log(this.props.homeList);

        let recipes;
        if(this.props.homeList.length > 0){
            recipes = this.props.homeList;
        }else{
            recipes = [];
        }
        console.log("isto são as receitas");
        console.log(recipes);
        return(
            <div>
                {recipes.map((el, index) => (

                        <div key={index}>
                            <p> {el.id}</p>
                            <Link to={`/receita/${el.id}`}>  <p> {el.name}  </p>  </Link>
                        </div>
                    )
                )}
            </div>



        )
    }
}

/*
            }*/

const HomeList = connect (mapStateToProps, mapDispatchToProps)(homeList);

export default HomeList;