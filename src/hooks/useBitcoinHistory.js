import { useState, useEffect } from 'react';
import apiEndpoints from '../config/apiConfig';

export function useBitcoinHistory(startDate) {
    const [history, setHistory] = useState([]);

    useEffect(() => {
    const fetchHistory = async () => {
        try {
        const now = Date.now();
        const url = `${apiEndpoints.bitcoinHistory}?interval=d1&start=${startDate}&end=${now}`;
        const res = await fetch(url);
        const json = await res.json();

        const formattedData = json.data.map((item) => ({
            time: new Date(item.time).toLocaleDateString(),
            value: parseFloat(item.priceUsd),
        }));

        setHistory(formattedData);
        } catch (error) {
        console.error('Error fetching historical Bitcoin data:', error);
        }
    };

    fetchHistory();
    }, [startDate]);

return history;
}
