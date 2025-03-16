import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useBitcoinPrice } from '../hooks/useBitcoinPrice';

export default function BitcoinChart() {
  const price = useBitcoinPrice(50000); // 50s

  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h6">Bitcoin (Tiempo Real)</Typography>
        <Typography variant="h4">${price ? price : 'Cargando...'}</Typography>
      </CardContent>
    </Card>
  );
}
