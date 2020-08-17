import React from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components'
import axios from 'axios';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

const Div = styled.div`
  text-align: center;
  background-color: rgb(98, 98, 180);
  color: #cccccc;
`;

const COIN_COUNT = 9;
const tickerUrl ='https://api.coinpaprika.com/v1/tickers/';
const formatPrice = price => parseFloat(Number(price).toFixed(4));

function App() {
  const [balance, setBalance] = React.useState(1000);
  const [showBalance, setShowBalance] = React.useState(false);
  const [coinData, setCoinData] = React.useState([]);

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins')
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinRawData = await Promise.all(promises);
    const coinData = coinRawData.map(function(response){
      const coin = response.data;
      return {
        key: coin.id,
        id: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes.USD.price)
      }
    })
    setCoinData(coinData);
}

  React.useEffect(() => {
    if(coinData.length === 0){
      componentDidMount();
    }
  })

  const handleRefresh = async (valueChangeId) => {
    const response = await axios.get(tickerUrl + valueChangeId);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = coinData.map(value => {
      if(value.id === valueChangeId){
        value.price = newPrice;
      }
      return value
    });
    setCoinData(newCoinData);
  }

  const handleTransaction = async (isBuy, valueChangeId) => {
    var balanceChange = isBuy ? 1 : -1;
    const newCoinData = coinData.map(value => {
      if(value.id === valueChangeId){
        value.balance += balanceChange;
        setBalance(oldBalance => oldBalance - balanceChange * value.price)
      }
      return value
    });
    setCoinData(newCoinData);
  }

  const handleBalanceVisibilityChange = () => {
    setShowBalance(oldState => !oldState);
  }

  const handleBrrrr = () => {
    setBalance(oldState => oldState + 1200);
  }

  return (
    <Div>
      
      <ExchangeHeader/>
      <AccountBalance 
        amount={balance} 
        showBalance={showBalance}
        handleBalanceVisibilityChange={handleBalanceVisibilityChange}
        handleBrrrr={handleBrrrr}
      />
      <CoinList 
        coinData={coinData}
        handleRefresh={handleRefresh}
        handleTransaction={handleTransaction}
        showBalance={showBalance}
      />

    </Div>
  );
}

export default App;
