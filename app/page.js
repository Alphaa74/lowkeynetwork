'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Poppins } from 'next/font/google'
import { AiOutlineDiscord } from 'react-icons/ai'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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

  return (
    <div className={poppins.className}>
      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-5 right-5 z-[999] bg-white text-black px-4 py-2 rounded-lg shadow-lg border border-gray-300"
          >
            ✅ Copied IP: <span className="font-semibold">lowkeysmp.xyz</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/20 backdrop-blur-md"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-24 h-24 mb-4"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img src="/logo.png" alt="LowKey SMP Logo" className="w-full h-[140px]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Hero Section */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-[90vh] w-full overflow-hidden bg-white"
          >
            <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center z-0" />
            <div className="absolute inset-0 bg-blue-400/60 z-10" />

            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-full px-6 md:px-20 py-4 flex items-center justify-between z-30"
            >
              <Link href={`https://discord.gg/WRGQFTAJ`}>
                <div className="text-white scale-240 cursor-pointer hover:text-yellow-400 hover:scale-280 transition-all transition-1 font-semibold hidden md:block">
                  <AiOutlineDiscord />
                </div>
              </Link>

              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.6, ease: "easeInOut", type: "tween" }}
                className="text-white font-extrabold text-2xl md:text-3xl drop-shadow-lg flex items-center "
              >
                <img src="/logo.png" alt="Logo" height={60} width={60} />
              </motion.div>

              <div className="text-white font-semibold hidden md:block">
                <a href="#shop" className="hover:text-yellow-300 transition">Shop</a>
              </div>
            </motion.nav>

            <div className="relative z-20 flex h-full w-full items-center justify-between px-6 md:px-20 pt-16">
              <div className="max-w-xl text-white space-y-6">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-md">
                  <span className='text-2xl'>Part Of The Vantra MC Network</span><br />
                  Start playing on <br />
                  <span className="text-white">LowKey SMP 😎</span>
                </h1>
                <p className="text-white/90 text-lg md:text-xl leading-relaxed font-medium">
                  The New Way To PVP – Competitive. Strategic. Addictive.
                </p>
                <button
                  onClick={handleCopy}
                  className="mt-4 px-6 py-3 bg-yellow-400 cursor-pointer hover:bg-yellow-300 transition-all text-black font-semibold rounded-full shadow-md mb-12"
                >
                  COPY IP
                </button>
              </div>

              <div className="hidden md:block relative">
                <img
                  src="/character.png"
                  alt="LowKey SMP Character"
                  className="w-[700px] md:w-[700px]"
                />
              </div>
            </div>

            <svg
              className="absolute bottom-0 left-0 w-full z-20"
              viewBox="0 0 1440 150"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M0,96L60,90.7C120,85,240,75,360,69.3C480,64,600,64,720,74.7C840,85,960,107,1080,106.7C1200,107,1320,85,1380,74.7L1440,64V160H1380C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160H0Z"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* What Section */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative bg-white w-full py-16 md:py-24 px-6 md:px-20 text-center z-10"
        >
          <svg
            className="absolute top-0 left-0 w-full z-0"
            viewBox="0 0 1440 150"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginTop: '-1px' }}
          >
            <path
              fill="#ffffff"
              d="M0,96L60,90.7C120,85,240,75,360,69.3C480,64,600,64,720,74.7C840,85,960,107,1080,106.7C1200,107,1320,85,1380,74.7L1440,64V160H1380C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160H0Z"
            />
          </svg>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-8 leading-tight"
            >
              What is LowKey SMP?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              LowKey SMP is a modded server where you can experience Minecraft in a whole new way.
              Safeguard your creations by claiming chunks, ensuring your base remains secure from unwanted destruction.
              While claimed bases appear on an in-game map, be aware that they can still be
              destroyed by any type of explosions! Get ready for strategic gameplay and thrilling
              adventures on a server designed for both builders and combatants.
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Server Features */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative bg-white py-20 px-6 md:px-20 z-10"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-16">
            Server Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
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
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 150 }}
                className="bg-white relative shadow-xl p-6 pt-10 text-center rounded-t-2xl border border-gray-200"
                style={{
                  clipPath: 'polygon(0 0, 100% 0%, 100% 90%, 0% 100%)',
                }}
              >
                <div className="w-24 h-24 mx-auto -mt-16 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden shadow-md border-2 border-white">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mt-4 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-medium">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* How to Join */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative bg-blue-500 w-full py-20 px-6 md:px-20 text-white z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
            How can you join the LowKey SMP?
          </h2>

          <div className="space-y-10">
            {[
              {
                num: '1',
                content: <>Open Up Your Launcher</>,
              },
              {
                num: '2',
                content: (
                  <>
                    <span className="font-bold">Go To &quot;Multiplayer&quot; and click &quot;Add Server&quot; and type in the IP: <span className='text-blue-700'>lowkeysmp.xyz</span>. After, join the server</span>
                  </>
                ),
              },
              {
                num: '3',
                content: <>Join The Server And Start Enjoying The LowKey Experience</>,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative bg-white text-gray-800 rounded-xl shadow-xl px-6 py-6 md:px-10 md:py-8 text-left flex items-start"
              >
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                  <div className="w-10 h-10 rounded-md bg-yellow-400 text-white font-bold flex items-center justify-center text-xl shadow-md">
                    {step.num}
                  </div>
                </div>
                <p className="ml-10 text-base md:text-lg font-medium">{step.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="bg-[#0e0e0e] text-white py-12 px-6 md:px-20 text-center"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold tracking-tight"
          >
            LowKey SMP 😎
          </motion.h3>
          <p className="text-gray-400 text-sm max-w-xl">
            A part of the Vantra MC Network. Experience Minecraft like never before — Modded, Competitive, and Strategic.
          </p>
          <Link
            href="https://discord.gg/WRGQFTAJ"
            target="_blank"
            className="mt-4 inline-flex items-center justify-center gap-2 hover:text-blue-400 transition"
          >
            <AiOutlineDiscord size={24} />
            <span className="font-medium">Join our Discord</span>
          </Link>
          <div className="text-gray-600 text-xs mt-6">
            &copy; {new Date().getFullYear()} LowKey SMP. All rights reserved.
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default Page
