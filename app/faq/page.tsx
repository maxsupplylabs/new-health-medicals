"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

const faqItems: FAQItem[] = [
  {
    id: "products-1",
    category: "Products & Services",
    question: "What types of medical equipment do you distribute?",
    answer:
      "We distribute a comprehensive range of modern medical equipment including hospital beds, diagnostic tools, surgical instruments, mobility aids, and home care equipment. All our products are certified (ISO 13485, CE, FDA approved) and sourced from trusted manufacturers. We serve hospitals, clinics, pharmacies, NGOs, and home-care patients.",
  },
  {
    id: "products-2",
    category: "Products & Services",
    question: "Do you provide installation and training services?",
    answer:
      "Yes, we provide professional installation services for all equipment. Our trained technicians ensure proper setup and functionality. We also offer comprehensive training to your staff on equipment operation, maintenance, and safety protocols. Installation and training are included in our service packages.",
  },
  {
    id: "products-3",
    category: "Products & Services",
    question: "Can you customize equipment for specific needs?",
    answer:
      "Absolutely. We understand that different healthcare facilities have unique requirements. We work closely with clients to customize equipment specifications, configurations, and features. Contact our team via chat or phone to discuss your specific needs and get a tailored solution.",
  },
  {
    id: "ordering-1",
    category: "Ordering & Quotes",
    question: "How do I request a quote?",
    answer:
      'You can request a quote in three ways: (1) Use the "Request Quote" button on any product page - it will open our Crisp chat where you can specify quantity and details, (2) Contact us directly via phone, WhatsApp, or email, or (3) Visit our contact page for bulk orders. We typically respond within 24 hours.',
  },
  {
    id: "ordering-2",
    category: "Ordering & Quotes",
    question: "What are your bulk order discounts?",
    answer:
      "We offer competitive bulk pricing based on order volume. Discounts increase with larger quantities. For specific pricing on bulk orders, please contact our sales team through the chat widget or directly. We'll provide a customized quote based on your exact requirements and order size.",
  },
  {
    id: "ordering-3",
    category: "Ordering & Quotes",
    question: "What is the minimum order quantity?",
    answer:
      "We accommodate orders of all sizes, from single units to large bulk orders. There is no strict minimum order quantity. However, bulk orders (typically 10+ units) qualify for special pricing and faster processing. Contact us to discuss your specific needs.",
  },
  {
    id: "delivery-1",
    category: "Delivery & Logistics",
    question: "What are your delivery timeframes?",
    answer:
      "Standard delivery typically takes 3-5 business days for in-stock items. Lead times vary depending on product availability and location. For custom orders or large shipments, we provide estimated delivery dates upon quote confirmation. We offer expedited delivery options for urgent requirements.",
  },
  {
    id: "delivery-2",
    category: "Delivery & Logistics",
    question: "Do you deliver internationally?",
    answer:
      "Yes, we provide international shipping to most countries. Delivery times and costs vary based on destination. We handle all customs documentation and logistics coordination. Contact us with your location and requirements for international shipping details and pricing.",
  },
  {
    id: "delivery-3",
    category: "Delivery & Logistics",
    question: "Is shipping included in the product price?",
    answer:
      "Shipping costs are calculated separately based on order size, weight, and destination. We provide transparent shipping quotes upfront. For bulk orders, we often negotiate favorable shipping rates. Free shipping may be available for large orders - ask our team for details.",
  },
  {
    id: "warranty-1",
    category: "Warranty & Support",
    question: "What warranty do your products come with?",
    answer:
      "Most products come with a 2-year comprehensive warranty covering manufacturing defects and equipment failure. Warranty terms vary by product type. Extended warranty options are available for additional protection. All warranty details are clearly listed on product pages and included in your purchase documentation.",
  },
  {
    id: "warranty-2",
    category: "Warranty & Support",
    question: "What happens if equipment fails during warranty?",
    answer:
      "If equipment fails during the warranty period, we provide repair or replacement at no cost. We offer on-site repair service for critical equipment. For non-critical items, we arrange pickup and repair. Our goal is to minimize downtime for your facility. Contact our support team immediately if issues arise.",
  },
  {
    id: "warranty-3",
    category: "Warranty & Support",
    question: "Do you offer maintenance contracts?",
    answer:
      "Yes, we offer comprehensive maintenance contracts tailored to your needs. These include regular inspections, preventive maintenance, priority repair service, and spare parts. Maintenance contracts help extend equipment life and ensure optimal performance. Contact us for customized maintenance package pricing.",
  },
  {
    id: "compliance-1",
    category: "Compliance & Certifications",
    question: "Are your products certified and compliant?",
    answer:
      "All our products are certified to international standards including ISO 13485 (medical devices), CE marked for European compliance, and FDA approved where applicable. We maintain strict quality control and regulatory compliance. Certification documentation is available upon request.",
  },
  {
    id: "compliance-2",
    category: "Compliance & Certifications",
    question: "Do you help with regulatory compliance for healthcare facilities?",
    answer:
      "Yes, we assist healthcare facilities with equipment compliance requirements. We provide documentation, certifications, and guidance on regulatory standards. Our team understands healthcare regulations and can help ensure your facility meets all requirements. This is especially valuable for NGOs and new facilities.",
  },
  {
    id: "support-1",
    category: "Customer Support",
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team through multiple channels: (1) Crisp chat widget on our website for instant assistance, (2) Phone for urgent matters, (3) WhatsApp for quick messages, or (4) Email for detailed inquiries. Our team is available during business hours and responds promptly to all inquiries.",
  },
  {
    id: "support-2",
    category: "Customer Support",
    question: "Do you provide technical support after purchase?",
    answer:
      "Absolutely. We provide comprehensive post-purchase technical support including troubleshooting, operation guidance, and maintenance advice. Our technical team is available to assist with any equipment-related questions. Support is included with all purchases and extended support contracts are available.",
  },
  {
    id: "support-3",
    category: "Customer Support",
    question: "What if I have questions about a specific product?",
    answer:
      "Each product page includes detailed specifications, features, and applications. You can also use the Crisp chat widget to ask product-specific questions - our team will provide detailed information. For complex inquiries, we can arrange a call or video consultation with our product specialists.",
  },
]

const categories = Array.from(new Set(faqItems.map((item) => item.category)))

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredItems = selectedCategory ? faqItems.filter((item) => item.category === selectedCategory) : faqItems

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h1>
          <p className="text-lg text-white/90 text-balance">
            Find answers to common questions about our medical equipment, services, and support
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            <Button
              onClick={() => setSelectedCategory(null)}
              variant={selectedCategory === null ? "default" : "outline"}
              className="rounded-full"
            >
              All Categories
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="border border-border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/50 transition-colors text-left"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg">{item.question}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.category}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 ml-4 transition-transform duration-300 ${
                      expandedId === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                {expandedId === item.id && (
                  <div className="px-6 py-4 bg-secondary/30 border-t border-border">
                    <p className="text-foreground leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">Didn't find your answer?</h2>
            <p className="text-foreground/80 mb-6">
              Our team is here to help. Contact us through Crisp chat, phone, WhatsApp, or email for personalized
              assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90">Start Chat with Us</Button>
              <Button variant="outline">View Contact Info</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
