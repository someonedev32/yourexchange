import Link from 'next/link';
import { RefreshCcw, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Privacy Policy | YourExchange.io',
  description: 'Privacy Policy for YourExchange.io cryptocurrency exchange platform.',
};

export default function PrivacyPage() {
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
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: June 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                YourExchange.io ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our cryptocurrency exchange services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">2. Information We Collect</h2>
              
              <h3 className="text-lg font-medium mt-6 mb-3">2.1 Information You Provide</h3>
              <p className="text-muted-foreground leading-relaxed">
                When using our exchange widget, you may provide:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Cryptocurrency wallet addresses (for receiving exchanged coins)</li>
                <li>Email address (if you choose to contact support)</li>
                <li>Transaction-related information necessary to process exchanges</li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may automatically collect certain information when you visit our website:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>IP address and approximate geographic location</li>
                <li>Browser type and version</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">3. Third-Party Service Provider</h2>
              <div className="bg-card/50 border border-border/50 rounded-xl p-4 mb-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Important:</strong> Our exchange functionality is powered by ChangeNOW, a third-party service provider. When you use our exchange widget, ChangeNOW processes your transaction data according to their own privacy practices.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                ChangeNOW may collect and process:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Wallet addresses you provide for transactions</li>
                <li>Transaction amounts and cryptocurrency pairs</li>
                <li>Transaction history and status</li>
                <li>Technical data related to your transactions</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For more information about how ChangeNOW handles your data, please review their{' '}
                <a href="https://changenow.io/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#b1ff8c] hover:underline">
                  Privacy Policy
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">4. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Facilitate and process cryptocurrency exchanges through our widget</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Monitor and analyze usage patterns to improve our services</li>
                <li>Detect and prevent fraudulent or unauthorized activities</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">5. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use cookies and similar tracking technologies to collect information about your browsing activities. These technologies help us:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you interact with our website</li>
                <li>Analyze website traffic and performance</li>
                <li>Provide personalized content and experiences</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">6. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">We may share your information with:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li><strong>Service Providers:</strong> Third parties who assist us in operating our website and services (e.g., ChangeNOW for exchange processing)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">7. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">8. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Transaction data may be retained as required for legal, regulatory, or business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">9. Your Rights and Choices</h2>
              <p className="text-muted-foreground leading-relaxed">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Rectify inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">10. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer your information, we take appropriate safeguards to ensure your information remains protected.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">11. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">12. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">13. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="mt-4">
                <a href="mailto:support@yourexchange.io" className="text-[#b1ff8c] hover:underline">
                  support@yourexchange.io
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-[#b1ff8c]">14. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
              <div className="bg-card/50 border border-border/50 rounded-xl p-4 mt-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Related Third-Party Policies:</strong>
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <a href="https://changenow.io/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#b1ff8c] hover:underline text-sm">
                      ChangeNOW Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://changenow.io/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-[#b1ff8c] hover:underline text-sm">
                      ChangeNOW Terms of Use
                    </a>
                  </li>
                </ul>
              </div>
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
