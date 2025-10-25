"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useChat } from "@/lib/chat-context"
import Link from "next/link"
import { useState } from "react"
import { CheckCircle, Truck, Shield, Phone } from "lucide-react"
import { CertificationBadges } from "@/components/certification-badges"
import { ProductAvailability } from "@/components/product-availability"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const { setIsOpen, setQuoteContext, addMessage } = useChat()

  const products: Record<
    string,
    {
      name: string
      category: string
      price: string
      image: string
      description: string
      fullDescription: string
      specs: string[]
      features: string[]
      applications: string[]
      certifications?: string[]
      stock?: "in-stock" | "limited" | "pre-order"
      leadTime?: string
      warranty?: string
    }
  > = {
    "1": {
      name: "Electric Hospital Bed",
      category: "Hospital Beds",
      price: "$2,500",
      image: "/electric-hospital-bed-medical-equipment.jpg",
      description: "Adjustable electric hospital bed with safety rails and mattress",
      fullDescription:
        "Our premium electric hospital bed is designed for maximum patient comfort and caregiver convenience. Features smooth electric adjustment for head, foot, and height positioning. Includes safety rails, emergency backup battery, and a high-quality medical mattress.",
      specs: [
        "Electric adjustment (head, foot, height)",
        "Safety rails included",
        "Premium medical mattress",
        "Weight capacity: 300kg",
        "Dimensions: 210cm x 100cm x 30-80cm",
        "Emergency backup battery",
      ],
      features: [
        "Smooth and quiet operation",
        "Easy-to-use remote control",
        "Durable stainless steel frame",
        "Easy cleaning and maintenance",
        "Meets international medical standards",
      ],
      applications: ["Hospitals", "Clinics", "Home care", "Nursing homes", "Rehabilitation centers"],
      certifications: ["ISO 13485", "CE Certified", "FDA Approved"],
      stock: "in-stock",
      leadTime: "3-5 business days",
      warranty: "2 years comprehensive",
    },
    "2": {
      name: "Digital Blood Pressure Monitor",
      category: "Diagnostic Tools",
      price: "$150",
      image: "/digital-blood-pressure-monitor.png",
      description: "Accurate automatic blood pressure monitoring device",
      fullDescription:
        "Professional-grade digital blood pressure monitor with automatic inflation and deflation. Provides accurate systolic, diastolic, and pulse readings. Features memory storage for tracking readings over time.",
      specs: [
        "Automatic inflation/deflation",
        "Digital LCD display",
        "Memory storage (60 readings)",
        "Measurement range: 0-299 mmHg",
        "Pulse range: 40-180 bpm",
        "Battery powered (4 AA batteries)",
      ],
      features: [
        "Highly accurate readings",
        "Easy one-button operation",
        "Portable and lightweight",
        "Irregular heartbeat detection",
        "Hypertension indicator",
      ],
      applications: ["Clinics", "Pharmacies", "Home care", "Hospitals", "Wellness centers"],
      certifications: ["ISO 13485", "CE Certified"],
      stock: "in-stock",
      leadTime: "2-3 business days",
      warranty: "1 year",
    },
    "3": {
      name: "Surgical Instrument Set",
      category: "Surgical Instruments",
      price: "$800",
      image: "/surgical-instruments-medical-tools.jpg",
      description: "Complete sterilized surgical instrument set for general procedures",
      fullDescription:
        "Comprehensive surgical instrument set containing all essential tools for general surgical procedures. All instruments are made from premium stainless steel and come pre-sterilized and ready for use.",
      specs: [
        "Complete 50-piece set",
        "Premium stainless steel",
        "Pre-sterilized and ready to use",
        "Includes carrying case",
        "Meets ISO 13485 standards",
        "Includes: forceps, scissors, retractors, clamps, and more",
      ],
      features: [
        "High-quality surgical grade steel",
        "Precision-engineered instruments",
        "Easy to sterilize and maintain",
        "Professional carrying case",
        "Lifetime warranty on defects",
      ],
      applications: ["Hospitals", "Surgical centers", "Clinics", "Medical training institutions"],
      certifications: ["ISO 13485", "CE Certified", "FDA Approved"],
      stock: "limited",
      leadTime: "5-7 business days",
      warranty: "Lifetime on defects",
    },
    "4": {
      name: "Mobility Walker",
      category: "Mobility Aids",
      price: "$200",
      image: "/mobility-walker-elderly-care.jpg",
      description: "Lightweight aluminum walker with adjustable height",
      fullDescription:
        "Durable and lightweight aluminum walker designed for elderly and mobility-impaired patients. Features adjustable height to accommodate different user heights and includes comfortable grip handles.",
      specs: [
        "Lightweight aluminum frame",
        "Adjustable height (75-95cm)",
        "Weight capacity: 150kg",
        "Includes wheels and brakes",
        "Comfortable grip handles",
        "Easy to fold for storage",
      ],
      features: [
        "Lightweight yet sturdy",
        "Smooth-rolling wheels",
        "Reliable braking system",
        "Comfortable ergonomic handles",
        "Easy to clean",
      ],
      applications: ["Home care", "Hospitals", "Rehabilitation centers", "Nursing homes", "Clinics"],
      certifications: ["ISO 13485", "CE Certified"],
      stock: "in-stock",
      leadTime: "2-3 business days",
      warranty: "1 year",
    },
  }

  const product = products[params.id] || products["1"]

  const handleRequestQuote = () => {
    setQuoteContext({
      productName: product.name,
      productId: params.id,
      quantity,
      price: product.price,
    })
    setIsOpen(true)
    addMessage(
      `Hi! I'm interested in requesting a quote for ${quantity} unit(s) of ${product.name} (${product.price}). Can you help me with that?`,
      "user",
    )
  }

  const handleBulkOrder = () => {
    setQuoteContext({
      productName: product.name,
      productId: params.id,
      quantity,
      price: product.price,
    })
    setIsOpen(true)
    addMessage(
      `Hello! I'm interested in a bulk order for ${quantity} unit(s) of ${product.name}. What bulk pricing options are available?`,
      "user",
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/products" className="text-primary hover:underline">
              Products
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Image */}
            <div>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Details */}
            <div>
              <p className="text-secondary font-semibold mb-2">{product.category}</p>
              <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-primary mb-6">{product.price}</p>

              <p className="text-lg text-muted-foreground mb-6">{product.fullDescription}</p>

              {product.certifications && (
                <div className="mb-6">
                  <CertificationBadges certifications={product.certifications} />
                </div>
              )}

              {/* Quantity and CTA */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-foreground hover:bg-muted transition"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 text-foreground font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-foreground hover:bg-muted transition"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <button
                  onClick={handleRequestQuote}
                  className="block w-full bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition font-semibold text-center"
                >
                  Request Quote via Chat
                </button>
                <button
                  onClick={handleBulkOrder}
                  className="block w-full border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition font-semibold text-center"
                >
                  Bulk Order via Chat
                </button>
              </div>

              <div className="mb-8">
                <ProductAvailability stock={product.stock} leadTime={product.leadTime} warranty={product.warranty} />
              </div>

              {/* Benefits */}
              <div className="space-y-3 bg-muted/50 p-6 rounded-lg">
                <div className="flex items-center gap-3">
                  <Truck className="text-primary" size={20} />
                  <span className="text-foreground">Professional installation available</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="text-primary" size={20} />
                  <span className="text-foreground">Quality assured & certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary" size={20} />
                  <span className="text-foreground">Dedicated customer support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications and Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Specifications</h2>
              <ul className="space-y-3">
                {product.specs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Applications */}
          <div className="bg-white p-8 rounded-lg border border-border mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Ideal For</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {product.applications.map((app, index) => (
                <div key={index} className="bg-primary/10 text-primary px-4 py-3 rounded-lg text-center font-semibold">
                  {app}
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["1", "2", "3"].map((id) => {
                const relatedProduct = products[id]
                return (
                  <Link key={id} href={`/products/${id}`}>
                    <div className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition cursor-pointer">
                      <img
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <p className="text-sm text-secondary font-semibold mb-2">{relatedProduct.category}</p>
                        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{relatedProduct.name}</h3>
                        <p className="text-lg font-bold text-primary">{relatedProduct.price}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
