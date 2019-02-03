import React, {Component} from 'react';
import styled from "styled-components";


const Container = styled.div`
background: #ECF2F7;
height: auto;
`;

export default class ReceitaBody extends Component {
    constructor(props){
        super(props);
    }
    
    componentDidUpdate() {
        console.log(this.props);
    }

    render() {
        return (
            <Container>
                description: {this.props.description}
            </Container>
        );
    }
}