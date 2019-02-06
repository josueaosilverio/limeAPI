import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchColec, coleccaoCarrinho, deleteColeccao} from "../actions/actions";
import {Link} from "react-router-dom";
import axios from "axios";

const mapDispatchToProps = dispatch => {
    return{
        fetchColec: () => dispatch(fetchColec()),
        coleccaoCarrinho: (payload) => dispatch(coleccaoCarrinho(payload)),
        deleteColeccao: (payload) => dispatch(deleteColeccao(payload))
    }
};

const mapStateToProps = state => {
    return {colecs: state.colecListReducer, colecsCarrinho: state.coleccaoCarrinhoReducer}
};

class colecDetail extends Component{
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
                    <button className="btn btn-primary btn-lg" onClick={()=>{coleccaoCarrinho(colec) }}> add2carrinho </button>
                    <button className="btn btn-primary btn-lg" onClick={()=>{deleteColeccao(colec) }}> delete4ever </button>
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

const ColecDetail = connect(mapStateToProps, mapDispatchToProps)(colecDetail);

export default ColecDetail;