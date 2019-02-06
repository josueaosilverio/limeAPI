import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchColec} from "../actions/actions";
import {FETCH_COLEC} from "../actions/constants";
import {Link} from "react-router-dom";
import axios from "axios";

const mapDispatchToProps = dispatch => {
    return{
        fetchColec: () => dispatch(fetchColec())
    }
};

const mapStateToProps = state => {
    return {colecs: state.colecListReducer};
};


class colecList extends Component {
    constructor(){
        super();

        //this.clickAction = this.clickAction.bind(this);
    }

    componentWillMount(){

        if(this.props.colecs.length < 1) {
            axios.get("/api/collection").then(response => {
                this.props.fetchColec({type: 'FETCH_COLEC', payload: response.data.data});

            }).catch(error => {
                console.log(error);
            })
        }
    }



    render(){
        console.log(this.props.colec);
        let colecs;
        if(this.props.colecs.length > 0){
            colecs = this.props.colecs;
        }else{
            colecs = [];
        }
        console.log("isto são as colecs");
        console.log(colecs);
        return(
            <div>
                {colecs.map((el, index) => (

                        <div key={index}>
                            <p> {el.id}</p>
                            <Link to={`/coleccion/${el.id}`}>  <p> {el.name}  </p>  </Link>
                        </div>
                    )
                )}
            </div>



        )
    }
}

/*
            }*/

const ColecList = connect (mapStateToProps, mapDispatchToProps)(colecList);

export default ColecList;