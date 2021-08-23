import axios from 'axios';
import { useEffect, useState } from 'react';
import TableCoins from './components/TableCoins';

function App() {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    async function getData() {
      const request = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
      setCoin(request.data);
    }
    getData()
  }, [])
  return (
    <div className='container'>
      <h1 className='text-center'>Top 100 currencies by market capitalization</h1>
      <input onChange={e => setSearch(e.target.value)} type="text" placeholder='Enter a coin...' className='form-control border-0 text-align bg-dark text-light mt-3 text-center' />
      <TableCoins coin={coin} search={search} />
    </div>
  );
}

export default App;
