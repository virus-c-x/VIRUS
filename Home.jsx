import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Shield, Zap, Lock, Star, Smartphone, Globe, Headphones, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const guarantees = [
    {
      icon: Shield,
      title: 'Trust',
      description: 'Reliable and transparent service you can count on'
    },
    {
      icon: Zap,
      title: 'Speed',
      description: 'Lightning-fast delivery and response times'
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Your data and privacy are our top priority'
    },
    {
      icon: Star,
      title: 'Quality',
      description: 'Premium results that exceed expectations'
    }
  ];

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technology'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications'
    },
    {
      icon: Headphones,
      title: 'Digital Consulting',
      description: 'Strategic guidance for your digital transformation'
    }
  ];

  const paymentMethods = [
    { name: 'Visa', logo: '💳' },
    { name: 'Mastercard', logo: '💳' },
    { name: 'PayPal', logo: '💰' },
    { name: 'Stripe', logo: '💎' },
    { name: 'Bank Transfer', logo: '🏦' },
    { name: 'Crypto', logo: '₿' }
  ];

  return (
    <div className="pt-16 bg-black text-white">
      <Helmet>
        <title>Othmane - Professional Digital Services</title>
        <meta name="description" content="Professional digital services with guaranteed trust, speed, security, and quality. Expert web development, mobile apps, and digital consulting." />
      </Helmet>

      {/* Hero Section with Logo and Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark-purple to-black">
        <div className="absolute inset-0 bg-dark-purple/50" />
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img   
              className="w-32 h-32 mx-auto rounded-full border-4 border-purple shadow-2xl"
              alt="Othmane Logo" src="https://images.unsplash.com/photo-1694208590719-96139a8f2a32" />
          </motion.div>

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <img   
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
              alt="Professional banner showcasing digital services" src="https://images.unsplash.com/photo-1634693148975-362d570ca495" />
          </motion.div>

          {/* Animated line under banner */}
          <motion.div
            className="h-1 bg-gradient-to-r from-purple to-dark-purple rounded-full max-w-4xl mx-auto mb-12"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* Moving Line with Name and Picture */}
          <div className="relative mb-16 overflow-hidden py-4">
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="flex items-center justify-center gap-8"
            >
              <span className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple via-fuchsia-500 to-purple bg-clip-text text-transparent">
                Othmane
              </span>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                <img   class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-purple shadow-2xl" alt="A picture of Othmane" src="https://images.unsplash.com/photo-1677563231818-7d4e2c7b7c2c" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text-purple">
              About Me
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
              I'm a passionate digital professional dedicated to creating exceptional experiences. 
              With years of expertise in web development, mobile applications, and digital consulting, 
              I transform ideas into powerful digital solutions that drive success.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <img 
                className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl"
                alt="A modern and creative workspace" src="https://images.unsplash.com/photo-1542304807-c7d38f96e2d2" />
            </motion.div>
            <Link to="/pricing">
              <Button
                className="bg-purple hover:bg-purple/80 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Our Products <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 px-4 bg-dark-purple/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-purple"
          >
            What You Get
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-dark-purple/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 border border-purple/20 hover:border-purple/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <guarantee.icon className="w-12 h-12 text-purple mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{guarantee.title}</h3>
                <p className="text-gray-300">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-purple"
          >
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-dark-purple/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 border border-purple/20 hover:border-purple/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <service.icon className="w-16 h-16 text-purple mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 text-lg">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20 px-4 bg-dark-purple/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-purple"
          >
            Payment Methods
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/20 hover:border-purple/40 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="text-4xl mb-3">{method.logo}</div>
                <p className="text-white font-medium">{method.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;