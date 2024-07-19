import React, { useState } from 'react';
import { useDraggable } from '@use-gesture/react';
import { motion } from 'framer-motion';
import { ContextMenu } from './ContextMenu';

const GridItem = ({ item, onItemUpdate, onItemRemove }) => {
  const [isDragging, setDragging] = useState(false);
  const [contextMenuOpen, setContextMenuOpen] = useState(false);

  const { x, y } = useDraggable({
    onDragStart: () => setDragging(true),
    onDragEnd: () => setDragging(false),
  });

  const handleContextMenuOpen = () => {
    setContextMenuOpen(true);
  };

  const handleContextMenuClose = () => {
    setContextMenuOpen(false);
  };

  const handleEditItem = () => {
    // Implement edit item logic
  };

  const handleDeleteItem = () => {
    onItemRemove(item);
  };

  return (
    <motion.div
      className="grid-item"
      initial={{ x: 0, y: 0 }}
      animate={{ x, y }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid-item-content">{item.content}</div>
      <ContextMenu
        isOpen={contextMenuOpen}
        onClose={handleContextMenuClose}
      >
        <button onClick={handleEditItem}>Edit</button>
        <button onClick={handleDeleteItem}>Delete</button>
      </ContextMenu>
      {isDragging && (
        <div className="grid-item-resize-handle" />
      )}
    </motion.div>
  );
};

export default GridItem;
