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
    { href: '#swap', label: 'Swap' },
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-[#b1ff8c] to-[#7dd35f] flex items-center justify-center">
              <RefreshCcw className="w-4 h-4 lg:w-5 lg:h-5 text-background" />
            </div>
            <span className="text-lg lg:text-xl font-bold">
              <span className="text-gradient">Your</span>
              <span className="text-foreground">Exchange</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/terms"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
            >
              Privacy
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="mailto:support@yourexchange.io"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Headphones className="w-4 h-4" />
              <span>Support</span>
            </a>
            <a href="#swap">
              <Button className="bg-gradient-to-r from-[#b1ff8c] to-[#7dd35f] text-background font-semibold hover:opacity-90 transition-opacity">
                Start Swap
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/terms"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy
              </Link>
              <div className="pt-4 px-4">
                <a href="#swap" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-[#b1ff8c] to-[#7dd35f] text-background font-semibold">
                    Start Swap
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
  const widgetSrc = `https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=false&amount=${CONFIG.defaultAmount}&amountFiat=1500&backgroundColor=0a0a0b&darkMode=true&from=${CONFIG.defaultFrom}&fromFiat=usd&horizontal=false&isFiat=false&lang=en-US&link_id=${CONFIG.linkId}&locales=true&logo=false&primaryColor=${CONFIG.primaryColor}&to=${CONFIG.defaultTo}&toFiat=eth&toTheMoon=true`;

  return (
    <section
      id="swap"
      className="relative min-h-screen pt-20 lg:pt-24 pb-16 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#b1ff8c]/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#b1ff8c]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7dd35f]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#b1ff8c]/10 border border-[#b1ff8c]/20 text-[#b1ff8c] text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Instant Crypto Exchange
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Swap Crypto
                <br />
                <span className="text-gradient">Effortlessly</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Exchange 900+ cryptocurrencies with the best rates. No registration,
                no limits, no hassle. Just pure, instant swaps.
              </p>
            </div>

            {/* Trust Bullets */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              {[
                { icon: Zap, text: 'Lightning Fast' },
                { icon: Shield, text: 'Non-Custodial' },
                { icon: Users, text: 'No Account Needed' },
                { icon: Clock, text: '24/7 Available' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-card/50 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#b1ff8c]/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#b1ff8c]" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
              {[
                { value: '900+', label: 'Cryptocurrencies' },
                { value: '10M+', label: 'Swaps Completed' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Widget */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px]">
              {/* Widget Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#b1ff8c]/20 to-[#7dd35f]/20 rounded-3xl blur-2xl" />
              
              {/* Widget Container */}
              <div className="relative bg-card rounded-2xl border border-border/50 overflow-hidden shadow-2xl">
                <iframe
                  id="changenow-widget"
                  src={widgetSrc}
                  style={{
                    width: '100%',
                    height: '370px',
                    border: 'none',
                    display: 'block',
                  }}
                  title="ChangeNOW Exchange Widget"
                  loading="lazy"
                />
              </div>
              
              {/* Widget Footer */}
              <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                <Lock className="w-3 h-3" />
                <span>Powered by ChangeNOW • Secure & Non-Custodial</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-xs">Scroll to explore</span>
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
        'Average swap time of just 5 minutes. Our smart routing finds the fastest path for your exchange.',
    },
    {
      icon: Shield,
      title: 'Non-Custodial',
      description:
        'We never hold your funds. Coins go directly from your wallet to your destination wallet.',
    },
    {
      icon: Users,
      title: 'No Registration',
      description:
        'Start swapping immediately. No accounts, no KYC for most transactions, no personal data required.',
    },
    {
      icon: Globe,
      title: '900+ Coins',
      description:
        'Exchange virtually any cryptocurrency. From Bitcoin to the newest altcoins, we have you covered.',
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description:
        'Your privacy matters. We don\'t store your personal information or transaction history.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description:
        'Our dedicated support team is available around the clock to help with any questions.',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">YourExchange</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the future of cryptocurrency exchange with features designed
            for speed, security, and simplicity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-[#b1ff8c]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#b1ff8c]/5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#b1ff8c]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-[#b1ff8c]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
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
      step: '01',
      title: 'Choose Your Pair',
      description:
        'Select the cryptocurrency you want to exchange and the one you want to receive. Enter the amount.',
      icon: Wallet,
    },
    {
      step: '02',
      title: 'Enter Address',
      description:
        'Provide your wallet address where you want to receive your exchanged cryptocurrency.',
      icon: RefreshCcw,
    },
    {
      step: '03',
      title: 'Send & Receive',
      description:
        'Send your crypto to the provided address. Your exchanged coins will arrive in minutes.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-32 relative bg-gradient-to-b from-transparent via-[#b1ff8c]/5 to-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Swap your crypto in three simple steps. No complicated procedures, no
            waiting, no stress.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#b1ff8c]/50 via-[#b1ff8c] to-[#b1ff8c]/50" />

          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step Number */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#b1ff8c] to-[#7dd35f] flex items-center justify-center shadow-lg shadow-[#b1ff8c]/20">
                <step.icon className="w-8 h-8 text-background" />
              </div>
              <div className="absolute -top-2 -right-2 md:right-auto md:left-1/2 md:-translate-x-1/2 md:-top-4 w-8 h-8 rounded-full bg-background border-2 border-[#b1ff8c] flex items-center justify-center text-xs font-bold text-[#b1ff8c]">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#swap">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#b1ff8c] to-[#7dd35f] text-background font-semibold hover:opacity-90 transition-opacity"
            >
              Start Swapping Now
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
      question: 'How long does a swap take?',
      answer:
        'Most swaps are completed within 5-30 minutes, depending on the cryptocurrencies involved and network congestion. Bitcoin transactions typically take longer due to block confirmation times.',
    },
    {
      question: 'Do I need to create an account?',
      answer:
        'No! YourExchange is completely registration-free. You can start swapping immediately without providing any personal information or creating an account.',
    },
    {
      question: 'Is there a minimum or maximum swap amount?',
      answer:
        'Minimum amounts vary by cryptocurrency and are displayed in the widget. There are no maximum limits for most transactions, making it suitable for both small and large exchanges.',
    },
    {
      question: 'How do you ensure security?',
      answer:
        'We operate as a non-custodial service, meaning we never hold your funds. Coins are exchanged directly through our partner network, and we don\'t store any personal data or private keys.',
    },
    {
      question: 'What if my transaction gets stuck?',
      answer:
        'Our 24/7 support team is here to help. If your transaction takes longer than expected, contact us with your transaction ID and we\'ll investigate immediately.',
    },
    {
      question: 'Which cryptocurrencies do you support?',
      answer:
        'We support over 900 cryptocurrencies including Bitcoin, Ethereum, USDT, BNB, Solana, and many more. New coins are added regularly.',
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you can't find what you're looking
            for, our support team is always here to help.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 border border-border/50 rounded-xl px-6 data-[state=open]:border-[#b1ff8c]/30"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
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
    <footer className="py-12 lg:py-16 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#b1ff8c] to-[#7dd35f] flex items-center justify-center">
                <RefreshCcw className="w-5 h-5 text-background" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-gradient">Your</span>
                <span className="text-foreground">Exchange</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-4">
              The fastest and most secure way to exchange cryptocurrencies.
              Non-custodial, registration-free, and available 24/7.
            </p>
            <a
              href="mailto:support@yourexchange.io"
              className="inline-flex items-center space-x-2 text-[#b1ff8c] hover:underline"
            >
              <Mail className="w-4 h-4" />
              <span>support@yourexchange.io</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#swap"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Swap
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://changenow.io/terms-of-use"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Provider Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} YourExchange.io. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Exchange services provided by{' '}
            <a
              href="https://changenow.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b1ff8c] hover:underline"
            >
              ChangeNOW
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
