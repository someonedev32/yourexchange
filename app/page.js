'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Zap,
  Shield,
  Clock,
  Users,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Wallet,
  RefreshCcw,
  CheckCircle2,
  Lock,
  Globe,
  Headphones,
  ArrowRightLeft,
  Sun,
  Moon,
} from 'lucide-react';

// Configuration from environment
const CONFIG = {
  linkId: process.env.NEXT_PUBLIC_CHANGENOW_LINK_ID || '1276b135b80bf2',
  defaultFrom: process.env.NEXT_PUBLIC_DEFAULT_FROM || 'btc',
  defaultTo: process.env.NEXT_PUBLIC_DEFAULT_TO || 'eth',
  defaultAmount: process.env.NEXT_PUBLIC_DEFAULT_AMOUNT || '0.1',
  primaryColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR || 'b1ff8c',
  darkMode: process.env.NEXT_PUBLIC_DARK_MODE === 'true',
};

// Theme Context
function useTheme() {
  const [isDark, setIsDark] = useState(true);
  
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return { isDark, toggleTheme };
}

// Header Component
function Header({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#exchange', label: 'Exchange' },
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? isDark 
            ? 'bg-[#0a0a0b]/90 backdrop-blur-2xl border-b border-white/5' 
            : 'bg-white/90 backdrop-blur-2xl border-b border-black/5 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-[#b1ff8c] to-[#6fd455] flex items-center justify-center shadow-lg shadow-[#b1ff8c]/25 group-hover:shadow-[#b1ff8c]/40 transition-shadow">
              <ArrowRightLeft className="w-4 h-4 lg:w-5 lg:h-5 text-[#0a0a0b]" />
            </div>
            <span className="text-xl lg:text-2xl font-bold tracking-tight">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Your</span>
              <span className="text-[#6fd455]">Exchange</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isDark 
                    ? 'text-white/60 hover:text-white hover:bg-white/5' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                isDark 
                  ? 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <a
              href="mailto:support@yourexchange.io"
              className={`text-sm font-medium transition-colors ${
                isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Support
            </a>
            <a href="#exchange">
              <Button className="bg-gradient-to-r from-[#b1ff8c] to-[#6fd455] hover:from-[#9efc73] hover:to-[#5fc944] text-[#0a0a0b] font-semibold px-6 shadow-lg shadow-[#b1ff8c]/25 hover:shadow-[#b1ff8c]/40 transition-all">
                Exchange Now
              </Button>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'text-white/70 hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'hover:bg-white/5' : 'hover:bg-gray-100'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden py-4 border-t ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-sm font-medium transition-colors rounded-lg ${
                    isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a href="#exchange" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-[#b1ff8c] to-[#6fd455] text-[#0a0a0b] font-semibold">
                    Exchange Now
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Hero Section with Centered Widget (Changelly Style)
function HeroSection({ isDark }) {
  const widgetBgColor = isDark ? '111113' : 'ffffff';
  const widgetSrc = `https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=false&amount=${CONFIG.defaultAmount}&amountFiat=1500&backgroundColor=${widgetBgColor}&darkMode=${isDark}&from=${CONFIG.defaultFrom}&fromFiat=usd&horizontal=false&isFiat=false&lang=en-US&link_id=${CONFIG.linkId}&locales=false&logo=false&primaryColor=${CONFIG.primaryColor}&to=${CONFIG.defaultTo}&toFiat=eth&toTheMoon=false`;

  return (
    <section
      id="exchange"
      className={`relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden ${
        isDark ? 'bg-[#0a0a0b]' : 'bg-gray-50'
      }`}
    >
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {isDark ? (
          <>
            {/* Dark mode gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#b1ff8c]/15 via-[#6fd455]/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#1a3d12]/40 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#0d2b07]/30 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#b1ff8c]/8 rounded-full blur-2xl animate-pulse" />
          </>
        ) : (
          <>
            {/* Light mode gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#b1ff8c]/20 via-[#6fd455]/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#e8ffd9]/60 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#d4f5c2]/40 to-transparent rounded-full blur-2xl" />
          </>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Hero Text */}
          <div className="mb-10 space-y-5">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Exchange any crypto
              <br />
              <span className="bg-gradient-to-r from-[#b1ff8c] via-[#8cf562] to-[#6fd455] bg-clip-text text-transparent">
                seamlessly
              </span>
            </h1>
            <p className={`text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-white/50' : 'text-gray-600'
            }`}>
              Exchange Bitcoin and 900+ altcoins in a fast, simple, and secure way.
              <br className="hidden sm:block" />
              No registration required.
            </p>
          </div>

          {/* Centered Widget */}
          <div className="relative w-full max-w-[440px]">
            {/* Widget Glow */}
            <div className={`absolute -inset-2 rounded-3xl blur-2xl ${
              isDark 
                ? 'bg-gradient-to-b from-[#b1ff8c]/20 via-[#6fd455]/10 to-transparent' 
                : 'bg-gradient-to-b from-[#b1ff8c]/30 via-[#6fd455]/15 to-transparent'
            }`} />
            
            {/* Widget Container */}
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${
              isDark 
                ? 'bg-[#111113] border border-white/[0.08] shadow-black/50' 
                : 'bg-white border border-gray-200/80 shadow-gray-300/50'
            }`}>
              {/* Widget Header */}
              <div className={`px-5 py-4 border-b ${
                isDark ? 'border-white/[0.06]' : 'border-gray-100'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#b1ff8c] to-[#6fd455] flex items-center justify-center">
                      <ArrowRightLeft className="w-4 h-4 text-[#0a0a0b]" />
                    </div>
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Exchange
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b1ff8c] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#b1ff8c]"></span>
                    </span>
                    <span className={`text-xs font-medium ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                      Live
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Widget iframe */}
              <div className="relative">
                <iframe
                  id="exchange-widget"
                  src={widgetSrc}
                  style={{
                    width: '100%',
                    height: '356px',
                    border: 'none',
                    display: 'block',
                  }}
                  title="Cryptocurrency Exchange"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`mt-10 flex flex-wrap justify-center gap-6 lg:gap-10 ${
            isDark ? 'text-white/50' : 'text-gray-500'
          }`}>
            {[
              { icon: Zap, text: '5-minute swaps' },
              { icon: Shield, text: 'Non-custodial' },
              { icon: Users, text: 'No account needed' },
              { icon: Lock, text: 'Secure' },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <item.icon className="w-4 h-4 text-[#b1ff8c]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className={`mt-16 flex flex-col items-center space-y-2 ${
            isDark ? 'text-white/25' : 'text-gray-400'
          }`}>
            <span className="text-xs tracking-widest uppercase">Explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Stepper Connector Script */}
      <script
        async
        src="https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js"
      />
    </section>
  );
}

// Features Section
function FeaturesSection({ isDark }) {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Average exchange time of just 5 minutes. Smart routing finds the optimal path for every swap.',
    },
    {
      icon: Shield,
      title: 'Non-Custodial',
      description: 'Your funds go directly to your wallet. We never hold or have access to your private keys.',
    },
    {
      icon: Users,
      title: 'No Registration',
      description: 'Start exchanging immediately. No accounts, no KYC for most transactions, complete privacy.',
    },
    {
      icon: Globe,
      title: '900+ Assets',
      description: 'Exchange virtually any cryptocurrency. From Bitcoin to the newest tokens, all in one place.',
    },
    {
      icon: Lock,
      title: 'Secure',
      description: 'Industry-leading security practices. Your transactions are protected at every step.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: "Dedicated support team available around the clock. We're here when you need us.",
    },
  ];

  return (
    <section id="features" className={`py-24 lg:py-32 relative ${isDark ? 'bg-[#0d0d0f]' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Why YourExchange
          </h2>
          <p className={`text-lg ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
            Built for speed, security, and simplicity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-300 ${
                isDark 
                  ? 'bg-white/[0.02] border border-white/[0.04] hover:border-[#b1ff8c]/20 hover:bg-white/[0.04]' 
                  : 'bg-gray-50 border border-gray-100 hover:border-[#b1ff8c]/40 hover:bg-gray-100/80'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#b1ff8c]/20 to-[#6fd455]/10 flex items-center justify-center mb-5 group-hover:from-[#b1ff8c]/30 group-hover:to-[#6fd455]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#6fd455]" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection({ isDark }) {
  const steps = [
    {
      step: '1',
      title: 'Select pair',
      description: 'Choose the cryptocurrency you want to exchange and the one you want to receive.',
      icon: Wallet,
    },
    {
      step: '2',
      title: 'Enter address',
      description: 'Provide your wallet address where you want to receive your exchanged cryptocurrency.',
      icon: RefreshCcw,
    },
    {
      step: '3',
      title: 'Receive crypto',
      description: 'Send your crypto and receive the exchanged amount directly in your wallet.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="how-it-works" className={`py-24 lg:py-32 relative ${isDark ? 'bg-[#0a0a0b]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            How It Works
          </h2>
          <p className={`text-lg ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
            Three simple steps. No complications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className={`hidden md:block absolute top-8 left-[60%] w-[80%] h-px ${
                  isDark 
                    ? 'bg-gradient-to-r from-[#b1ff8c]/30 to-transparent' 
                    : 'bg-gradient-to-r from-[#b1ff8c]/50 to-transparent'
                }`} />
              )}
              
              {/* Step */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#b1ff8c] to-[#6fd455] flex items-center justify-center shadow-lg shadow-[#b1ff8c]/25">
                <step.icon className="w-7 h-7 text-[#0a0a0b]" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {step.title}
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#exchange">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#b1ff8c] to-[#6fd455] hover:from-[#9efc73] hover:to-[#5fc944] text-[#0a0a0b] font-semibold px-8 shadow-lg shadow-[#b1ff8c]/25"
            >
              Start Exchange
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection({ isDark }) {
  const faqs = [
    {
      question: 'How long does an exchange take?',
      answer: 'Most exchanges complete within 5-30 minutes, depending on the cryptocurrencies involved and network conditions. Bitcoin transactions may take longer due to block confirmation times.',
    },
    {
      question: 'Do I need to create an account?',
      answer: 'No. YourExchange is completely registration-free. Start exchanging immediately without providing personal information or creating an account.',
    },
    {
      question: 'Are there any limits?',
      answer: 'Minimum amounts vary by cryptocurrency and are displayed before you exchange. There are no maximum limits for most transactions.',
    },
    {
      question: 'Is it secure?',
      answer: 'Yes. We operate as a non-custodial service, meaning we never hold your funds. Crypto goes directly from your wallet to your destination wallet.',
    },
    {
      question: 'What if something goes wrong?',
      answer: "Our 24/7 support team is here to help. Contact us with your transaction details and we'll resolve any issues promptly.",
    },
    {
      question: 'Which cryptocurrencies are supported?',
      answer: 'We support 900+ cryptocurrencies including Bitcoin, Ethereum, USDT, BNB, Solana, and many more. New assets are added regularly.',
    },
  ];

  return (
    <section id="faq" className={`py-24 lg:py-32 relative ${isDark ? 'bg-[#0d0d0f]' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Questions & Answers
          </h2>
          <p className={`text-lg ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
            Everything you need to know.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`rounded-xl px-6 transition-colors ${
                  isDark 
                    ? 'bg-white/[0.02] border border-white/[0.04] data-[state=open]:border-[#b1ff8c]/20' 
                    : 'bg-gray-50 border border-gray-100 data-[state=open]:border-[#b1ff8c]/40'
                }`}
              >
                <AccordionTrigger className={`text-left font-medium hover:no-underline py-5 text-[15px] ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={`pb-5 text-sm leading-relaxed ${
                  isDark ? 'text-white/50' : 'text-gray-600'
                }`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer({ isDark }) {
  return (
    <footer className={`py-12 border-t ${
      isDark ? 'border-white/[0.04] bg-[#0a0a0b]' : 'border-gray-100 bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#b1ff8c] to-[#6fd455] flex items-center justify-center">
              <ArrowRightLeft className="w-4 h-4 text-[#0a0a0b]" />
            </div>
            <span className="text-lg font-bold">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Your</span>
              <span className="text-[#6fd455]">Exchange</span>
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center space-x-8">
            <Link
              href="/terms"
              className={`text-sm transition-colors ${
                isDark ? 'text-white/40 hover:text-white/70' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className={`text-sm transition-colors ${
                isDark ? 'text-white/40 hover:text-white/70' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Privacy
            </Link>
            <a
              href="mailto:support@yourexchange.io"
              className={`text-sm transition-colors ${
                isDark ? 'text-white/40 hover:text-white/70' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Support
            </a>
          </div>

          {/* Copyright */}
          <p className={`text-sm ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} YourExchange
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <main className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#0a0a0b]' : 'bg-gray-50'}`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <HeroSection isDark={isDark} />
      <FeaturesSection isDark={isDark} />
      <HowItWorksSection isDark={isDark} />
      <FAQSection isDark={isDark} />
      <Footer isDark={isDark} />
    </main>
  );
}
