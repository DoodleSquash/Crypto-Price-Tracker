import CryptoTable from './components/cryptoTable';
import CryptoUpdater from './components/cryptoUpdater';

function App() {
  return (
    <div className="App">
      <h1>Crypto Price Tracker</h1>
      <CryptoUpdater /> {/* Invisible updater */}
      <CryptoTable /> {/* Visible table */}
    </div>
  );
}

export default App;
