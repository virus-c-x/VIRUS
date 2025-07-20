import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Pricing = () => {
  const { toast } = useToast();

  const products = [
    {
      name: 'Cybernetic Headset',
      price: '$299',
      image: 'futuristic VR headset',
      imageAlt: 'A sleek futuristic VR headset with glowing purple accents'
    },
    {
      name: 'Quantum Processor',
      price: '$599',
      image: 'glowing computer processor chip',
      imageAlt: 'A powerful computer processor chip with glowing purple circuits'
    },
    {
      name: 'Neural Interface',
      price: '$1299',
      image: 'advanced brain-computer interface device',
      imageAlt: 'An advanced brain-computer interface device with holographic displays'
    },
    {
        name: 'Gamer Chair',
        price: '$450',
        image: 'ergonomic gaming chair purple and black',
        imageAlt: 'A purple and black ergonomic gaming chair with neon lights'
    },
    {
        name: 'Mechanical Keyboard',
        price: '$180',
        image: 'backlit mechanical keyboard with purple keys',
        imageAlt: 'A backlit mechanical keyboard with vibrant purple keys'
    },
    {
        name: 'Curved Monitor',
        price: '$750',
        image: 'ultrawide curved gaming monitor displaying a space scene',
        imageAlt: 'An ultrawide curved gaming monitor showing a vibrant nebula'
    }
  ];

  const handleAddToCart = (productName) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `${productName} would be added to your cart.`,
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-black text-white">
      <Helmet>
        <title>Products - Othmane Digital Services</title>
        <meta name="description" content="Explore our premium collection of digital and physical tech products. High-quality gear for professionals and enthusiasts." />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-purple">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Discover our collection of high-quality products, crafted with precision and care.
            </p>
          </motion.div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-dark-purple/50 to-black/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple/20 group card-hover"
              >
                <div className="relative">
                  <img  
                    class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={product.imageAlt} src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-3xl font-bold gradient-text-purple mb-6">{product.price}</p>
                  
                  <Button
                    onClick={() => handleAddToCart(product.name)}
                    className="w-full py-3 text-lg font-semibold rounded-xl bg-purple hover:bg-purple/80 text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;