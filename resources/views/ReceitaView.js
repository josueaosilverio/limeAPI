import React, {Component} from 'react'
import ReceitaHeader from "../js/components/ReceitaHeader";
import ReceitaBody from "../js/components/ReceitaBody";



class ReceitaView extends Component {

    render() {
        return (
            <div>
                <ReceitaHeader/>
                <ReceitaBody/>
            </div>
        )
    }
}

export default ReceitaView
