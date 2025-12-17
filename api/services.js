const dbConnect = require('../lib/mongodb.js')
const Service = require('../lib/models/Service.js')

module.exports = async function handler(req, res) {
  await dbConnect()

  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const services = await Service.find({}).sort({ createdAt: -1 })
        res.status(200).json({ success: true, data: services })
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })
      }
      break

    case 'POST':
      try {
        const service = await Service.create(req.body)
        res.status(201).json({ success: true, data: service })
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })
      }
      break

    default:
      res.status(400).json({ success: false })
  }
}
