import React from 'react';
import CoinRow from './CoinRow';

const TableCoins = ({ coin, search }) => {
  const searchCoin = () =>
    coin.filter(
      element =>
        element.name.toLowerCase().includes(search.toLowerCase()) |
        element.symbol.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <>
      <table className='table table-dark mt-3 table-hover'>
        <thead>
          <tr>
            <td>#</td>
            <td>Coin</td>
            <td>Price</td>
            <td>Change</td>
            <td>24h Volume</td>
          </tr>
        </thead>
        <tbody>
          {searchCoin().map((element, index) => (
            <CoinRow coin={element} key={element.id} index={index + 1} />
          ))}
        </tbody>
      </table>
      {searchCoin().length === 0 && (
        <p className='text-center text-light'>Without results</p>
      )}
    </>
  );
};

export default TableCoins;
