import React, {Component} from 'react'
import ReceitaHeader from "../js/components/ReceitaHeader";
import ReceitaBody from "../js/components/ReceitaBody";
import axios from "axios";



class ReceitaView extends Component {

    constructor(props) {
        super(props);
        this.state = {recipe: ""};
    }

    componentDidMount() {
        axios.get('/api/recipe/' + this.props.match.params.id).then(response => {
            console.log(response.data.data);
            this.setState({
                recipe: response.data.data
            })
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <ReceitaHeader recipe={this.state.recipe}/>
                <ReceitaBody items={this.state.recipe.items} description={this.state.recipe.description}/>
            </div>
        )
    }
}

export default ReceitaView
