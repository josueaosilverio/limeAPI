import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchColec, coleccaoCreate} from "../js/actions/actions";
import {FETCH_COLEC} from "../js/actions/constants";
import {Link} from "react-router-dom";
import axios from "axios";

const mapDispatchToProps = dispatch => {
    return {
        fetchColec: (payload) => dispatch(fetchColec(payload)),
        coleccaoCreate: (payload) => dispatch(coleccaoCreate(payload))
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

    componentDidMount() {

        if (this.props.colecs.length === 0) {
            axios.get("/api/collection").then(response => {
                this.props.fetchColec(response.data.data);

            }).catch(error => {
                console.log(error);
            })
        }
    }


    render() {


        let colecs = this.props.colecs;

        console.log("isto são as colecs");
        console.log("here",colecs[0]);
        console.log("there", colecs);
        console.log(this.props.colecs);

        return (

            <div>
                {
                    (colecs != null) ? colecs.map((el, index) => (


                            <div key={index}>
                                <p> {el.id}</p>
                                <Link to={`/coleccao/${el.id}`}><p> {el.name}  </p></Link>

                            </div>
                        )
                    ) : "cócó"
                }
                <button className="btn btn-primary btn-lg" onClick={()=> {this.props.coleccaoCreate([{id:10, name: "aoskeokas"}])}} > adiciona aí oh mano</button>
            </div>

        )


    }
}

/*
            }*/

const ColecsViewC = connect(mapStateToProps, mapDispatchToProps)(ColecsView);

export default ColecsViewC;