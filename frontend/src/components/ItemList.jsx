import React from 'react';

const ItemList = ({ items, onEdit, onDelete }) => {
  return (
    <div>
      <h3>Items</h3>
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            {/* EXTENDING THE PROJECT: Added Price column */}
            <th>Price</th>
            <th>status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              {/* EXTENDING THE PROJECT: Showing Price */}
              <td>${item.price}</td>
              <td>{item.status}</td>
              <td>
                <button onClick={() => onEdit(item)}>Edit</button>
                <button onClick={() => onDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
