import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AssignmentList() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/assignments');
        setAssignments(response.data);
      } catch (error) {
        console.error('Error fetching assignments:', error);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <div>
      <h2>Assignments</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Student</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map(assignment => (
            <tr key={assignment._id}>
              <td>{assignment.title}</td>
              <td>{assignment.studentName}</td>
              <td>{new Date(assignment.dueDate).toLocaleDateString()}</td>
              <td>{assignment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AssignmentList;
