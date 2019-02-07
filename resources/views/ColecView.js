import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchColec, carrinhoAdd, coleccaoDelete, receitaDelete} from "../js/actions/actions";
import {Link} from "react-router-dom";
import axios from "axios";
import store from "../js/store/store";

const mapDispatchToProps = dispatch => {
    return{
        fetchColec: () => dispatch(fetchColec()),
        carrinhoAdd: (payload) => dispatch(carrinhoAdd(payload)),
        coleccaoDelete: (payload) => dispatch(coleccaoDelete(payload)),
        receitaDelete: (payload) => dispatch(receitaDelete(payload))
    }
};

const mapStateToProps = state => {
    return {colecs: state.ColecListReducer}
};

class ColecView extends Component{
    constructor(match){
        super(match);
    }

    componentWillMount(){
        console.log(this.props.colecs);
        if(this.props.colecs.length === 0) {
            axios.get("/api/collection").then(response => {
                this.props.fetchColec({type: 'FETCH_COLEC', payload: response.data.data});

            }).catch(error => {
                console.log(error);
            })
        }
    }


    render() {
        console.log(store.getState());
        console.log("12312412312");
        console.log(this.props.colecs);
        let colec = this.props.colecs.find(colecsmap => colecsmap.id.toString() === this.props.match.params.id);
        let receitas = [];
        if(colec) {
            if(colec.recipes.length > 0) {
                colec.recipes.map((el, index) => {
                    receitas.push(<div key={index}>
                        <p key={index}> {el.name} </p>
                        <button className="btn btn-primary btn-lg" onClick={() => {
                        this.props.receitaDelete([{receita:el, coleccao:colec}])
                        }}>DeleteRecipe</button>
                        <button className="btn btn-primary btn-lg" onClick={() => {
                            this.props.carrinhoAdd({receitas:colec.recipes, index: index});
                        }}>Add2Carrinho</button>
                    </div>);


                });
            }

            return (
                <div>
                    <p> {colec.id} </p>
                    <p> {colec.name} </p>
                    {receitas}
                    <Link to={'/coleccao'}> <button className="btn btn-primary btn-lg"> Back</button> </Link>
                    <button className="btn btn-primary btn-lg" onClick={()=>{carrinhoAdd(colec) }}> add2carrinho </button>
                    <Link to={'/coleccao'}> <button className="btn btn-primary btn-lg" onClick={()=>{this.props.coleccaoDelete(colec) }}> delete4ever </button></Link>

                </div>

            );
        }else{
            return (
                <div>
                    Volta para casa amigo, essa colecção nem existe, seu poser de coleccionador!!
                </div>
            )
        }
    }
}


const ColecViewC = connect(mapStateToProps, mapDispatchToProps)(ColecView);

export default ColecViewC;