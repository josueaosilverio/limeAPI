import React, {Component} from 'react';
import styled from 'styled-components'

const Container = styled.div`
background: #fff;
height: 20%;
`;

export default class ReceitaHeader extends Component {
    render() {
        return (
            <Container>
                {this.props.recipe}
            </Container>
        );
    }
}