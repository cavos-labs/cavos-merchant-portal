import React from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 border-b border-white/10 mb-8">
      <div className="flex items-center space-x-4">
        <img src="/images/CavosLogo.png" alt="Cavos Logo" className="w-6 h-auto" />
        <div className="text-sm text-[#EAE5DC]/60">MERCHANT PORTAL</div>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="#features" className="text-[#EAE5DC]/80 hover:text-[#EAE5DC] transition">Features</a>
        <a href="#how" className="text-[#EAE5DC]/80 hover:text-[#EAE5DC] transition">How it Works</a>
        <a href="https://github.com/adrianvrj/cavos-wallet-provider" className="text-[#EAE5DC]/80 hover:text-[#EAE5DC] transition">GitHub</a>
      </nav>
    </header>
  );
} 