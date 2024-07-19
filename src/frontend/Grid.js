// Grid.js
import React from 'react';
import { Grid, GridItem } from '@material-ui/core';

const GridComponent = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      setData(data);
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

export default GridComponent;
