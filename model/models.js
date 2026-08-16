const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: true 
    },
    category: { 
      type: String, 
      required: true 
    },
  coverImage: { 
    type: String, 
    required: true 
  },
     projectOverview: { 
    type: String 
  },
  designDirection: [{ 
    type: String 
  }],
 moodBoardImages: [{ 
     type: String 
   }],
   breakdownImages: [{ 
     type: String 
   }], 
   toolsUsed: [{ 
     type: String 
   }],
   createdAt: { 
     type: Date, 
     default: Date.now 
   }
 });
 
 module.exports = mongoose.model('Project', projectSchema);