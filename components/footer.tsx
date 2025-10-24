import Link from "next/link"
import { Phone, MessageCircle, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">H</span>
              </div>
              <span className="font-bold text-lg">NewHealthMedicals</span>
            </div>
            <p className="text-sm opacity-90">Reliable distribution and installation of modern medical equipment.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=beds" className="hover:underline">
                  Hospital Beds
                </Link>
              </li>
              <li>
                <Link href="/products?category=diagnostic" className="hover:underline">
                  Diagnostic Tools
                </Link>
              </li>
              <li>
                <Link href="/products?category=surgical" className="hover:underline">
                  Surgical Instruments
                </Link>
              </li>
              <li>
                <Link href="/products?category=mobility" className="hover:underline">
                  Mobility Aids
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@newhealthmedicals.com" className="hover:underline">
                  info@newhealthmedicals.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 NewHealthMedicals. All rights reserved. | Reliability in Medical Equipment Distribution</p>
        </div>
      </div>
    </footer>
  )
}
