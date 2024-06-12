import React from 'react'
import HomeStore from '../stores/HomeStore'
import Header from '../components/Header'
import ListItem from '../components/ListItem'

export default function Home () {
const store = HomeStore()
React.useEffect (() => {
store.fetchCoins ()
}, [])
return (
  <div>
    <Header />
    <header className='home-search'>
      
      <div className='width'>
      <h2>Search for a coin</h2>
    <input type="text" value={store.query} onChange={store.setQuery}/>
    </div>
    </header>
    <div className='home-cryptos'>
      <div className='width'>
        <div className="home-crypto-list">
          <h2>Trending coins </h2>
          {store.coins.map(coin=>{
          return(
          <ListItem key={coin.id} coin={coin}/>
          )
          })}
       </div>
      </div>
    </div>
  </div>

)
}


