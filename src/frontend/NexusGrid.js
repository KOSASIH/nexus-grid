// NexusGrid.js
import React, { useState, useEffect } from 'react';
import { Grid, GridItem } from '@material-ui/core';
import axios from 'axios';

const NexusGrid = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get('https://api.example.com/data');
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <GridItem key={index} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
          </Card>
        </GridItem>
      ))}
    </Grid>
  );
};

export default NexusGrid;
