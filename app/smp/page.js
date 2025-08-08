'use client'
import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Poppins } from 'next/font/google'
import { AiOutlineDiscord } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const Page = () => {
  const [loading, setLoading] = useState(true)
  const [showToast, setShowToast] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)
  const totalSlides = 6 // Number of slides (1-6.png and 5-6.webp)
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'SMP', href: '/smp' },
    { name: 'About', href: '#about' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  // Auto-scroll to the current slide
  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.children[0]?.offsetWidth + 24 // 24px is the gap (gap-6)
      if (slideWidth) {
        sliderRef.current.scrollTo({
          left: currentSlide * slideWidth,
          behavior: 'smooth'
        })
      }
    }
  }, [currentSlide])

  // Loading timer
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText('play.lowkeysmp.xyz')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const features = [
    {
      title: 'TPA and RTP',
      description: 'Convenient Teleportation.',
    },
    {
      title: 'Custom Enchants',
      description: 'Get to experience new minecraft content.',
    },
    {
      title: 'Auction House',
      description: 'Sell/buy things from players.',
    },
    {
      title: 'Admin Shop',
      description: 'Always in-stock with dynamic prices!',
    },
    {
      title: 'Voting',
      description: 'Get rewards in a couple of clicks.',
    },
    {
      title: 'Anti-cheat',
      description: 'Everyone is equal.',
    },
    {
      title: 'Player Economy',
      description: 'Everyone is a part of the server economy.',
    },
    {
      title: 'No P2W',
      description: 'No disadvantage if you dont have money.',
    },
    {
      title: 'Cracked Too!',
      description: 'Can Join without a Premium Minecraft account.',
    },
  ]

  const steps = [
    { num: '1', content: 'Open Up Your Minecraft Java Edition in a 1.21.1 Profile' },
    {
      num: '2',
      content: (
        <>
          Go To &quot;Multiplayer&quot; and click &quot;Add Server&quot; and type in the IP:
          <span className="font-bold text-white">lowkeysmp.xyz</span>.
          After, join the server
        </>
      )
    },
    {
      num: '3',
      content: 'Join The Server And Start Enjoying The LowKey Experience'
    },
  ]

  return (
    <div className={`${poppins.className} bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen`}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="LowkeyNetwork Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        link.name === 'SMP' 
                          ? 'text-white bg-gray-800' 
                          : 'text-gray-300 hover:text-white'
                      } transition-colors`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center">
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
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-sm text-gray-800 px-5 py-3 rounded-xl shadow-xl border border-gray-200 flex items-center space-x-3"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Copied IP: <span className="font-semibold text-indigo-600">play.lowkeysmp.xyz</span></span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <motion.div
              className="relative w-28 h-28"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              <Image
                src="/logo.png"
                alt="LowKey SMP Logo"
                width={112}
                height={112}
                className="w-full h-full object-contain drop-shadow-lg"
                priority
              />
            </motion.div>
            <motion.span
              className="mt-6 text-white/80 font-medium tracking-wide text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Loading...
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {!loading && (
          <div className="relative pt-16">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <motion.h1 
                    className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="block">LowKey</span>
                    <span className="block text-indigo-400">Survival SMP</span>
                  </motion.h1>
                  <motion.p 
                    className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Join our survival multiplayer world with custom features and an amazing community.
                  </motion.p>
                  <motion.div 
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <button
                      onClick={handleCopy}
                      className="w-full cursor-pointer sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Copy IP
                    </button>
                    <a
                      href="https://discord.gg/SDgrhQZa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Join Discord
                    </a>
                  </motion.div>
                </div>
              </div>
            </section>
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
              <div className="absolute inset-0 bg-[url('/bg.webp')] bg-cover bg-center transform scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-indigo-900/90" />

              <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                >
                  LowKey SMP
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
                >
                  A survival multiplayer experience like no other. Build, explore, and thrive in our custom world.
                </motion.p>
              </div>
            </section>

            {/* What is LowKey SMP? */}
            <section className="relative bg-gray-900/50 py-20 md:py-28 px-6 md:px-12 lg:px-24">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 mb-6">
                    What is LowKey SMP?
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                    Looking for an SMP that respects builders but still feeds raiders?
                    Welcome to LowKey SMP, where you can claim chunks to protect your base — but explosions are still fair game.
                    This isn't your average peaceful SMP. It's survival, economy, and chaos—balanced perfectly.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gray-900/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <motion.h2 
                    className="text-3xl font-extrabold text-white sm:text-4xl mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    Features
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Everything you need for the ultimate survival experience
                  </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors hover:shadow-lg hover:shadow-indigo-500/10"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Screenshots Slider */}
            <section className="relative bg-gray-900/70 py-16 md:py-20 px-6 md:px-12 lg:px-24">
              <div className="max-w-4xl mx-auto relative">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 mb-6">
                    Server Showcase
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
                </motion.div>

                <div className="relative">
                  {/* Left Arrow */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-200 hover:bg-indigo-600 transition-all duration-300 hover:scale-110 focus:outline-none cursor-pointer border border-gray-700"
                    aria-label="Previous slide"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div className="w-full aspect-video bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg mx-auto border border-gray-700">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full"
                      >
                        <img
                          src={`/${currentSlide + 1}${currentSlide >= 4 ? '.webp' : '.png'}`}
                          alt={`Screenshot ${currentSlide + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Right Arrow */}
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-200 hover:bg-indigo-600 transition-all duration-300 hover:scale-110 focus:outline-none cursor-pointer border border-gray-700"
                    aria-label="Next slide"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                  {[0, 1, 2, 3, 4, 5].map((dot) => (
                    <button
                      key={dot}
                      onClick={() => setCurrentSlide(dot)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === dot 
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 w-8' 
                          : 'bg-gray-700 w-3 hover:bg-gray-600'
                      }`}
                      aria-label={`Go to slide ${dot + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* How to Join */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900/90 py-20 md:py-28 px-6 md:px-12 lg:px-24 border-t border-b border-gray-800/50">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    How to Join
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
                </motion.div>

                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 pl-16 border border-gray-700 hover:border-indigo-500/50 hover:bg-gray-800/60 transition-all duration-300 shadow-lg"
                    >
                      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-full flex items-center justify-center text-lg shadow-md">
                        {step.num}
                      </div>
                      <p className="text-gray-200 text-lg font-medium ml-5">
                        {step.content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
              <div className="max-w-6xl mx-auto">
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h3 className="text-2xl font-bold mb-4">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                        LowKey SMP
                      </span>
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      Experience Minecraft like never before — Competitive and Strategic.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                  >
                    <Link
                      href="https://discord.gg/SDgrhQZa"
                      target="_blank"
                      className="inline-flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full font-medium transition-colors duration-300"
                    >
                      <AiOutlineDiscord className="text-xl" />
                      <span>Join our Discord</span>
                    </Link>
                  </motion.div>

                  <div className="border-t border-gray-800 pt-8 mt-12">
                    <p className="text-sm text-gray-500">
                      &copy; {new Date().getFullYear()} LowKey SMP. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Page
