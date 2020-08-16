import React from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import { v4 as uuidv4 } from 'uuid';
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components'

const Div = styled.div`
  text-align: center;
  background-color: rgb(98, 98, 180);
  color: #cccccc;
`;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      {
        key: uuidv4(),
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 9999.99
      },
      {
        key: uuidv4(),
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 32.0,
        price: 299.99
      },
      {
        key: uuidv4(),
        name: 'Tether',
        ticker: 'USDT',
        balance: 0.0,
        price: 1.0
      },
      {
        key: uuidv4(),
        name: 'Ripple',
        ticker: 'XRP',
        balance: 1000.0,
        price: 0.2
      }
    ]
  }

  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map(value => {
      if(value.ticker === valueChangeTicker){
        const randomPercentage = .995+Math.random()*.01;
        value.price = value.price * randomPercentage;
      }
      return value
    });
    this.setState({coinData:newCoinData});
  }

  handleBalanceVisibilityChange = () => {
    this.setState(function(oldState){
      return{
        ...oldState,
        showBalance: !oldState.showBalance
      }
    })
  }

  render(){
  return (
    <Div>
      
      <ExchangeHeader/>
      <AccountBalance 
        amount={this.state.balance} 
        showBalance={this.state.showBalance}
        handleBalanceVisibilityChange={this.handleBalanceVisibilityChange}
      />
      <CoinList 
        coinData={this.state.coinData} 
        handleRefresh={this.handleRefresh}
        showBalance={this.state.showBalance}
      />

    </Div>
  );
  }
}

export default App;
