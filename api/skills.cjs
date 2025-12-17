const dbConnect = require('../lib/mongodb.cjs')
const Skill = require('../lib/models/Skill.cjs')

module.exports = async function handler(req, res) {
  await dbConnect()

  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const skills = await Skill.find({}).sort({ createdAt: -1 })
        res.status(200).json({ success: true, data: skills })
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })
      }
      break

    case 'POST':
      try {
        const skill = await Skill.create(req.body)
        res.status(201).json({ success: true, data: skill })
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })
      }
      break

    default:
      res.status(400).json({ success: false })
  }
}
