import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const StyledWrapper = styled.div`
backgroundColor: green;

`;

export default class Button extends Component {
    super(props);
    render() {
        return (
            <StyledWrapper>
            <button>{this.props.label}</button>
            </StyledWrapper>
        );
    }
}