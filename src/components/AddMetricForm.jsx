import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import { API_URL } from '../api';

function AddMetricForm() {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API_URL}/metrics`, { name, value });
    setName('');
    setValue('');
    window.location.reload(); 
    ;

    return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
        <TextField
        label="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        sx={{ mr: 2 }}
        />
    <TextField
        label="Valor"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        sx={{ mr: 2 }}
    />
    <Button type="submit" variant="contained">
        Agregar
    </Button>
    </Box>
    );
}
}
export default AddMetricForm;