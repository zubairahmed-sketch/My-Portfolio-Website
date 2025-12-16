import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a <span className="text-primary font-semibold">Full Stack Web Developer & AI/ML enthusiast</span> specializing in modern web applications and intelligent solutions. With a passion for clean code and user experience, I help businesses turn ideas into smart digital products.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My journey spans 3 years of experience with <span className="text-primary font-semibold">Data Structures & Java</span> programming, 2 years of <span className="text-primary font-semibold">Full Stack Web Development</span>, and 1 year specializing in <span className="text-primary font-semibold">AI Chatbot Development</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Whether it's a custom website, OpenAI-powered chatbot, or data-driven application, I deliver innovative, reliable, and future-ready solutions tailored to your needs.
            </p>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border border-primary/30 hover:border-primary/60 transition-all"
            >
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <p className="text-gray-300">Years of Experience</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border border-primary/30 hover:border-primary/60 transition-all"
            >
              <div className="text-4xl font-bold text-secondary mb-2">10+</div>
              <p className="text-gray-300">Projects Completed</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border border-primary/30 hover:border-primary/60 transition-all"
            >
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-gray-300">Technologies Mastered</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border border-primary/30 hover:border-primary/60 transition-all"
            >
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
