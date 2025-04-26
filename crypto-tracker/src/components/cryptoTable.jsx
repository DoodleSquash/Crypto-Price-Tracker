import React from 'react';
import { useSelector } from 'react-redux';
import './CryptoTable.css'; // Assuming you have a CSS file for styling

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  return (
    <div className="crypto-table">
      {/* <h1>Crypto Price Tracker</h1> */}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id}>
              <td>{index + 1}</td>
              <td>
                <img src={asset.logo} alt={asset.name} />
              </td>
              <td>{asset.name}</td>
              <td>{asset.symbol}</td>
              <td>${asset.price.toLocaleString()}</td>
              <td className={asset.change1h >= 0 ? 'positive' : 'negative'}>
                {asset.change1h}%
              </td>
              <td className={asset.change24h >= 0 ? 'positive' : 'negative'}>
                {asset.change24h}%
              </td>
              <td className={asset.change7d >= 0 ? 'positive' : 'negative'}>
                {asset.change7d}%
              </td>
              <td>${asset.marketCap.toLocaleString()}</td>
              <td>${asset.volume24h.toLocaleString()}</td>
              <td>{asset.circulatingSupply.toLocaleString()}</td>
              <td>{asset.maxSupply ? asset.maxSupply.toLocaleString() : '∞'}</td>
              <td>
                <img src={asset.chartImage} alt="7d chart" width="100" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
