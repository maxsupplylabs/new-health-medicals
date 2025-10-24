"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useChat } from "@/lib/chat-context"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { setIsOpen: setChatOpen } = useChat()

  // Detect scroll and toggle blurred background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleQuoteClick = () => {
    setChatOpen(true)
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/80 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto pl-2 pr-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:ml-6">
            <Image
              src={
                scrolled
                  ? "/new-health-medicals-logo-white.svg"
                  : "/new-health-medicals-logo-black.svg"
              }
              alt="New Health Medicals"
              width={120}
              height={120}
              className="w-32 h-32 object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/blog", label: "Blog & News" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition font-medium ${
                  scrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-primary-foreground/90"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={handleQuoteClick}
            className={`hidden md:inline-block px-6 py-2 rounded-lg font-medium transition ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-white text-primary hover:bg-white/90"
            }`}
          >
            Request Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition ${
              scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            className={`md:hidden pb-4 flex flex-col gap-3 transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Link href="/" className="hover:text-primary transition py-2">
              Home
            </Link>
            <Link href="/products" className="hover:text-primary transition py-2">
              Products
            </Link>
            <Link href="/blog" className="hover:text-primary transition py-2">
              Blog & News
            </Link>
            <Link href="/about" className="hover:text-primary transition py-2">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition py-2">
              Contact
            </Link>
            <button
              onClick={handleQuoteClick}
              className={`px-4 py-2 rounded-lg font-medium text-center transition ${
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Request Quote
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
