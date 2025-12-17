import React, { useState, useEffect } from 'react'
import { FiSend, FiMail, FiPhone } from 'react-icons/fi'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init({
        publicKey: 'DQLMUnlqWzW33KGlR',
        blockHeadless: false
      })
    } catch (error) {
      console.error('EmailJS initialization error:', error)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('') // Clear error when user starts typing
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Send email to you (admin)
      const adminEmailResult = await emailjs.send(
        'service_5ebynuj',
        'template_yghu34e',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'za0183625@gmail.com'
        }
      )

      if (adminEmailResult.status === 200) {
        // Send auto-reply to visitor
        try {
          await emailjs.send(
            'service_5ebynuj',
            'template_v51rv3f',
            {
              from_name: formData.name,
              email: formData.email,  // Use 'email' key instead
              subject: formData.subject
            }
          )
        } catch (autoReplyError) {
          console.warn('Auto-reply failed but main email sent:', autoReplyError)
          // Don't fail the entire submission if auto-reply fails
        }

        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      }
    } catch (err) {
      console.error('EmailJS Error:', err)
      console.error('Error message:', err.message)
      console.error('Error text:', err.text)
      console.error('Error status:', err.status)
      setError('Failed to send message. Please try again or contact directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help you build something amazing.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            <motion.a
              href="mailto:za0183625@gmail.com"
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 mb-8 p-4 rounded-lg border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all"
            >
              <div className="p-3 rounded-lg bg-primary/20">
                <FiMail size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">za0183625@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+923072523709"
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 mb-8 p-4 rounded-lg border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all"
            >
              <div className="p-3 rounded-lg bg-primary/20">
                <FiPhone size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-semibold">+92 3072523709</p>
              </div>
            </motion.a>

            {/* Quick Links */}
            <div className="mt-12">
              <h4 className="text-lg font-bold mb-6">Connect With Me</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/zubairahmed-sketch"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-lg border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all"
                  title="GitHub"
                >
                  <span className="text-primary font-semibold">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/zubair-ahmed-3285a8285"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-lg border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all"
                  title="LinkedIn"
                >
                  <span className="text-primary font-semibold">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://www.fiverr.com/s/BRZE53l"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-lg border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all"
                  title="Fiverr"
                >
                  <span className="text-primary font-semibold">Fiverr</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-primary/30 focus:border-primary/60 focus:outline-none transition-all placeholder-gray-500"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-primary/30 focus:border-primary/60 focus:outline-none transition-all placeholder-gray-500"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-primary/30 focus:border-primary/60 focus:outline-none transition-all placeholder-gray-500"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-primary/30 focus:border-primary/60 focus:outline-none transition-all placeholder-gray-500 resize-none"
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  loading
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'} <FiSend />
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center font-semibold"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center font-semibold"
                >
                  ✗ {error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
