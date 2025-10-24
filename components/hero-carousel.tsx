"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  cta: string
  ctaLink: string
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Reliable Medical Equipment",
    subtitle: "Trusted by Healthcare Providers",
    description: "Professional-grade equipment for hospitals, clinics, and home care with comprehensive support",
    image: "/electric-hospital-bed-medical-equipment.jpg",
    cta: "Browse Catalog",
    ctaLink: "/products",
  },
  {
    id: 2,
    title: "Advanced Diagnostic Tools",
    subtitle: "Precision & Accuracy",
    description: "State-of-the-art diagnostic equipment for accurate patient assessment and monitoring",
    image: "/digital-blood-pressure-monitor.png",
    cta: "Request Quote",
    ctaLink: "/contact",
  },
  {
    id: 3,
    title: "Professional Installation",
    subtitle: "Expert Support & Service",
    description: "Complete installation, training, and ongoing maintenance for all medical equipment",
    image: "/modern-medical-equipment-hospital.jpg",
    cta: "Contact Us",
    ctaLink: "/contact",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
    // Resume auto-play after 10 seconds of user interaction
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative w-full h-screen max-h-[600px] md:max-h-[700px] overflow-hidden bg-background">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {heroSlides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${s.image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </div>

            {/* Content - Layered Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 lg:px-16">
              <div className="max-w-2xl">
                {/* Subtitle */}
                <div className="mb-4 md:mb-6">
                  <p className="text-sm md:text-base font-semibold text-blue-300 tracking-widest uppercase">
                    {s.subtitle}
                  </p>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight text-balance">
                  {s.title}
                </h1>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-100 mb-8 md:mb-10 max-w-xl leading-relaxed">
                  {s.description}
                </p>

                {/* CTA Button */}
                <Link
                  href={s.ctaLink}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 md:px-10 py-3 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {s.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button> */}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "bg-white w-8 md:w-10 h-2 md:h-3"
                : "bg-white/50 hover:bg-white/75 w-2 md:w-3 h-2 md:h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      {/* <div className="absolute top-6 md:top-8 right-6 md:right-8 z-20 text-white text-sm md:text-base font-semibold bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
        {currentSlide + 1} / {heroSlides.length}
      </div> */}
    </section>
  )
}
