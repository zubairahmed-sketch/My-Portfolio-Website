import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Restaurant Management System',
      description: 'A comprehensive Java desktop application for managing restaurant operations including inventory, orders, and staff management with MySQL database.',
      image: '🍽️',
      tech: ['Java', 'Swing', 'JDBC', 'MySQL'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Wapda Management System',
      description: 'Java desktop application for utility management handling electricity distribution, billing, and customer services with robust MySQL backend.',
      image: '⚡',
      tech: ['Java', 'Swing', 'JDBC', 'MySQL'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Civic Eye Issue Reporting',
      description: 'Flutter mobile application for community-driven civic issue reporting and tracking with Supabase backend for real-time updates.',
      image: '👁️',
      tech: ['Flutter', 'Dart', 'Supabase', 'Maps API'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Prayer Posture Validator',
      description: 'AI-powered application using machine learning to validate and provide feedback on prayer postures.',
      image: '🤖',
      tech: ['Python', 'TensorFlow', 'React', 'OpenCV'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'AI Knowledge Base Chatbot',
      description: 'Custom ChatGPT-powered chatbot trained on client documents and FAQs for intelligent customer support.',
      image: '💬',
      tech: ['OpenAI', 'LangChain', 'RAG', 'Python', 'React'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, and secure payment integration.',
      image: '🛒',
      tech: ['Next.js', 'Stripe', 'MongoDB', 'Supabase'],
      link: '#',
      github: '#'
    }
  ]

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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Showcase of my best work across various technologies and domains
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl border border-primary/30 hover:border-primary/60 transition-all bg-gradient-to-br from-dark/50 to-dark/20"
            >
              {/* Project Card */}
              <div className="p-6 h-full flex flex-col">
                {/* Icon/Image */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/30 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.link}
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold text-sm"
                  >
                    <FiExternalLink size={16} />
                    Live
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold text-sm"
                  >
                    <FiGithub size={16} />
                    Code
                  </motion.a>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
