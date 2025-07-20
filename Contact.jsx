
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@othmane.dev',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call us during business hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Remote Worldwide',
      description: 'Working with clients globally'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '< 24 hours',
      description: 'We respond quickly'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Your message would be sent successfully.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-16 min-h-screen">
      <Helmet>
        <title>Contact - Othmane Digital Services</title>
        <meta name="description" content="Get in touch with Othmane for your digital service needs. Quick response time and professional consultation available." />
      </Helmet>

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your project? Let's discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-600/20"
            >
              <div className="flex items-center mb-8">
                <MessageCircle className="w-8 h-8 text-purple-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Send a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-8 border border-indigo-500/20">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <Globe className="w-8 h-8 text-indigo-400 mr-3" />
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-purple-300 font-medium mb-1">{info.value}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Response Promise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-lg rounded-3xl p-8 border border-green-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Quick Response Guarantee</h3>
                <p className="text-gray-300 mb-4">
                  We understand that time is valuable. That's why we guarantee a response 
                  to all inquiries within 24 hours, often much sooner.
                </p>
                <div className="flex items-center text-green-400">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Average response time: 4 hours</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
