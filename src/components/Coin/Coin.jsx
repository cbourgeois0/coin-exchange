import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 16vw;
`;

const TdControls = styled(Td)`
    width: 34vw;
`;

const TdName = styled(Td)`
    width: 24vw;
`;

const Button = styled.button`
    font-size: 11px;
    width: 64px;
    margin: 3px 5px 0;
`;

export default function Coin(props) {

    const handleRefresh = (event) => {
        event.preventDefault();
        props.handleRefresh(props.id);
    }

    const handleBuy = (event) => {
        event.preventDefault();
        props.handleTransaction(true, props.id);
    }

    const handleSell = (event) => {
        event.preventDefault();
        props.handleTransaction(false, props.id);
    }

    return (
        <tr>
            <TdName>{props.name}</TdName>
            <Td>{props.ticker}</Td>
            <Td>${props.price}</Td>
            <Td>{props.showBalance ? props.balance : '-'}</Td>
            <TdControls>
                <form action="#" method="POST">
                    <Button className='btn btn-info' onClick={handleRefresh}>Refresh</Button>
                    <Button className='btn btn-warning' onClick={handleBuy}>Buy</Button>
                    <Button className='btn btn-danger' onClick={handleSell}>Sell</Button>
                </form>
            </TdControls>
        </tr>
    )
    
}
 
Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}