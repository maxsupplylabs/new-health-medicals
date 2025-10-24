"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft } from "lucide-react"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const posts: Record<
    string,
    {
      title: string
      excerpt: string
      category: string
      author: string
      date: string
      image: string
      content: string
    }
  > = {
    "1": {
      title: "The Importance of Reliable Medical Equipment in Healthcare",
      excerpt:
        "Discover why reliability is the cornerstone of quality healthcare delivery and how it impacts patient outcomes.",
      category: "Healthcare",
      author: "Dr. Sarah Johnson",
      date: "October 15, 2025",
      image: "/blog-medical-equipment-reliability.jpg",
      content: `Reliability in medical equipment is not just a feature—it's a necessity. When healthcare providers depend on equipment to monitor vital signs, deliver medications, or support patient mobility, any failure can have serious consequences.

At New Health Medicals, we understand this responsibility. Every piece of equipment we distribute undergoes rigorous quality checks to ensure it meets international standards and performs consistently.

Key points about medical equipment reliability:
- Reduces patient risk and improves safety
- Minimizes downtime and operational disruptions
- Builds trust between healthcare providers and equipment suppliers
- Ensures compliance with regulatory requirements
- Extends equipment lifespan through proper maintenance

Our commitment to reliability means you can focus on what matters most—providing excellent patient care.

The Impact on Healthcare Facilities

Healthcare facilities that prioritize equipment reliability experience:
- Fewer equipment failures and emergency repairs
- Reduced patient complications
- Better staff morale and confidence
- Lower total cost of ownership
- Improved regulatory compliance

Choosing a Reliable Partner

When selecting a medical equipment supplier, consider:
- Track record and years in business
- Quality certifications and standards compliance
- After-sales support and maintenance services
- Warranty and replacement policies
- Customer testimonials and references

New Health Medicals has built its reputation on reliability. We stand behind every product we distribute and provide comprehensive support throughout the equipment's lifespan.`,
    },
    "2": {
      title: "Latest Advances in Diagnostic Medical Technology",
      excerpt:
        "Explore the cutting-edge diagnostic tools transforming how healthcare professionals detect and treat diseases.",
      category: "Technology",
      author: "Mr. Ahmed Hassan",
      date: "October 10, 2025",
      image: "/blog-diagnostic-technology.jpg",
      content: `The field of diagnostic medicine is evolving rapidly. New technologies are making it easier, faster, and more accurate to diagnose conditions early, when treatment is most effective.

From portable ultrasound devices to AI-powered diagnostic systems, modern medical equipment is revolutionizing healthcare delivery. These advances are particularly valuable in remote areas and resource-limited settings.

Recent innovations include:
- Portable diagnostic devices for point-of-care testing
- AI-assisted image analysis for faster diagnosis
- Telemedicine-compatible equipment
- Non-invasive monitoring technologies
- Real-time data transmission capabilities

The Benefits of Modern Diagnostic Equipment

Advanced diagnostic tools offer numerous advantages:
- Earlier disease detection
- More accurate diagnoses
- Reduced need for invasive procedures
- Better patient outcomes
- Improved efficiency in healthcare delivery

Accessibility and Affordability

One of the most exciting developments is the increasing availability of affordable diagnostic equipment. This democratization of technology means:
- Smaller clinics can access advanced diagnostics
- Remote areas can receive better care
- NGOs can expand their services
- Home-based monitoring becomes more practical

New Health Medicals stays at the forefront of these innovations, ensuring our clients have access to the latest diagnostic tools at competitive prices.`,
    },
    "3": {
      title: "Choosing the Right Hospital Bed for Your Facility",
      excerpt:
        "A comprehensive guide to selecting hospital beds that balance patient comfort, caregiver efficiency, and budget.",
      category: "Equipment Guide",
      author: "Ms. Priya Sharma",
      date: "October 5, 2025",
      image: "/blog-hospital-bed-selection.jpg",
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

Manual vs. Electric Beds

Manual Hospital Beds:
- Lower initial cost
- Suitable for stable patients
- Requires staff effort for adjustments
- Good for facilities with limited budget

Electric Hospital Beds:
- Higher initial cost but better long-term value
- Easier for staff to operate
- Better for patient comfort
- Reduces staff injuries from manual lifting

Safety Features to Look For

- Sturdy side rails
- Emergency backup power
- Smooth adjustment mechanisms
- Non-slip surfaces
- Easy-to-clean materials

Our team at New Health Medicals can help you evaluate these factors and find the perfect solution for your facility.`,
    },
    "4": {
      title: "Supporting Home Care: Essential Equipment for Elderly Patients",
      excerpt: "Learn about the mobility aids and monitoring devices that enable safe and comfortable home-based care.",
      category: "Home Care",
      author: "Dr. Sarah Johnson",
      date: "September 28, 2025",
      image: "/blog-home-care-equipment.jpg",
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

Creating a Safe Home Environment

Safety considerations for home care:
- Remove tripping hazards
- Install grab bars in bathrooms
- Ensure adequate lighting
- Keep emergency numbers accessible
- Regular equipment maintenance

Monitoring and Support

Modern home care equipment enables:
- Remote monitoring by healthcare providers
- Early detection of health changes
- Quick response to emergencies
- Better medication adherence
- Improved patient confidence

New Health Medicals provides comprehensive home care solutions tailored to individual patient needs.`,
    },
    "5": {
      title: "NGO Healthcare Initiatives: Equipping Clinics in Underserved Areas",
      excerpt:
        "How NGOs are using quality medical equipment to bring healthcare services to remote and underserved communities.",
      category: "Community Health",
      author: "Mr. Ahmed Hassan",
      date: "September 20, 2025",
      image: "/blog-ngo-healthcare.jpg",
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

Impact on Communities

Quality equipment enables NGOs to:
- Provide preventive care services
- Conduct health screenings
- Manage chronic diseases
- Train community health workers
- Build sustainable healthcare systems

Partnership Approach

New Health Medicals partners with NGOs to:
- Understand their specific needs
- Provide affordable bulk pricing
- Offer flexible payment terms
- Deliver equipment to remote locations
- Provide ongoing technical support

Together, we're making healthcare accessible to everyone.`,
    },
    "6": {
      title: "Infection Control: Sterilization and Maintenance of Surgical Instruments",
      excerpt: "Best practices for maintaining surgical instruments to ensure patient safety and equipment longevity.",
      category: "Best Practices",
      author: "Ms. Priya Sharma",
      date: "September 15, 2025",
      image: "/blog-surgical-instruments-care.jpg",
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

Pre-Sterilization Cleaning

Proper cleaning is essential:
- Remove all organic material
- Use appropriate cleaning agents
- Follow manufacturer guidelines
- Document cleaning procedures
- Train staff on proper techniques

Storage and Handling

After sterilization:
- Store in clean, dry environments
- Maintain proper temperature and humidity
- Use sterile containers
- Label with sterilization date
- Rotate stock (FIFO method)

Our surgical instrument sets come with comprehensive care guidelines to ensure optimal performance and longevity.`,
    },
  }

  const post = posts[params.id] || posts["1"]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Back Button */}
      <div className="bg-white border-b border-border px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="flex items-center gap-2 text-primary hover:underline font-semibold">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <p className="text-secondary font-semibold mb-3">{post.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{post.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User size={18} />
                {post.author}
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full rounded-lg shadow-lg mb-12" />

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => (
              <div key={index} className="mb-6">
                {paragraph.startsWith("-") ? (
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    {paragraph.split("\n").map((item, i) => (
                      <li key={i} className="text-foreground">
                        {item.replace(/^- /, "")}
                      </li>
                    ))}
                  </ul>
                ) : paragraph.match(/^\d+\./) ? (
                  <ol className="list-decimal list-inside space-y-2 text-foreground">
                    {paragraph.split("\n").map((item, i) => (
                      <li key={i} className="text-foreground">
                        {item.replace(/^\d+\. /, "")}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-foreground leading-relaxed">{paragraph}</p>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to upgrade your medical equipment?</h3>
            <p className="text-muted-foreground mb-6">
              Contact our team to discuss your healthcare facility's needs and find the perfect solutions.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition font-semibold"
            >
              Get in Touch
            </Link>
          </div>
        </article>
      </section>

      <Footer />
    </div>
  )
}
