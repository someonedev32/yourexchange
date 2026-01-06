import Link from 'next/link';
import { RefreshCcw, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Terms of Service | YourExchange.io',
  description: 'Terms of Service for YourExchange.io cryptocurrency exchange platform.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-[#b1ff8c] to-[#7dd35f] flex items-center justify-center">
                <RefreshCcw className="w-4 h-4 lg:w-5 lg:h-5 text-background" />
              </div>
              <span className="text-lg lg:text-xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b1ff8c] to-[#7dd35f]">Your</span>
                <span className="text-foreground">Exchange</span>
              </span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: June 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to YourExchange.io ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website and cryptocurrency exchange services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">2. Service Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                YourExchange.io provides a platform that facilitates cryptocurrency exchanges through integration with third-party exchange services. Our primary exchange functionality is powered by ChangeNOW, a third-party non-custodial cryptocurrency exchange service.
              </p>
              <div className="bg-card/50 border border-border/50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Important:</strong> The actual exchange transactions are processed by ChangeNOW. By using our service, you also agree to ChangeNOW's{' '}
                  <a href="https://changenow.io/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-[#b1ff8c] hover:underline">
                    Terms of Use
                  </a>{' '}
                  and{' '}
                  <a href="https://changenow.io/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#b1ff8c] hover:underline">
                    Privacy Policy
                  </a>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">3. Non-Custodial Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                YourExchange.io operates as a non-custodial service. This means:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>We do not hold, store, or have access to your cryptocurrency assets</li>
                <li>We do not control or have access to your private keys</li>
                <li>Transactions are processed directly through our exchange partner's infrastructure</li>
                <li>You maintain full control and responsibility over your wallet addresses and funds</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">4. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">By using our services, you agree to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Provide accurate wallet addresses for receiving exchanged cryptocurrency</li>
                <li>Verify all transaction details before confirming</li>
                <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                <li>Not use our services for any illegal activities, including money laundering or terrorism financing</li>
                <li>Be solely responsible for any tax obligations arising from your transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">5. Risk Disclaimer</h2>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-4">
                <p className="text-sm text-yellow-200">
                  <strong>Warning:</strong> Cryptocurrency trading involves substantial risk of loss and is not suitable for every person. You should carefully consider whether trading or holding cryptocurrencies is suitable for you in light of your financial condition.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">You acknowledge and agree that:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Cryptocurrency values are highly volatile and can fluctuate significantly</li>
                <li>Past performance is not indicative of future results</li>
                <li>You may lose some or all of your investment</li>
                <li>Network congestion and blockchain issues may affect transaction times</li>
                <li>Exchange rates may change between the time you initiate and complete a transaction</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by applicable law, YourExchange.io and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or alteration of your transmissions or data</li>
                <li>Any interruption or cessation of transmission to or from our service</li>
                <li>Any errors or omissions in content provided through our service</li>
                <li>Actions or inactions of our third-party service providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">7. Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to maintain continuous availability of our services but do not guarantee uninterrupted access. We may temporarily suspend services for maintenance, updates, or other operational requirements without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">8. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, trademarks, and intellectual property on YourExchange.io are owned by us or our licensors. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">9. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any modifications constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">11. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-4">
                <a href="mailto:support@yourexchange.io" className="text-[#b1ff8c] hover:underline">
                  support@yourexchange.io
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} YourExchange.io. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <a href="mailto:support@yourexchange.io" className="text-sm text-muted-foreground hover:text-foreground">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
