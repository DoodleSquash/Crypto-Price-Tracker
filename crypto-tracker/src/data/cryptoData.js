import bitcoin from '../assets/bitcoin-btc-logo.png';
import ethereum from '../assets/ethereum-eth-logo.png';
import cardano from '../assets/cardano-ada-logo.png'; 
import ripple from '../assets/xrp.png';
import litecoin from '../assets/litecoin-ltc-logo.png';
import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import four from '../assets/4.jpg';
import five from '../assets/5.jpg';

const upTrendChart = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ascending_chart.svg/120px-Ascending_chart.svg.png';
const downTrendChart = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Descending_chart.svg/120px-Descending_chart.svg.png';



const cryptoData = [
    {
      id: 1,
      logo: bitcoin,
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 50000,
      change1h: 0.5,
      change24h: -1.2,
      change7d: 5.4,
      marketCap: 1000000000,
      volume24h: 50000000,
      circulatingSupply: 19000000,
      maxSupply: 21000000,
      chartImage: one // Bitcoin
    },
    {
      id: 2,
      logo: ethereum,
      name: 'Ethereum',
      symbol: 'ETH',
      price: 3500,
      change1h: -0.3,
      change24h: 2.4,
      change7d: 3.9,
      marketCap: 400000000,
      volume24h: 20000000,
      circulatingSupply: 115000000,
      maxSupply: 120000000,
      chartImage:  four

    },
    {
      id: 3,
      logo: cardano,
      name: 'Cardano',
      symbol: 'ADA',
      price: 2.5,
      change1h: 0.1,
      change24h: -0.5,
      change7d: 1.2,
      marketCap: 800000000,
      volume24h: 10000000,
      circulatingSupply: 300000000,
      maxSupply: 450000000,
      chartImage: three
    },
    {
      id: 4,
      logo: ripple,
      name: 'Ripple',
      symbol: 'XRP',
      price: 1.2,
      change1h: 0.3,
      change24h: -1.5,
      change7d: 4.1,
      marketCap: 700000000,
      volume24h: 15000000,
      circulatingSupply: 450000000,
      maxSupply: 1000000000,
      chartImage: four
    },
    {
      id: 5,
      logo: litecoin,
      name: 'Litecoin',
      symbol: 'LTC',
      price: 150,
      change1h: 0.4,
      change24h: 1.0,
      change7d: -2.3,
      marketCap: 120000000,
      volume24h: 25000000,
      circulatingSupply: 70000000,
      maxSupply: 84000000,
      chartImage: five
    }
  ];
  
  export default cryptoData; 