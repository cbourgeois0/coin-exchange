import React from 'react'
import logo from './logo.svg';
import styled from 'styled-components'

const Img = styled.img`
    height: 8rem;
    pointer-events: none;
`;
const H1 = styled.h1`
    font-size: 3rem;
    line-height: 8rem;
    font-weight: bold;
    min-width: 300px;
`;
const Header = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
`;

export default function ExchangeHeader() {
    return (
        <Header>
            <Img src={logo} alt="React logo"/>
            <H1>
                Coin Exchange
            </H1>
        </Header>
    )
}
