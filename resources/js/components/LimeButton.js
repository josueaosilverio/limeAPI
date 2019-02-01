import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const StyledWrapper = styled.div`

`;
const ButtonA = styled.button`

`;

export default class LimeButton extends Component {
    render() {
        return (
            <StyledWrapper>
            <ButtonA className="btn btn-success">{this.props.label}</ButtonA>
            </StyledWrapper>
        );
    }
}