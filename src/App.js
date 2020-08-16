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
  constructor(props){
    super(props);
    this.state={
      balance: 10000,
      coinData: [
        {
          key: uuidv4(),
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 9999.99
        },
        {
          key: uuidv4(),
          name: 'Ethereum',
          ticker: 'ETH',
          price: 299.99
        },
        {
          key: uuidv4(),
          name: 'Tether',
          ticker: 'USDT',
          price: 1.0
        },
        {
          key: uuidv4(),
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.2
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(valueChangeTicker){
    const newCoinData = this.state.coinData.map(({key, name, ticker, price}) => {
      if(ticker === valueChangeTicker){
        const randomPercentage = .995+Math.random()*.01;
        price = price * randomPercentage;
      }
      return{
        key,
        name,
        ticker,
        price
      }
    });
    this.setState({coinData:newCoinData});
  }

  render(){
  return (
    <Div>
      
      <ExchangeHeader/>
      <AccountBalance amount={this.state.balance}/>
      <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh}/>

    </Div>
  );
  }
}

export default App;
