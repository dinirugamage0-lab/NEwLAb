import React, { useState, useEffect } from 'react';
import { getItems, createItem, updateItem, deleteItem } from './api';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error('Error loading items:', error);
    }
  };

  const handleSave = async (formData) => {
    try {
      if (editingItem) {
        await updateItem(editingItem._id, formData);
        setEditingItem(null);
      } else {
        await createItem(formData);
      }
      loadItems();
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await deleteItem(id);
        loadItems();
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Item Manager (MERN Practice)</h1>
      <ItemForm onSave={handleSave} currentItem={editingItem} />
      <ItemList items={items} onEdit={setEditingItem} onDelete={handleDelete} />
    </div>
  );
}

export default App;
