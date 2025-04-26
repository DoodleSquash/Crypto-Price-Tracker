import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCryptoDataRandomly } from '../redux/cryptoSlice';

const CryptoUpdater = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateCryptoDataRandomly());
    }, 1500); // update every 1.5 seconds

    return () => clearInterval(interval); // cleanup when component unmounts
  }, [dispatch]);

  return null; // No UI, it only handles data updates
};

export default CryptoUpdater;
