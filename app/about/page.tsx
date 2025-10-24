import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Award, Users, Globe, Zap } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Reliability",
      description: "Every product meets international standards and undergoes rigorous quality checks",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "We prioritize understanding and meeting the unique needs of each healthcare provider",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making quality medical equipment available to hospitals, clinics, NGOs, and home care",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying at the forefront of medical technology to serve our clients better",
    },
  ]

  const team = [
    {
      name: "Dr. Amara Okonkwo",
      role: "Founder & CEO",
      bio: "20+ years in medical equipment distribution with a passion for improving healthcare access",
    },
    {
      name: "Mr. Rajesh Kumar",
      role: "Operations Director",
      bio: "Expert in supply chain management and logistics for medical equipment",
    },
    {
      name: "Ms. Elena Rodriguez",
      role: "Quality Assurance Manager",
      bio: "Ensures all equipment meets international standards and certifications",
    },
    {
      name: "Mr. David Chen",
      role: "Customer Support Lead",
      bio: "Dedicated to providing exceptional service and technical support to all clients",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About NewHealthMedicals</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Trusted partner in medical equipment distribution, committed to bringing reliable, quality healthcare
            solutions to hospitals, clinics, pharmacies, NGOs, and home care patients worldwide.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                NewHealthMedicals was founded with a simple mission: to make quality medical equipment accessible and
                reliable for every healthcare provider, regardless of size or location.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Starting from a small operation, we've grown to become a trusted partner for hospitals, clinics,
                pharmacies, NGOs, and home care providers across the region. Our success is built on one core principle:
                <span className="font-semibold text-primary"> Reliability</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every product we distribute undergoes rigorous quality checks. Every installation is handled by trained
                professionals. Every customer receives dedicated support. This commitment to reliability has made us the
                preferred choice for healthcare providers who refuse to compromise on quality.
              </p>
            </div>
            <img src="/about-company-story.jpg" alt="NewHealthMedicals Team" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-border hover:shadow-md transition">
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose NewHealthMedicals?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Quality Assurance",
                description:
                  "All equipment meets international medical standards and undergoes rigorous testing before distribution.",
              },
              {
                title: "Professional Installation",
                description:
                  "Our trained installation team ensures proper setup and minimal downtime for your facility.",
              },
              {
                title: "Comprehensive Support",
                description:
                  "Dedicated customer support team available for technical assistance, maintenance, and troubleshooting.",
              },
              {
                title: "Competitive Pricing",
                description:
                  "We offer excellent value without compromising on quality, with flexible payment options available.",
              },
              {
                title: "Wide Product Range",
                description:
                  "From hospital beds to diagnostic tools, surgical instruments to mobility aids—we have it all.",
              },
              {
                title: "Reliable Delivery",
                description:
                  "Efficient logistics network ensures timely delivery to your location, even in remote areas.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-border text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-1">{member.name}</h3>
                <p className="text-secondary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how NewHealthMedicals can support your healthcare facility's needs.
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
