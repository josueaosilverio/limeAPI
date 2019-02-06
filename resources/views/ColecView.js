import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchColec, carrinhoAdd, coleccaoDelete} from "../js/actions/actions";
import {Link} from "react-router-dom";
import axios from "axios";

const mapDispatchToProps = dispatch => {
    return{
        fetchColec: () => dispatch(fetchColec()),
        carrinhoAdd: (payload) => dispatch(carrinhoAdd(payload)),
        coleccaoDelete: (payload) => dispatch(coleccaoDelete(payload))
    }
};

const mapStateToProps = state => {
    return {colecs: state.colecListReducer, colecsCarrinho: state.coleccaoCarrinhoReducer}
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

        let colec = this.props.colecs.find(colecsmap => colecsmap.id.toString() === this.props.match.params.id);

        if(colec) {
            return (
                <div>
                    <p> {colec.id} </p>
                    <p> {colec.name} </p>
                    <Link to={'/lel'}> <button className="btn btn-primary btn-lg"> Back</button> </Link>
                    <button className="btn btn-primary btn-lg" onClick={()=>{carrinhoAdd(colec) }}> add2carrinho </button>
                    <button className="btn btn-primary btn-lg" onClick={()=>{coleccaoDelete(colec) }}> delete4ever </button>
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