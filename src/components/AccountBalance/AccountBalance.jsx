import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

export default function AccountBalance(props) {
    const buttonText = props.showBalance ? "Hide Balance" : "Show Balance";
    const content = props.showBalance ? <>Balance: ${props.amount}</> : null;
    return (
        <Section>
            {content}
            <button onClick={props.handleBalanceVisibilityChange}>{buttonText}</button>
        </Section>
    )
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}