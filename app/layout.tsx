// This is your layout.tsx file - split into two components
// layout.tsx (Server Component)
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from './Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CBM Amba Ayurveda - Ancient Wisdom, Modern Healing',
  description: 'Experience authentic Ayurvedic treatments with six generations of expertise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <footer className="bg-green-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">About Us</h3>
                <p className="text-white/80 text-sm">
                  CBM Amba Ayurveda combines ancient wisdom with modern understanding for holistic healing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li><a href="/" className="hover:text-white">Home</a></li>
                  <li><a href="/services" className="hover:text-white">Services</a></li>
                  <li><a href="/products" className="hover:text-white">Products</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>123 Ayurveda Street</li>
                  <li>Bangalore, Karnataka</li>
                  <li>Phone: +91 1234567890</li>
                  <li>Email: info@cbmamba.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Hours</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>Monday - Friday: 9am - 6pm</li>
                  <li>Saturday: 9am - 4pm</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
              © {new Date().getFullYear()} CBM Amba Ayurveda. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}