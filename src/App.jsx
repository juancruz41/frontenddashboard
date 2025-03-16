import React from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MetricsList from './components/MetricsList';
import AddMetricForm from './components/AddMetricForm';
import BitcoinChart from './components/BitcoinCharts';
import BitcoinHistoricalChart from './components/BitcoinHistoricalChart';


const theme = createTheme({ palette: { mode: 'light' } });

export default function App() {
  const now = Date.now();
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
  const monthAgo = now - 30 * 24 * 60 * 60 * 1000;
  const yearAgo = now - 365 * 24 * 60 * 60 * 1000;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h4" gutterBottom>Dashboard de Métricas</Typography>
        <AddMetricForm />
        <MetricsList />
        <BitcoinChart />
        <BitcoinHistoricalChart title="Bitcoin - Última Semana" startDate={weekAgo} />
        <BitcoinHistoricalChart title="Bitcoin - Último Mes" startDate={monthAgo} />
        <BitcoinHistoricalChart title="Bitcoin - Último Año" startDate={yearAgo} />
      </Container>
    </ThemeProvider>
  );
}
