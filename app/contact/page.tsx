"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, MessageCircle, Mail, Clock } from "lucide-react"
import { useChat } from "@/lib/chat-context"

export default function ContactPage() {
  const { setIsOpen: setChatOpen } = useChat()

  const handleQuoteClick = () => {
    setChatOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with our team for product inquiries, quotes, or support
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                </div>
                <a href="tel:+1234567890" className="text-primary hover:underline font-semibold text-lg">
                  +1 (234) 567-890
                </a>
                <p className="text-muted-foreground text-sm mt-2">Available Monday - Friday, 9AM - 6PM</p>
              </div>

              {/* WhatsApp */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                </div>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline font-semibold text-lg"
                >
                  +1 (234) 567-890
                </a>
                <p className="text-muted-foreground text-sm mt-2">Quick messages and support</p>
              </div>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                </div>
                <a
                  href="mailto:info@New Health Medicals.com"
                  className="text-accent hover:underline font-semibold text-lg"
                >
                  info@newhealthmedicals.com
                </a>
                <p className="text-muted-foreground text-sm mt-2">We respond within 24 hours</p>
              </div>

              {/* Office Hours */}
              <div className="bg-muted/50 p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-primary" size={24} />
                  <h3 className="font-semibold text-foreground">Office Hours</h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-8">How Can We Help?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: "Product Inquiries",
                    description: "Learn more about our medical equipment and specifications",
                    icon: "📋",
                  },
                  {
                    title: "Request a Quote",
                    description: "Get pricing for bulk orders or custom requirements",
                    icon: "💰",
                  },
                  {
                    title: "Installation Support",
                    description: "Schedule professional installation for your facility",
                    icon: "🔧",
                  },
                  {
                    title: "Technical Support",
                    description: "Get help with equipment maintenance and troubleshooting",
                    icon: "🛠️",
                  },
                  {
                    title: "Bulk Orders",
                    description: "Special pricing and terms for large quantity orders",
                    icon: "📦",
                  },
                  {
                    title: "Custom Solutions",
                    description: "Discuss specialized equipment needs for your organization",
                    icon: "⚙️",
                  },
                ].map((option, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-border hover:shadow-md transition">
                    <div className="text-3xl mb-3">{option.icon}</div>
                    <h3 className="font-semibold text-foreground mb-2">{option.title}</h3>
                    <p className="text-muted-foreground text-sm">{option.description}</p>
                  </div>
                ))}
              </div>

              {/* Quick Contact Info */}
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg">
                <h3 className="font-semibold text-foreground mb-4">Quick Contact Methods</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">For immediate assistance:</p>
                    <p className="font-semibold text-foreground">
                      Call us at{" "}
                      <a href="tel:+1234567890" className="text-primary hover:underline">
                        +1 (234) 567-890
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">For quick messages:</p>
                    <p className="font-semibold text-foreground">
                      Message us on{" "}
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline"
                      >
                        WhatsApp
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">For detailed inquiries:</p>
                    <p className="font-semibold text-foreground">
                      Email us at{" "}
                      <a href="mailto:info@New Health Medicals.com" className="text-accent hover:underline">
                        info@newhealthmedicals.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-white p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Hospitals",
                "Clinics",
                "Pharmacies",
                "NGOs",
                "Home Care Providers",
                "Rehabilitation Centers",
                "Nursing Homes",
                "Medical Training Institutions",
                "Wellness Centers",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Reach out to our team today and let's find the perfect medical equipment solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg hover:bg-primary-foreground/90 transition font-semibold"
            >
              Call Now
            </a>
            <button
              // href="https://wa.me/1234567890"
              // target="_blank"
              // rel="noopener noreferrer"
            onClick={handleQuoteClick}
              className="inline-block border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary-foreground/10 transition font-semibold"
            >
              Let's chat
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
