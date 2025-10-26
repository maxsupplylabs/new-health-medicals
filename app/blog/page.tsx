"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const posts = [
    {
      id: 1,
      title: "The Importance of Reliable Medical Equipment in Healthcare",
      excerpt:
        "Discover why reliability is the cornerstone of quality healthcare delivery and how it impacts patient outcomes.",
      category: "Healthcare",
      author: "Dr. Sarah Johnson",
      date: "October 15, 2025",
      image: "/blog/medical-equipment-reliability.webp",
      content: `Reliability in medical equipment is not just a feature—it's a necessity. When healthcare providers depend on equipment to monitor vital signs, deliver medications, or support patient mobility, any failure can have serious consequences.

At New Health Medicals, we understand this responsibility. Every piece of equipment we distribute undergoes rigorous quality checks to ensure it meets international standards and performs consistently.

Key points about medical equipment reliability:
- Reduces patient risk and improves safety
- Minimizes downtime and operational disruptions
- Builds trust between healthcare providers and equipment suppliers
- Ensures compliance with regulatory requirements
- Extends equipment lifespan through proper maintenance

Our commitment to reliability means you can focus on what matters most—providing excellent patient care.`,
    },
    {
      id: 2,
      title: "Latest Advances in Diagnostic Medical Technology",
      excerpt:
        "Explore the cutting-edge diagnostic tools transforming how healthcare professionals detect and treat diseases.",
      category: "Technology",
      author: "Mr. Ahmed Hassan",
      date: "October 10, 2025",
      image: "/blog/diagnostic-medical-technology.jpg",
      content: `The field of diagnostic medicine is evolving rapidly. New technologies are making it easier, faster, and more accurate to diagnose conditions early, when treatment is most effective.

From portable ultrasound devices to AI-powered diagnostic systems, modern medical equipment is revolutionizing healthcare delivery. These advances are particularly valuable in remote areas and resource-limited settings.

Recent innovations include:
- Portable diagnostic devices for point-of-care testing
- AI-assisted image analysis for faster diagnosis
- Telemedicine-compatible equipment
- Non-invasive monitoring technologies
- Real-time data transmission capabilities

New Health Medicals stays at the forefront of these innovations, ensuring our clients have access to the latest diagnostic tools.`,
    },
    {
      id: 3,
      title: "Choosing the Right Hospital Bed for Your Facility",
      excerpt:
        "A comprehensive guide to selecting hospital beds that balance patient comfort, caregiver efficiency, and budget.",
      category: "Equipment Guide",
      author: "Ms. Priya Sharma",
      date: "October 5, 2025",
      image: "/blog/hospital-bed-selection.webp",
      content: `Selecting the right hospital bed is a critical decision that affects patient care quality and staff efficiency. Here's what you need to consider:

1. Patient Needs
- Mobility level of patients
- Weight capacity requirements
- Special medical conditions

2. Functionality
- Manual vs. electric adjustment
- Height adjustment range
- Safety features and rails

3. Durability and Maintenance
- Material quality
- Ease of cleaning
- Warranty and support

4. Budget Considerations
- Initial cost
- Long-term maintenance expenses
- Lifespan and ROI

Our team at New Health Medicals can help you evaluate these factors and find the perfect solution for your facility.`,
    },
    {
      id: 4,
      title: "Supporting Home Care: Essential Equipment for Elderly Patients",
      excerpt: "Learn about the mobility aids and monitoring devices that enable safe and comfortable home-based care.",
      category: "Home Care",
      author: "Dr. Sarah Johnson",
      date: "September 28, 2025",
      image: "/blog/home-health-essentials.webp",
      content: `Home care is becoming increasingly popular as patients prefer to recover in familiar environments. The right equipment makes this possible while ensuring safety and comfort.

Essential home care equipment includes:
- Mobility aids (walkers, wheelchairs, canes)
- Monitoring devices (blood pressure monitors, pulse oximeters)
- Bathroom safety equipment
- Adjustable beds and mattresses
- Communication devices

Benefits of proper home care equipment:
- Increased patient independence
- Reduced fall risk
- Better quality of life
- Lower healthcare costs
- Improved family involvement in care

New Health Medicals provides comprehensive home care solutions tailored to individual patient needs.`,
    },
    {
      id: 5,
      title: "NGO Healthcare Initiatives: Equipping Clinics in Underserved Areas",
      excerpt:
        "How NGOs are using quality medical equipment to bring healthcare services to remote and underserved communities.",
      category: "Community Health",
      author: "Mr. Ahmed Hassan",
      date: "September 20, 2025",
      image: "/blog/ngo-healthcare.jpg",
      content: `NGOs play a vital role in extending healthcare services to underserved populations. Access to quality medical equipment is essential for their success.

Challenges faced by NGOs:
- Limited budgets
- Remote locations with difficult logistics
- Need for durable, low-maintenance equipment
- Training requirements for staff

Solutions that work:
- Portable and lightweight equipment
- Solar-powered devices for off-grid areas
- Bulk purchasing discounts
- Comprehensive training and support
- Reliable after-sales service

New Health Medicals partners with NGOs to provide affordable, reliable equipment that makes a real difference in communities.`,
    },
    {
      id: 6,
      title: "Infection Control: Sterilization and Maintenance of Surgical Instruments",
      excerpt: "Best practices for maintaining surgical instruments to ensure patient safety and equipment longevity.",
      category: "Best Practices",
      author: "Ms. Priya Sharma",
      date: "September 15, 2025",
      image: "/blog/surgical-instruments-care.webp ",
      content: `Proper sterilization and maintenance of surgical instruments is critical for patient safety and infection control. Here's what healthcare facilities need to know:

Sterilization Methods:
- Autoclaving (steam sterilization)
- Chemical sterilization
- Dry heat sterilization
- Ethylene oxide sterilization

Maintenance Best Practices:
- Regular inspection for damage
- Proper cleaning before sterilization
- Correct storage in sterile environments
- Documentation of sterilization cycles
- Staff training on handling procedures

Quality Assurance:
- Use validated sterilization processes
- Regular equipment calibration
- Biological indicator testing
- Compliance with international standards

Our surgical instrument sets come with comprehensive care guidelines to ensure optimal performance and longevity.`,
    },
  ]

  const categories = [
    "all",
    "Healthcare",
    "Technology",
    "Equipment Guide",
    "Home Care",
    "Community Health",
    "Best Practices",
  ]

  const filteredPosts = posts.filter((post) => selectedCategory === "all" || post.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog & News</h1>
          <p className="text-lg text-muted-foreground">
            Insights, updates, and best practices in medical equipment and healthcare
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition text-sm ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "bg-muted/50 text-foreground hover:bg-muted"
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="flex flex-col gap-2">
                {filteredPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`}>
                    <div className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition cursor-pointer">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                        <div className="md:col-span-2 p-6 flex flex-col justify-between">
                          <div>
                            <p className="text-sm text-secondary font-semibold mb-2">{post.category}</p>
                            <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition">
                              {post.title}
                            </h2>
                            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar size={16} />
                                {post.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <User size={16} />
                                {post.author}
                              </div>
                            </div>
                            <ArrowRight className="text-primary" size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
