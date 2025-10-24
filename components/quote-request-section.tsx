"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle } from "lucide-react"
import { useChat } from "@/lib/chat-context"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

export function QuoteRequestSection() {
  const { setIsOpen: setChatOpen, addMessage } = useChat()
  const [formData, setFormData] = useState({
    organizationType: "",
    productCategory: "",
    quantity: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `I'd like to request a quote for:
- Organization: ${formData.organizationType}
- Product Category: ${formData.productCategory}
- Quantity: ${formData.quantity || "Not specified"}
- Details: ${formData.message || "No additional details"}`

    setChatOpen(true)
    addMessage(message, "user")

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        organizationType: "",
        productCategory: "",
        quantity: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg border border-border p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Request a Quote
          </h2>
          <p className="text-muted-foreground mb-8">
            Tell us about your medical equipment needs and we'll provide a
            personalized quote.
          </p>

          {submitted ? (
            <div className="bg-accent/10 border border-accent rounded-lg p-8 text-center">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Thank You!
              </h3>
              <p className="text-muted-foreground mb-4">
                Your quote request has been sent to our chat support. Our team
                will respond shortly!
              </p>
              <p className="text-sm text-muted-foreground">
                You can also call us at{" "}
                <a
                  href="tel:+1234567890"
                  className="text-primary hover:underline font-semibold"
                >
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Organization Type */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Organization Type *
                  </label>
                  <Select
                    value={formData.organizationType}
                    onValueChange={(value: string) =>
                      handleSelectChange("organizationType", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select organization type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hospital">Hospital</SelectItem>
                      <SelectItem value="clinic">Clinic</SelectItem>
                      <SelectItem value="pharmacy">Pharmacy</SelectItem>
                      <SelectItem value="ngo">NGO</SelectItem>
                      <SelectItem value="home-care">
                        Home Care Provider
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Product Category */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Product Category *
                  </label>
                  <Select
                    value={formData.productCategory}
                    onValueChange={(value: string) =>
                      handleSelectChange("productCategory", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select product category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hospital-beds">
                        Hospital Beds
                      </SelectItem>
                      <SelectItem value="diagnostic-tools">
                        Diagnostic Tools
                      </SelectItem>
                      <SelectItem value="surgical-instruments">
                        Surgical Instruments
                      </SelectItem>
                      <SelectItem value="mobility-aids">
                        Mobility Aids
                      </SelectItem>
                      <SelectItem value="multiple">
                        Multiple Categories
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Estimated Quantity
                </label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g., 5 units, 10 sets, etc."
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Additional Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your specific needs, budget, timeline, or any special requirements..."
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition font-semibold"
              >
                Request Quote via Chat
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Your quote request will be sent to our chat support team for
                immediate assistance.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
