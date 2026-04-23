import React, { useState, useEffect } from 'react';

const ItemForm = ({ onSave, currentItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '', // EXTENDING THE PROJECT: Initialize new field
    status: 'Active'
  });

  useEffect(() => {
    if (currentItem) {
      setFormData(currentItem);
    } else {
      setFormData({ name: '', description: '', price: '' ,status: 'Active'});
    }
  }, [currentItem]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ name: '', description: '', price: '', status: 'Active' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>{currentItem ? 'Edit Item' : 'Add New Item'}</h3>
      <div>
        <label>Name: </label>
        <input name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Description: </label>
        <input name="description" value={formData.description} onChange={handleChange} required />
      </div>
      
      {/* EXTENDING THE PROJECT: Added input for 'Price' */}
      <div>
        <label>Price: </label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
      </div>
      <div>
        <label>Status: </label>
        <select name="status" value={formData.status} onChange={handleChange} required>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <button type="submit">{currentItem ? 'Update' : 'Add'} Item</button>
    </form>
  );
};

export default ItemForm;
