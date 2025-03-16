import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

function MetricsList() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const mockData = [
      { id: 1, name: 'Usuarios activos', value: 150 },
      { id: 2, name: 'Ventas hoy', value: 45 },
      { id: 3, name: 'Visitas web', value: 1240 }
    ];
    setMetrics(mockData);
  }, []);

  return (
    <List>
      {metrics.map((metric) => (
        <React.Fragment key={metric.id}>
          <ListItem>
            <ListItemText primary={metric.name} secondary={`Valor: ${metric.value}`} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default MetricsList;
