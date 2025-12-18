import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSkills()
  }, [])

  const fetchSkills = async () => {
    try {
      const response = await fetch('https://portfolio-backend-production-4eaa.up.railway.app/api/skills')
      const data = await response.json()
      if (data.success) {
        setSkills(data.data)
      }
    } catch (error) {
      console.error('Failed to fetch skills:', error)
    } finally {
      setLoading(false)
    }
  }



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/30 hover:border-primary/60 transition-all"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {(category.skills || []).map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/30 hover:border-primary/60 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/30"
        >
          <h3 className="text-2xl font-bold mb-8">Expertise Level</h3>
          <div className="space-y-6">
            {[
              { skill: 'Full Stack Development', level: 95 },
              { skill: 'React & Next.js', level: 95 },
              { skill: 'AI Chatbot Development', level: 90 },
              { skill: 'Backend & APIs', level: 90 },
              { skill: 'Database Design', level: 85 }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{item.skill}</span>
                  <span className="text-primary">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 * idx }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
