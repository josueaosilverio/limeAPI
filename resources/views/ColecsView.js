import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchColec} from "../js/actions/actions";
import {FETCH_COLEC} from "../js/actions/constants";
import {Link} from "react-router-dom";
import axios from "axios";


let colecs;

const mapDispatchToProps = dispatch => {
    return {
        fetchColec: () => dispatch(fetchColec())
    }
};

const mapStateToProps = state => {
    return {colecs: state.ColecListReducer};
};


class ColecsView extends Component {
    constructor() {
        super();

        //this.clickAction = this.clickAction.bind(this);
    }

    componentWillMount() {

        if (this.props.colecs.length < 1) {
            axios.get("/api/collection").then(response => {
                this.props.fetchColec({type: 'FETCH_COLEC', payload: response.data.data});

            }).catch(error => {
                console.log(error);
            })
        }
    }


    render() {
        console.log(this.props.colec);

        if (this.props.colecs.length > 0) {
            colecs = this.props.colecs;
        } else {
            colecs = [];
        }
        console.log("isto são as colecs");
        console.log(colecs);


        if (colecs) {

            return (

                <div>
                    {colecs.map((el, index) => (

                            <div key={index}>
                                <p> {el.id}</p>
                                <Link to={`/coleccao/${el.id}`}><p> {el.name}  </p></Link>
                            </div>
                        )
                    )}
                </div>

            )
        } else {
            return (
                <div>
                    cenas //TODO adicionar graf de nao ha *shrug*
                </div>

            )
        }


    }
}

/*
            }*/

const ColecsViewC = connect(mapStateToProps, mapDispatchToProps)(ColecsView);

export default ColecsViewC;