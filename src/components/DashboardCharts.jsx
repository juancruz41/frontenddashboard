import React from 'react';
import BitcoinHistoricalChart from './BitcoinHistoricalChart'; 

export default function DashboardCharts() {
    const now = Date.now();
    const weekAgo = now - (7 * 24 * 60 * 60 * 1000); 
    const monthAgo = now - (30 * 24 * 60 * 60 * 1000);
    const yearAgo = now - (365 * 24 * 60 * 60 * 1000); 

return (
    <>
        <BitcoinHistoricalChart title="Precio Bitcoin - Última Semana" startDate={weekAgo} />
        <BitcoinHistoricalChart title="Precio Bitcoin - Último Mes" startDate={monthAgo} />
        <BitcoinHistoricalChart title="Precio Bitcoin - Último Año" startDate={yearAgo} />
    </>
);
}
