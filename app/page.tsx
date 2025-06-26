'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';

export default function MerchantPortal() {
  const [merchantStats, setMerchantStats] = useState([
    { network: 'USDC Payments', count: 1247 },
    { network: 'Active Merchants', count: 89 }
  ]);
  const demoRef = useRef(null);

  const scrollToDemo = () => {
    (demoRef.current as HTMLElement | null)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScheduleDemo = () => {
    window.open('https://cal.com/adrian-vrj/30min', '_blank', 'noopener,noreferrer');
  };

  const handleViewFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-h-screen text-white bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 229, 220, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="container mx-auto py-4 md:py-8 relative z-10">
          <Header />

          {/* Hero Section */}
          <section className="relativ md:py-32 text-center">
            {/* Year indicator */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-6xl md:text-8xl font-bold text-[#EAE5DC]/10 -rotate-90 origin-center">
              20<br />25
            </div>

            {/* Main Hero Content */}
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="text-sm uppercase tracking-wider text-[#EAE5DC]/60 mb-4">
                  ACCEPT & RECEIVE
                </div>
                <div className="text-sm uppercase tracking-wider text-[#EAE5DC]/60 mb-8">
                  CRYPTO PAYMENTS
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none"
              >
                <span className="text-[#EAE5DC]/20 block font-bold">CRYPTO</span>
                <span className="text-[#EAE5DC] relative font-bold">
                  PAYMENTS
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="max-w-3xl mx-auto mb-12"
              >
                <div className="text-6xl md:text-8xl text-[#EAE5DC]/10 mb-4">"</div>
                <p className="text-lg md:text-xl text-[#EAE5DC]/80 leading-relaxed">
                  ACCEPT SECURE, INSTANT CRYPTO PAYMENTS IN USDC DIRECTLY ON YOUR WEBSITE. 
                  SIMPLE INTEGRATION, NO CRYPTO EXPERTISE REQUIRED.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  onClick={handleScheduleDemo}
                  className="bg-[#EAE5DC] text-black px-8 py-4 font-medium hover:bg-[#EAE5DC]/90 transition-all duration-300 rounded-lg text-lg"
                >
                  Schedule Demo
                </button>
                <button 
                  onClick={handleViewFeatures}
                  className="border-2 border-[#EAE5DC] px-8 py-4 font-medium hover:bg-[#EAE5DC]/10 transition-all duration-300 rounded-lg text-lg"
                >
                  See Features
                </button>
              </motion.div>
            </div>

            {/* Explore indicator */}
            <div className="absolute right-0 bottom-0 transform rotate-90 origin-bottom-right">
              <div className="text-sm uppercase tracking-wider text-[#EAE5DC]/40 flex items-center space-x-2">
                <span>EXPLORE</span>
                <div className="w-12 h-px bg-[#EAE5DC]/40"></div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                WHY <span className="text-[#EAE5DC]">CAVOS</span> MERCHANT?
              </h2>
              <p className="text-lg md:text-xl text-[#EAE5DC]/80 max-w-3xl mx-auto">
                Everything you need to accept crypto payments in USDC, with no hassle.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#EAE5DC]/10 to-[#EAE5DC]/5 border border-[#EAE5DC]/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#EAE5DC] mb-4">Easy Integration</h3>
                <p className="text-[#EAE5DC]/80 mb-6">
                  Add a payment widget or API to your site in minutes. No crypto experience needed.
                </p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                  <span className="text-green-400">WIDGET</span> <span className="text-[#EAE5DC]">Copy & Paste</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-[#EAE5DC]/10 to-[#EAE5DC]/5 border border-[#EAE5DC]/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#EAE5DC] mb-4">Instant Settlement</h3>
                <p className="text-[#EAE5DC]/80 mb-6">
                  Receive USDC directly to your wallet, instantly and securely, with on-chain transparency.
                </p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                  <span className="text-blue-400">USDC</span> <span className="text-[#EAE5DC]">Direct to Wallet</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-[#EAE5DC]/10 to-[#EAE5DC]/5 border border-[#EAE5DC]/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#EAE5DC] mb-4">No Volatility</h3>
                <p className="text-[#EAE5DC]/80 mb-6">
                  Get paid in stable USDC, not volatile tokens. Focus on your business, not the market.
                </p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                  <span className="text-yellow-400">STABLE</span> <span className="text-[#EAE5DC]">No Market Risk</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 md:py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-[#EAE5DC]">TRUSTED</span> BY MERCHANTS
              </h2>
              <p className="text-lg md:text-xl text-[#EAE5DC]/80 max-w-3xl mx-auto">
                Join the growing ecosystem of businesses accepting crypto payments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {merchantStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#EAE5DC]/5 to-[#EAE5DC]/10 border border-[#EAE5DC]/20 rounded-xl p-8 text-center"
                >
                  <div className="text-5xl font-bold text-[#EAE5DC] mb-2">
                    {stat.count.toLocaleString()}+
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{stat.network}</h3>
                  <p className="text-[#EAE5DC]/70">
                    {stat.network === 'USDC Payments' ? 'Processed Successfully' : 'Growing Daily'}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* How it Works Section */}
          <section id="how" className="py-16 md:py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                HOW IT <span className="text-[#EAE5DC]">WORKS</span>
              </h2>
              <p className="text-lg md:text-xl text-[#EAE5DC]/80 max-w-3xl mx-auto">
                Start accepting crypto payments in 3 simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  number: "1",
                  title: "Sign Up",
                  description: "Create your merchant account and get access to your dashboard."
                },
                {
                  number: "2", 
                  title: "Integrate",
                  description: "Add our payment widget or API to your website. Copy-paste simple."
                },
                {
                  number: "3",
                  title: "Get Paid",
                  description: "Start receiving USDC payments from your customers, instantly."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#EAE5DC]/20 to-[#EAE5DC]/10 border border-[#EAE5DC]/30 flex items-center justify-center mb-6 text-3xl font-bold text-[#EAE5DC]">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-[#EAE5DC]">{step.title}</h4>
                  <p className="text-[#EAE5DC]/80 max-w-xs">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Demo/Get Started Section */}
          <section
            ref={demoRef}
            className="py-16 md:py-24 border-t border-[#EAE5DC]/10"
          >
            <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="flex-1"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  START <span className="text-[#EAE5DC]">ACCEPTING</span> TODAY
                </h2>
                <p className="text-lg md:text-xl text-[#EAE5DC]/80 mb-8 max-w-xl">
                  Join merchants worldwide who are already accepting crypto payments with Cavos.
                </p>
                <div className="space-y-4">
                  {[
                    "Simple widget integration",
                    "Instant USDC settlements", 
                    "No crypto expertise required",
                    "24/7 customer support",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#EAE5DC] rounded-full"></div>
                      <p className="text-[#EAE5DC]/80">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="flex-1 w-full max-w-md"
              >
                <div className="bg-gradient-to-br from-[#EAE5DC]/10 to-[#EAE5DC]/5 border border-[#EAE5DC]/20 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-6 text-[#EAE5DC]">
                    Get Started
                  </h3>
                  <p className="text-lg text-[#EAE5DC]/80 mb-6">
                    Schedule a demo to see how easy it is to start accepting crypto payments.
                  </p>
                  <button
                    onClick={handleScheduleDemo}
                    className="inline-block bg-[#EAE5DC] text-black px-8 py-4 font-medium hover:bg-[#EAE5DC]/90 transition-colors duration-300 rounded-lg text-lg w-full"
                  >
                    Schedule Demo
                  </button>
                  <div className="mt-4 pt-4 border-t border-[#EAE5DC]/20">
                    <div className="flex justify-center space-x-4 text-sm text-[#EAE5DC]/60">
                      <a href="https://x.com/cavosxyz" className="hover:text-[#EAE5DC] transition">Twitter</a>
                      <a href="https://github.com/adrianvrj/cavos-wallet-provider" className="hover:text-[#EAE5DC] transition">GitHub</a>
                      <a href="https://discord.com/invite/RKNxhpczfw" className="hover:text-[#EAE5DC] transition">Discord</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}