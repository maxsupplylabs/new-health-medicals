"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useChat } from "@/lib/chat-context"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { setIsOpen: setChatOpen } = useChat()

  const handleQuoteClick = () => {
    setChatOpen(true)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-32 h-32 bg-prmary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                <Image src="/new-health-med-logo.svg" className="w-32 h-32 object-contain" alt="New Health Medicals" width={28} height={28} />
              </span>
            </div>
            {/* <span className="font-bold text-lg text-foreground hidden sm:inline">New Health Medicals</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition">
              Products
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition">
              Blog & News
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </nav>

          {/* CTA Button - Now opens chat instead of linking to contact page */}
          <button
            onClick={handleQuoteClick}
            className="hidden md:inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition font-medium"
          >
            Request Quote
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="/" className="text-foreground hover:text-primary transition py-2">
              Home
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition py-2">
              Products
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition py-2">
              Blog & News
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition py-2">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition py-2">
              Contact
            </Link>
            <button
              onClick={handleQuoteClick}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition font-medium text-center"
            >
              Request Quote
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
