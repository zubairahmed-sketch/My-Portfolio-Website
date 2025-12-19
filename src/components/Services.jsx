import React, { useState, useEffect } from 'react'
import { FiArrowRight } from 'react-icons/fi'
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
            return (
              <motion.div
                key={service._id || service.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group p-8 bg-gradient-to-br from-dark/50 to-dark/20 rounded-xl border border-primary/30 hover:border-primary/60 transition-all overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  {service.icon && (
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary mb-6"
                    >
                      <span className="text-2xl">{service.icon}</span>
                    </motion.div>
                  )}

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
