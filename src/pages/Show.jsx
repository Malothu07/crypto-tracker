
import React from 'react';
import showStore from '../stores/showStore';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '../components/Header';

export default function Show() {
  const store = showStore();
  const params = useParams();

  React.useEffect(() => {
    store.fetchData(params.id);
  }, [params.id, store]);

  return (
    <div>
      <Header back />
      <header className='show-header'>
        <img src={store.data?.image?.large} alt={store.data?.name ? `${store.data.name} Logo` : 'Logo'} />
        <h2>
          {store.data?.name} {store.data?.symbol}
        </h2>
      </header>
      <div className='width'>
        <div className='show-graph'>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={300}
              data={store.graphData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="price" stroke="#8883d8" fill="#8883d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='show-details'>
        <div className='width'>
          <h2>Details</h2>
          <div className='show-details-row'>
            <h3>Market cap rank</h3>
            <span>{store.data?.market_cap_rank}</span>
          </div>
          <div className='show-details-row'>
            <h3>23 High</h3>
            <span>${store.data?.market_data?.high_23h?.usd}</span>
          </div>
          <div className='show-details-row'>
            <h3>23h low</h3>
            <span>${store.data?.market_data?.low_23h?.usd}</span>
          </div>
          <div className='show-details-row'>
            <h3>Circulating supply</h3>
            <span>${store.data?.market_data?.circulating_supply}</span>
          </div>
          <div className='show-details-row'>
            <h3>Current price</h3>
            <span>${store.data?.market_data?.current_price?.usd}</span>
          </div>
          <div className='show-details-row'>
            <h3>1y change</h3>
            <span>{store.data?.market_data?.price_change_percentage_1y?.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}




