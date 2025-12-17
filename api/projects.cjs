const dbConnect = require('../lib/mongodb.cjs')
const Project = require('../lib/models/Project.cjs')

module.exports = async function handler(req, res) {
  await dbConnect()

  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const projects = await Project.find({}).sort({ createdAt: -1 })
        res.status(200).json({ success: true, data: projects })
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })
      }
      break

    case 'POST':
      try {
        const project = await Project.create(req.body)
        res.status(201).json({ success: true, data: project })
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })
      }
      break

    default:
      res.status(400).json({ success: false })
  }
}
