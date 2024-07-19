import React, { useState } from 'react';
import { useDraggable } from '@use-gesture/react';
import { GridTemplateItem } from './GridTemplateItem';

const GridTemplateBuilder = ({ gridTemplate, onGridTemplateChange }) => {
  const [templateItems, setTemplateItems] = useState(gridTemplate.items);

  const handleTemplateItemAdd = (item) => {
    setTemplateItems([...templateItems, item]);
  };

  const handleTemplateItemUpdate = (item) => {
    setTemplateItems(templateItems.map((i) => (i.id === item.id? item : i)));
  };

  const handleTemplateItemRemove = (item) => {
    setTemplateItems(templateItems.filter((i) => i.id!== item.id));
  };

  const handleGridTemplateChange = () => {
    onGridTemplateChange({ items: templateItems });
  };

  return (
    <div className="grid-template-builder">
      {templateItems.map((item) => (
        <GridTemplateItem
          key={item.id}
          item={item}
          onItemUpdate={handleTemplateItemUpdate}
          onItemRemove={handleTemplateItemRemove}
        />
      ))}
      <button onClick={() => handleTemplateItemAdd({ id: Date.now(), content: 'New Item' })}>
        Add Item
      </button>
      <button onClick={handleGridTemplateChange}>Save Template</button>
    </div>
  );
};

export default GridTemplateBuilder;
