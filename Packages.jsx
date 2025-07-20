
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Package, Zap, Shield, Star, Globe, Smartphone, Code, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Packages = () => {
  const { toast } = useToast();

  const packages = [
    {
      icon: Globe,
      name: 'Web Starter Package',
      price: '$499',
      duration: '2-3 weeks',
      description: 'Complete website solution for small businesses',
      features: [
        '5-page responsive website',
        'Modern design & branding',
        'Contact form integration',
        'Basic SEO setup',
        'Mobile optimization',
        'Social media integration',
        '1 month free support'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      name: 'Mobile App Package',
      price: '$1299',
      duration: '4-6 weeks',
      description: 'Cross-platform mobile application',
      features: [
        'iOS & Android app',
        'Custom UI/UX design',
        'Backend integration',
        'Push notifications',
        'App store submission',
        'User authentication',
        '3 months support'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      name: 'E-commerce Package',
      price: '$899',
      duration: '3-4 weeks',
      description: 'Full-featured online store',
      features: [
        'Product catalog setup',
        'Shopping cart & checkout',
        'Payment gateway integration',
        'Inventory management',
        'Order tracking system',
        'Admin dashboard',
        '2 months support'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      name: 'Branding Package',
      price: '$399',
      duration: '1-2 weeks',
      description: 'Complete brand identity design',
      features: [
        'Logo design (3 concepts)',
        'Brand color palette',
        'Typography selection',
        'Business card design',
        'Letterhead template',
        'Social media templates',
        'Brand guidelines'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      name: 'Performance Package',
      price: '$299',
      duration: '1 week',
      description: 'Website optimization & speed boost',
      features: [
        'Performance audit',
        'Speed optimization',
        'SEO improvements',
        'Security hardening',
        'Database optimization',
        'CDN setup',
        'Monitoring setup'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      name: 'Maintenance Package',
      price: '$99',
      duration: 'monthly',
      description: 'Ongoing website care & updates',
      features: [
        'Regular backups',
        'Security updates',
        'Content updates',
        'Performance monitoring',
        'Bug fixes',
        'Monthly reports',
        '24/7 support'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const handleSelectPackage = (packageName) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `You selected the ${packageName}.`,
    });
  };

  return (
    <div className="pt-16 min-h-screen">
      <Helmet>
        <title>Service Packages - Othmane Digital Services</title>
        <meta name="description" content="Comprehensive service packages including web development, mobile apps, e-commerce, branding, and maintenance solutions." />
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
              Service Packages
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet your specific needs. 
              Each package includes everything you need to succeed.
            </p>
          </motion.div>

          {/* Package Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-600/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-6`}>
                  <pkg.icon className="w-8 h-8 text-white" />
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                      {pkg.price}
                    </span>
                    <span className="text-gray-400 ml-2">/ {pkg.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pkg.color} mr-3 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => handleSelectPackage(pkg.name)}
                  className={`w-full py-3 text-lg font-semibold rounded-xl bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white transition-all duration-300`}
                >
                  Choose Package
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Custom Package CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/20 max-w-4xl mx-auto">
              <Package className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Need a Custom Package?</h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Don't see exactly what you need? Let's create a custom package 
                tailored specifically to your requirements and budget.
              </p>
              <Button
                onClick={() => handleSelectPackage('Custom Package')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-4 text-xl font-semibold rounded-xl"
              >
                Create Custom Package
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
