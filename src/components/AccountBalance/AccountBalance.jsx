import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Balance = styled.div`
    min-width: 250px;
    margin: 0.5rem 0 0 2.5rem;
    font-size: 1.5rem;
    vertical-align: middle;
    text-align: left;
`;

const Section = styled.section`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 3rem;
    // display: inline-block;
`;

const Button = styled.button`
    margin: 0.8rem
`;

const BalanceToggleButton = styled(Button)`
    width: 150rem;
`;

var formatter = Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD'
})

export default function AccountBalance(props) {
    const buttonText = props.showBalance ? "Hide Balance" : "Show Balance";
    const buttonClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-info');
    const balanceContent = props.showBalance ? <>Balance: {formatter.format(props.amount)}</> : '\u00A0';
    return (
        <>
            <Balance>{balanceContent}</Balance>
            <Section>
                <BalanceToggleButton className={buttonClass} onClick={props.handleBalanceVisibilityChange}>
                        {buttonText}
                </BalanceToggleButton>
                <Button className='btn btn-success' onClick={props.handleBrrrr}>
                    <i className="fas fa-helicopter"></i>
                </Button>
            </Section>
        </>
    )
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}