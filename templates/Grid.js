import React, { useState, useEffect } from "react";
import axios from "axios";

function Grid() {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    axios.get("/api/grid")
      .then(response => {
        setGridData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleCreateGrid = (data) => {
    axios.post("/api/grid", data)
      .then(response => {
        setGridData([...gridData, response.data]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Nexus Grid</h1>
      <ul>
        {gridData.map((grid, index) => (
          <li key={index}>{grid.name}</li>
        ))}
      </ul>
      <form onSubmit={(event) => {
        event.preventDefault();
        const data = {
          name: event.target.name.value,
          description: event.target.description.value,
          data: event.target.data.value,
        };
        handleCreateGrid(data);
      }}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="description" placeholder="Description" />
        <textarea name="data" placeholder="Data" />
        <button type="submit">Create Grid</button>
      </form>
    </div>
  );
}

export default Grid;
