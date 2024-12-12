import React, { useState } from 'react';
import axios from 'axios';

function AddAssignment({ onAdd }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    studentName: '',
    dueDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/assignments', formData);
      onAdd(response.data);
      setFormData({ title: '', description: '', studentName: '', dueDate: '' });
    } catch (error) {
      console.error('Error adding assignment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Assignment</h3>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="text"
        name="studentName"
        value={formData.studentName}
        onChange={handleChange}
        placeholder="Student Name"
        required
      />
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Assignment</button>
    </form>
  );
}

export default AddAssignment;