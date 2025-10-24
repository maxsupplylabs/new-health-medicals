import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { CheckCircle, Zap, Shield, Users } from "lucide-react"
import { QuoteRequestSection } from "@/components/quote-request-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { HeroCarousel } from "@/components/hero-carousel"

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Electric Hospital Bed",
      category: "Hospital Beds",
      price: "$2,500",
      image: "/electric-hospital-bed-medical-equipment.jpg",
      description: "Adjustable electric hospital bed with safety rails and mattress",
    },
    {
      id: 2,
      name: "Digital Blood Pressure Monitor",
      category: "Diagnostic Tools",
      price: "$150",
      image: "/digital-blood-pressure-monitor.png",
      description: "Accurate automatic blood pressure monitoring device",
    },
    {
      id: 3,
      name: "Surgical Instrument Set",
      category: "Surgical Instruments",
      price: "$800",
      image: "/surgical-instruments-medical-tools.jpg",
      description: "Complete sterilized surgical instrument set for general procedures",
    },
    {
      id: 4,
      name: "Mobility Walker",
      category: "Mobility Aids",
      price: "$200",
      image: "/mobility-walker-elderly-care.jpg",
      description: "Lightweight aluminum walker with adjustable height",
    },
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Hospital Administrator",
      hospital: "Central Medical Hospital",
      text: "New Health Medicals has been our trusted partner for 5 years. Their reliability and after-sales support are unmatched in the industry.",
      rating: 5,
    },
    {
      name: "Mr. Ahmed Hassan",
      role: "Clinic Manager",
      hospital: "Al-Noor Clinic",
      text: "The quality of equipment and professionalism of their installation team exceeded our expectations. Highly recommended!",
      rating: 5,
    },
    {
      name: "Ms. Priya Sharma",
      role: "NGO Director",
      hospital: "Health for All Foundation",
      text: "They provided us with affordable solutions without compromising on quality. Perfect for our community health programs.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <HeroCarousel />

      {/* Why Choose Us */}
      <section className="relative z-10 top-[-100px] py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground">Our commitment to reliability sets us apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Reliability",
                description: "Trusted by healthcare providers across the region for consistent quality",
              },
              {
                icon: Zap,
                title: "Fast Installation",
                description: "Professional installation team ensures quick setup and minimal downtime",
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Dedicated customer support team available for all your needs",
              },
              {
                icon: CheckCircle,
                title: "Quality Assured",
                description: "All equipment meets international medical standards and certifications",
              },
            ].map((item, index) => (
              <div key={index} className="bg-muted/50 p-6 rounded-lg border border-border hover:shadow-md transition">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground">Explore our most popular medical equipment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition cursor-pointer h-full flex flex-col">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="text-sm text-secondary font-semibold mb-2">{product.category}</p>
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <span className="text-primary hover:underline text-sm font-semibold">View Details →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/90 transition font-semibold"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <QuoteRequestSection />

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Medical Equipment?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today for a personalized quote and consultation with our medical equipment specialists.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg hover:bg-primary-foreground/90 transition font-semibold"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
