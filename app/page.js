'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Poppins } from 'next/font/google'
import { AiOutlineDiscord } from 'react-icons/ai'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const Page = () => {
  const [loading, setLoading] = useState(true)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText('lowkeysmp.xyz')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const features = [
    {
      title: 'TPA and RTP',
      description: 'Convenient Teleportation.',
      image: '/icons/tpa.png',
    },
    {
      title: 'Auction House',
      description: 'Sell/buy things from players.',
      image: '/icons/auction.png',
    },
    {
      title: 'Admin Shop',
      description: 'Always in-stock with dynamic prices!',
      image: '/icons/shop.png',
    },
    {
      title: 'Voting',
      description: 'Get rewards in a couple of clicks.',
      image: '/icons/vote.png',
    },
    {
      title: 'Anti-cheat',
      description: 'Everyone is equal.',
      image: '/icons/anticheat.png',
    },
    {
      title: 'Player Economy',
      description: 'Everyone is a part of the server economy.',
      image: '/icons/economy.png',
    },
    {
      title: 'Modded SMP',
      description: 'This is not your average SMP.',
      image: '/icons/modded.png',
    },
  ]

  const steps = [
    { num: '1', content: 'Open Up Your Launcher' },
    { 
      num: '2', 
      content: (
        <>
          Go To "Multiplayer" and click "Add Server" and type in the IP:  
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
            <span>Copied IP: <span className="font-semibold text-indigo-600">lowkeysmp.xyz</span></span>
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
              <img 
                src="/logo.png" 
                alt="LowKey SMP Logo" 
                className="w-full h-full object-contain drop-shadow-lg"
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
          <div className="relative">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
              <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center transform scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-indigo-900/90" />

              <nav className="relative z-30 w-full px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
                <Link href="https://discord.gg/SDgrhQZa" target="_blank" rel="noopener noreferrer">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center text-white text-2xl shadow-lg transition-all duration-300"
                  >
                    <AiOutlineDiscord />
                  </motion.div>
                </Link>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2"
                >
                  <img src="/logo.png" alt="Logo" className="w-12 h-12 md:w-16 md:h-19" />
                </motion.div>

                <a 
                  href="#shop" 
                  className="hidden md:block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Shop
                </a>
              </nav>

              <div className="relative z-20 flex flex-col md:flex-row items-center justify-center h-[calc(100vh-100px)] px-6 md:px-12 lg:px-20 text-center md:text-left">
                <motion.div 
                  className="max-w-2xl space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Start playing on <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                      LowKey SMP
                    </span>
                    <span className="inline-block ml-2">😎</span>
                  </h1>
                  <p className="text-xl text-white/90 leading-relaxed">
                    The New Way To PVP – Competitive. Strategic. Addictive.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleCopy}
                      className="relative group px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center mx-auto md:mx-0 space-x-2 cursor-pointer"
                    >
                      <span>PLAY NOW</span>
                      <span className="text-sm opacity-80">(Copy IP)</span>
                    </button>
                  </div>
                </motion.div>

                <motion.div 
                  className="mt-12 md:mt-0 md:ml-12 lg:ml-24"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <img
                    src="/character.png"
                    alt="LowKey SMP Character"
                    className="w-full max-w-lg mx-auto"
                  />
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg
                  className="w-full h-24 md:h-32"
                  viewBox="0 0 1440 150"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#ffffff"
                    d="M0,96L60,90.7C120,85,240,75,360,69.3C480,64,600,64,720,74.7C840,85,960,107,1080,106.7C1200,107,1320,85,1380,74.7L1440,64V160H1380C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160H0Z"
                  />
                </svg>
              </div>
            </section>

            {/* What is LowKey SMP? */}
            <section className="relative bg-white py-20 md:py-28 px-6 md:px-12 lg:px-24">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
                    What is LowKey SMP?
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    LowKey SMP is a modded server where you can experience Minecraft in a whole new way.
                    Safeguard your creations by claiming chunks, ensuring your base remains secure from unwanted destruction.
                    While claimed bases appear on an in-game map, be aware that they can still be
                    destroyed by any type of explosions! Get ready for strategic gameplay and thrilling
                    adventures on a server designed for both builders and combatants.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Server Features */}
            <section className="relative bg-gray-50 py-20 md:py-28 px-6 md:px-12 lg:px-24">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
                    Server Features
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="p-6 text-center">
                        <div className="w-20 h-20 mx-auto -mt-12 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 border-4 border-white">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* How to Join */}
            <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-20 md:py-28 px-6 md:px-12 lg:px-24">
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
                      className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 pl-16 border border-white/10 hover:bg-white/20 transition-all duration-300 "
                    >
                      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-yellow-400 text-gray-900 font-bold rounded-full flex items-center justify-center text-lg ">
                        {step.num}
                      </div>
                      <p className="text-white text-lg font-medium ml-5">
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
                      Experience Minecraft like never before — Modded, Competitive, and Strategic.
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
