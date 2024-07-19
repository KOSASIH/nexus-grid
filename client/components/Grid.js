import React, { useState, useEffect } from 'react';
import { useDraggable } from '@use-gesture/react';
import { AnimatePresence } from 'framer-motion';
import { GridItem } from './GridItem';
import { GridTemplateBuilder } from './GridTemplateBuilder';
import { GridSettings } from './GridSettings';

const Grid = () => {
  const [gridItems, setGridItems] = useState([]);
  const [gridTemplate, setGridTemplate] = useState(null);
  const [gridSettings, setGridSettings] = useState({
    breakpoints: [
      { width: 1200, columns: 12 },
      { width: 992, columns: 10 },
      { width: 768, columns: 8 },
      { width: 576, columns: 6 },
    ],
    theme: {
      primaryColor: '#333',
      secondaryColor: '#666',
    },
  });

  useEffect(() => {
    fetch('/api/grid-layouts')
      .then(response => response.json())
      .then(data => setGridItems(data));
  }, []);

  const handleGridItemAdd = (item) => {
    setGridItems([...gridItems, item]);
  };

  const handleGridItemUpdate = (item) => {
    setGridItems(gridItems.map((i) => (i.id === item.id ? item : i)));
  };

  const handleGridItemRemove = (item) => {
    setGridItems(gridItems.filter((i) => i.id !== item.id));
  };

  const handleGridTemplateChange = (template) => {
    setGridTemplate(template);
  };

  const handleGridSettingsChange = (settings) => {
    setGridSettings(settings);
  };

  return (
    <div className="grid-container">
      <GridTemplateBuilder
        gridTemplate={gridTemplate}
        onGridTemplateChange={handleGridTemplateChange}
      />
      <GridSettings
        gridSettings={gridSettings}
        onGridSettingsChange={handleGridSettingsChange}
      />
      <AnimatePresence>
        {gridItems.map((item) => (
          <GridItem
            key={item.id}
            item={item}
            onItemUpdate={handleGridItemUpdate}
            onItemRemove={handleGridItemRemove}
          />
        ))}
      </AnimatePresence>
      <button onClick={() => handleGridItemAdd({ id: Date.now(), content: 'New Item' })}>
        Add Item
      </button>
    </div>
  );
};

export default Grid;
