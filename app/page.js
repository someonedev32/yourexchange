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
  Mail,
  ArrowRightLeft,
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

// Header Component
function Header() {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0b]/95 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-[#b1ff8c] to-[#7dd35f] flex items-center justify-center shadow-lg shadow-[#b1ff8c]/20">
              <ArrowRightLeft className="w-4 h-4 lg:w-5 lg:h-5 text-[#0a0a0b]" />
            </div>
            <span className="text-xl lg:text-2xl font-bold tracking-tight">
              <span className="text-white">Your</span>
              <span className="text-[#b1ff8c]">Exchange</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="mailto:support@yourexchange.io"
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              Support
            </a>
            <a href="#exchange">
              <Button className="bg-[#b1ff8c] hover:bg-[#9ee872] text-[#0a0a0b] font-semibold px-6 shadow-lg shadow-[#b1ff8c]/20 transition-all hover:shadow-[#b1ff8c]/30">
                Exchange Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/5">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a href="#exchange" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#b1ff8c] hover:bg-[#9ee872] text-[#0a0a0b] font-semibold">
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

// Hero Section with Widget
function HeroSection() {
  const widgetSrc = `https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=false&amount=${CONFIG.defaultAmount}&amountFiat=1500&backgroundColor=111113&darkMode=true&from=${CONFIG.defaultFrom}&fromFiat=usd&horizontal=false&isFiat=false&lang=en-US&link_id=${CONFIG.linkId}&locales=false&logo=false&primaryColor=${CONFIG.primaryColor}&to=${CONFIG.defaultTo}&toFiat=eth&toTheMoon=false`;

  return (
    <section
      id="exchange"
      className="relative min-h-screen pt-24 lg:pt-28 pb-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0b]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#b1ff8c]/8 via-[#b1ff8c]/3 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#b1ff8c]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#7dd35f]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-white">Instant Crypto</span>
                <br />
                <span className="text-[#b1ff8c]">Exchange</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/50 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Fast, non-custodial swaps across 900+ cryptocurrencies. 
                No registration required. Your keys, your crypto.
              </p>
            </div>

            {/* Trust Points */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm">
              {[
                { icon: Zap, text: '5-minute swaps' },
                { icon: Shield, text: 'Non-custodial' },
                { icon: Users, text: 'No account needed' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center lg:justify-start space-x-2 text-white/70"
                >
                  <item.icon className="w-4 h-4 text-[#b1ff8c]" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-12 pt-6">
              {[
                { value: '900+', label: 'Cryptocurrencies' },
                { value: '10M+', label: 'Swaps completed' },
                { value: '24/7', label: 'Availability' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Widget */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-[#b1ff8c]/20 via-[#b1ff8c]/5 to-transparent rounded-3xl blur-xl" />
              
              {/* Widget Container */}
              <div className="relative bg-[#111113] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/[0.06]">
                {/* Widget Header */}
                <div className="px-6 py-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">Exchange</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-[#b1ff8c] animate-pulse" />
                      <span className="text-xs text-white/40">Live rates</span>
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
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center space-y-2 text-white/30">
          <span className="text-xs tracking-wide uppercase">Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
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
function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description:
        'Average exchange time of just 5 minutes. Smart routing finds the optimal path for every swap.',
    },
    {
      icon: Shield,
      title: 'Non-Custodial',
      description:
        'Your funds go directly to your wallet. We never hold or have access to your private keys.',
    },
    {
      icon: Users,
      title: 'No Registration',
      description:
        'Start exchanging immediately. No accounts, no KYC for most transactions, complete privacy.',
    },
    {
      icon: Globe,
      title: '900+ Assets',
      description:
        'Exchange virtually any cryptocurrency. From Bitcoin to the newest tokens, all in one place.',
    },
    {
      icon: Lock,
      title: 'Secure',
      description:
        'Industry-leading security practices. Your transactions are protected at every step.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description:
        'Dedicated support team available around the clock. We\'re here when you need us.',
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 relative bg-[#0a0a0b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Why YourExchange
          </h2>
          <p className="text-lg text-white/50">
            Built for speed, security, and simplicity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-[#b1ff8c]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#b1ff8c]/10 flex items-center justify-center mb-5 group-hover:bg-[#b1ff8c]/15 transition-colors">
                <feature.icon className="w-6 h-6 text-[#b1ff8c]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      step: '1',
      title: 'Select pair',
      description:
        'Choose the cryptocurrency you want to exchange and the one you want to receive.',
      icon: Wallet,
    },
    {
      step: '2',
      title: 'Enter address',
      description:
        'Provide your wallet address where you want to receive your exchanged cryptocurrency.',
      icon: RefreshCcw,
    },
    {
      step: '3',
      title: 'Receive crypto',
      description:
        'Send your crypto and receive the exchanged amount directly in your wallet.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 relative bg-[#0d0d0f]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-white/50">
            Three simple steps. No complications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#b1ff8c]/30 to-transparent" />
              )}
              
              {/* Step */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#b1ff8c] to-[#7dd35f] flex items-center justify-center shadow-lg shadow-[#b1ff8c]/20">
                <step.icon className="w-7 h-7 text-[#0a0a0b]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#exchange">
            <Button
              size="lg"
              className="bg-[#b1ff8c] hover:bg-[#9ee872] text-[#0a0a0b] font-semibold px-8 shadow-lg shadow-[#b1ff8c]/20"
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
function FAQSection() {
  const faqs = [
    {
      question: 'How long does an exchange take?',
      answer:
        'Most exchanges complete within 5-30 minutes, depending on the cryptocurrencies involved and network conditions. Bitcoin transactions may take longer due to block confirmation times.',
    },
    {
      question: 'Do I need to create an account?',
      answer:
        'No. YourExchange is completely registration-free. Start exchanging immediately without providing personal information or creating an account.',
    },
    {
      question: 'Are there any limits?',
      answer:
        'Minimum amounts vary by cryptocurrency and are displayed before you exchange. There are no maximum limits for most transactions.',
    },
    {
      question: 'Is it secure?',
      answer:
        'Yes. We operate as a non-custodial service, meaning we never hold your funds. Crypto goes directly from your wallet to your destination wallet.',
    },
    {
      question: 'What if something goes wrong?',
      answer:
        'Our 24/7 support team is here to help. Contact us with your transaction details and we\'ll resolve any issues promptly.',
    },
    {
      question: 'Which cryptocurrencies are supported?',
      answer:
        'We support 900+ cryptocurrencies including Bitcoin, Ethereum, USDT, BNB, Solana, and many more. New assets are added regularly.',
    },
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 relative bg-[#0a0a0b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Questions & Answers
          </h2>
          <p className="text-lg text-white/50">
            Everything you need to know.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/[0.02] border border-white/[0.04] rounded-xl px-6 data-[state=open]:border-[#b1ff8c]/20"
              >
                <AccordionTrigger className="text-left font-medium text-white hover:no-underline py-5 text-[15px]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 pb-5 text-sm leading-relaxed">
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
function Footer() {
  return (
    <footer className="py-12 border-t border-white/[0.04] bg-[#0a0a0b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#b1ff8c] to-[#7dd35f] flex items-center justify-center">
              <ArrowRightLeft className="w-4 h-4 text-[#0a0a0b]" />
            </div>
            <span className="text-lg font-bold">
              <span className="text-white">Your</span>
              <span className="text-[#b1ff8c]">Exchange</span>
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center space-x-8">
            <Link
              href="/terms"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy
            </Link>
            <a
              href="mailto:support@yourexchange.io"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Support
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} YourExchange
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
