// Visualization.js
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Visualization = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
    <LineChart width={500} height={300} data={data}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
    </LineChart>
  );
};

export default Visualization;
