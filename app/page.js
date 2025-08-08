'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiOutlineDiscord } from 'react-icons/ai';
import Image from 'next/image';

export default function Home() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'SMP', href: '#smp' },
  ];

  const serverFeatures = [
    {
      id: 'smp',
      title: 'Survival Multiplayer',
      description: 'Experience the ultimate survival experience with our custom SMP world. Team up with friends, build your base, and thrive in a persistent world with custom features and an active community.',
      icon: '/survival.png',
      cta: 'Join SMP',
      ctaLink: '/smp',
      image: '/smp-preview.jpg',
      features: [
        'Custom world generation',
        'Player-run economy',
        'Weekly events',
        'Community builds',
        'Custom items and recipes'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="LowkeyNetwork Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center
            ">
              <a
                href="https://discord.gg/SDgrhQZa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <AiOutlineDiscord className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block">Welcome to</span>
              <span className="block text-indigo-400">LowkeyNetwork</span>
            </motion.h1>
            <motion.p 
              className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A growing Minecraft network with amazing features and an awesome community.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/smp"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors"
              >
                Join SMP
              </Link>
            </motion.div>
          </div>

          {/* Server Features Section */}
          <div className="mt-20 space-y-32">
            {serverFeatures.map((feature, index) => (
              <section 
                key={feature.id}
                id={feature.id}
                className={`scroll-mt-20 ${index % 2 === 0 ? 'bg-gray-900/50' : ''} py-16`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className={`lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden border-2 border-gray-700"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="relative w-full h-full">
                            <Image
                              src={feature.icon}
                              alt={feature.title}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="lg:w-1/2">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                          {feature.title}
                        </h2>
                        <p className="text-lg text-gray-300 mb-6">
                          {feature.description}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                          {feature.features.map((item, i) => (
                            <li key={i} className="flex items-center text-gray-300">
                              <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={feature.ctaLink}
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                        >
                          {feature.cta}
                          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* About Section */}
          <div id="about" className="mt-32">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-white mb-6">
                  About LowkeyNetwork
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  We&apos;re a passionate team of Minecraft enthusiasts dedicated to creating the best gaming experience for our community. Our SMP server is just the beginning of what we have planned for the LowkeyNetwork.
                </p>
                <p className="text-lg text-gray-300">
                  Join us today and be part of something special as we grow and expand our network with new and exciting features!
                </p>
              </div>
              <div className="mt-12 lg:mt-0">
                <div className="relative h-64 lg:h-96">
                  <Image
                    src="/logo.png"
                    alt="LowkeyNetwork"
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-24">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="LowkeyNetwork Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-white">LowkeyNetwork</span>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} LowkeyNetwork. All rights reserved. BY-NC-ND
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
