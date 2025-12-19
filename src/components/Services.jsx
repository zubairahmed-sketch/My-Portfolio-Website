import React, { useState, useEffect } from 'react'
import { FiArrowRight, FiGlobe } from 'react-icons/fi'
import { SiOpenai } from 'react-icons/si'
import { motion } from 'framer-motion'

const Services = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch('https://portfolio-backend-production-4eaa.up.railway.app/api/services')
      const data = await response.json()
      if (data.success) {
        setServices(data.data)
      }
    } catch (error) {
      console.error('Failed to fetch services:', error)
    } finally {
      setLoading(false)
    }
  }

  // Fallback services if database is empty
  const defaultServices = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'Modern, scalable websites using React, Next.js, Node.js & MongoDB',
      icon: FiGlobe,
      color: 'from-primary to-blue-500',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      link: 'https://www.fiverr.com/s/2KBkYQk'
    },
    {
      id: 2,
      title: 'AI Chatbot Development',
      description: 'Custom ChatGPT-powered chatbots & AI software solutions',
      icon: SiOpenai,
      color: 'from-secondary to-pink-500',
      technologies: ['OpenAI', 'LangChain', 'RAG', 'Dialogflow', 'Python'],
      link: 'https://www.fiverr.com/s/42wQPXm'
    },
    {
      id: 3,
      title: 'Knowledge Base Chatbot',
      description: 'AI-powered chatbots trained on your documents and FAQs',
      icon: SiOpenai,
      color: 'from-yellow-500 to-orange-500',
      technologies: ['RAG', 'LangChain', 'Vector DB', 'OpenAI', 'React'],
      link: 'https://www.fiverr.com/s/pdb5Djy'
    },
    {
      id: 4,
      title: 'Java & Backend Development',
      description: 'Robust backend solutions with Java, data structures & databases',
      icon: FiGlobe,
      color: 'from-green-500 to-emerald-500',
      technologies: ['Java', 'Data Structures', 'JDBC', 'OOP', 'PostgreSQL'],
      link: '#contact'
    }
  ]

  const displayServices = services

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            I offer comprehensive solutions to bring your digital ideas to life with cutting-edge technologies
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {displayServices.map((service) => {
            const isEmoji = typeof service.icon === 'string'
            const IconComponent = typeof service.icon !== 'string' ? (service.icon || FiGlobe) : null
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group p-8 bg-gradient-to-br from-dark/50 to-dark/20 rounded-xl border border-primary/30 hover:border-primary/60 transition-all overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} mb-6`}
                  >
                    {isEmoji ? (
                      <span className="text-2xl">{service.icon}</span>
                    ) : (
                      <IconComponent size={28} className="text-white" />
                    )}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-sm text-primary font-semibold mb-2">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {(service.technologies || service.tech || []).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/30 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                  >
                    Learn More <FiArrowRight />
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
