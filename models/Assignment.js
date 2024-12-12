const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String, 
    required: true 
  },
  studentName: { 
    type: String, 
    required: true 
  },
  dueDate: { 
    type: Date, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['Pending', 'Submitted', 'Graded'],
    default: 'Pending'
  },
  grade: { 
    type: Number, 
    min: 0, 
    max: 100 
  }
}, { timestamps: true });

module.exports = mongoose.model('Assignment', AssignmentSchema);