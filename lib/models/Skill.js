const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ['Frontend', 'Backend', 'Databases', 'AI & ML', 'Languages', 'Other'],
    },
    skills: {
      type: [String],
      required: true,
      default: [],
    },
    proficiency: {
      type: Number,
      min: 1,
      max: 5,
      default: 3,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.models.Skill || mongoose.model('Skill', skillSchema)
