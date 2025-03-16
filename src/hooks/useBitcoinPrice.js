import { useState, useEffect } from 'react';
import apiEndpoints from '../config/apiConfig';

export function useBitcoinPrice(refreshInterval = 50000) {
    const [price, setPrice] = useState(null);

    useEffect(() => {
    const fetchPrice = async () => {
        try {
        const res = await fetch(apiEndpoints.bitcoinPrice);
        const json = await res.json();
        setPrice(parseFloat(json.data.priceUsd).toFixed(2));
        } catch (error) {
        console.error('Error fetching real-time Bitcoin price:', error);
        }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, refreshInterval);
    return () => clearInterval(interval);
    }, [refreshInterval]);

    return price;
}
