import './globals.css';

export const metadata = {
  title: 'YourExchange.io | Instant Crypto Swaps - Non-Custodial Exchange',
  description: 'Swap 900+ cryptocurrencies instantly with the best rates. Non-custodial, no registration required. Fast, secure, and anonymous crypto exchange.',
  keywords: 'crypto exchange, bitcoin swap, ethereum exchange, non-custodial, instant swap, cryptocurrency',
  authors: [{ name: 'YourExchange.io' }],
  openGraph: {
    title: 'YourExchange.io | Instant Crypto Swaps',
    description: 'Swap 900+ cryptocurrencies instantly with the best rates. Non-custodial, no registration required.',
    url: 'https://yourexchange.io',
    siteName: 'YourExchange.io',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YourExchange.io | Instant Crypto Swaps',
    description: 'Swap 900+ cryptocurrencies instantly with the best rates. Non-custodial, no registration required.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background">
        {children}
      </body>
    </html>
  );
}
