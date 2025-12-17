const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '⚙️',
    },
    technologies: {
      type: [String],
      default: [],
    },
    link: {
      type: String,
      default: '#',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.models.Service || mongoose.model('Service', serviceSchema)
