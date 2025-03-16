import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useBitcoinHistory } from '../hooks/useBitcoinHistory';

export default function BitcoinHistoricalChart({ title, startDate }) {
const data = useBitcoinHistory(startDate);

return (
    <Card sx={{ mt: 4 }}>
        <CardContent>
        <Typography variant="h6">{title}</Typography>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3f51b5" strokeWidth={3} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    </CardContent>
    </Card>
);
}
