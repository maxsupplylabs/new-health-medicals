"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  organization: string
  text: string
  rating: number
  image?: string
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const defaultTestimonials: Testimonial[] = [
    {
      name: "Dr. Sarah Johnson",
      role: "Hospital Administrator",
      organization: "Central Medical Hospital",
      text: "NewHealthMedicals has been our trusted partner for 5 years. Their reliability and after-sales support are unmatched in the industry. Every piece of equipment works flawlessly.",
      rating: 5,
    },
    {
      name: "Mr. Ahmed Hassan",
      role: "Clinic Manager",
      organization: "Al-Noor Clinic",
      text: "The quality of equipment and professionalism of their installation team exceeded our expectations. They understood our needs and provided the perfect solutions. Highly recommended!",
      rating: 5,
    },
    {
      name: "Ms. Priya Sharma",
      role: "NGO Director",
      organization: "Health for All Foundation",
      text: "They provided us with affordable solutions without compromising on quality. Perfect for our community health programs. Their support team is always available when we need them.",
      rating: 5,
    },
    {
      name: "Dr. James Okafor",
      role: "Medical Director",
      organization: "Wellness Clinic Network",
      text: "Reliability is not just a word for them—it's their practice. We've never had a single equipment failure. Their commitment to quality is evident in every interaction.",
      rating: 5,
    },
    {
      name: "Ms. Linda Chen",
      role: "Home Care Coordinator",
      organization: "Senior Care Services",
      text: "The mobility aids and monitoring equipment we purchased have transformed our home care services. Patients and families are extremely satisfied with the quality and durability.",
      rating: 5,
    },
  ]

  const items = testimonials || defaultTestimonials
  const visibleCount = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, items.length - visibleCount + 1))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, items.length - visibleCount + 1)) % Math.max(1, items.length - visibleCount + 1),
    )
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">Trusted by healthcare providers worldwide</p>
        </div>

        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
            {items.slice(currentIndex, currentIndex + visibleCount).map((testimonial, index) => (
              <div key={index} className="bg-muted/50 p-6 rounded-lg border border-border hover:shadow-md transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-secondary font-medium">{testimonial.organization}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {items.length > visibleCount && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-lg border border-border hover:bg-muted transition"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={24} className="text-primary" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-lg border border-border hover:bg-muted transition"
                aria-label="Next testimonials"
              >
                <ChevronRight size={24} className="text-primary" />
              </button>
            </div>
          )}

          {/* Dots Indicator */}
          {items.length > visibleCount && (
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(Math.max(1, items.length - visibleCount + 1))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition ${index === currentIndex ? "bg-primary" : "bg-border"}`}
                  aria-label={`Go to testimonial set ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
