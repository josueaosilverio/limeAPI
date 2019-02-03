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

    componentWillUpdate(nextProps, nextState, nextContext) {
    console.log(nextProps);
    }

    render() {
        return (
            <Container>
                description: {this.props.description}
            </Container>
        );
    }
}