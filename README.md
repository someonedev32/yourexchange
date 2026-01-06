# YourExchange.io - Crypto Swap Platform

A production-ready one-page crypto swap web application with a premium UI inspired by Changelly. Features instant cryptocurrency exchanges powered by ChangeNOW.

## Features

- 🚀 **Lightning Fast** - Average swap time of just 5 minutes
- 🔒 **Non-Custodial** - We never hold your funds
- 👤 **No Registration** - Start swapping immediately
- 🌍 **900+ Coins** - Exchange virtually any cryptocurrency
- 📱 **Responsive** - Works on all devices
- 🎨 **Premium UI** - Dark theme with modern gradients

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS + shadcn/ui
- **Exchange Widget:** ChangeNOW
- **Icons:** Lucide React

## Pages

- `/` - Main swap page with hero, features, how-it-works, FAQ
- `/terms` - Terms of Service
- `/privacy` - Privacy Policy

## Configuration

Environment variables (`.env`):

```env
# ChangeNOW Widget Configuration
NEXT_PUBLIC_CHANGENOW_LINK_ID=your_link_id_here
NEXT_PUBLIC_DEFAULT_FROM=btc
NEXT_PUBLIC_DEFAULT_TO=eth
NEXT_PUBLIC_DEFAULT_AMOUNT=0.1
NEXT_PUBLIC_PRIMARY_COLOR=b1ff8c
NEXT_PUBLIC_DARK_MODE=true
```

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn

### Installation

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

### Deployment

#### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Set environment variables
4. Deploy

#### GitHub Pages

1. Add `next.config.js` output: 'export'
2. Run `yarn build`
3. Deploy `out` folder

#### Netlify

1. Push to GitHub
2. Import to Netlify
3. Set build command: `yarn build`
4. Set publish directory: `.next`

## Project Structure

```
/app
├── app/
│   ├── page.js          # Main swap page
│   ├── layout.js        # Root layout with metadata
│   ├── globals.css      # Global styles
│   ├── terms/
│   │   └── page.js      # Terms of Service
│   └── privacy/
│       └── page.js      # Privacy Policy
├── components/
│   └── ui/              # shadcn/ui components
├── .env                 # Environment variables
├── tailwind.config.js   # Tailwind configuration
└── package.json
```

## ChangeNOW Widget

The exchange widget is embedded via iframe with the following configuration:

- Link ID for affiliate tracking
- Default currency pair (BTC → ETH)
- Default amount (0.1 BTC)
- Custom primary color (#b1ff8c)
- Dark mode enabled

## Legal

- Exchange services are provided by [ChangeNOW](https://changenow.io)
- Non-custodial service - we never hold user funds
- Users must comply with local regulations

## Support

For support inquiries: support@yourexchange.io

## License

All rights reserved © 2025 YourExchange.io
