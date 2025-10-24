"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"
import { Search } from "lucide-react"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    {
      id: 1,
      name: "Electric Hospital Bed",
      category: "Hospital Beds",
      price: "$2,500",
      image: "/electric-hospital-bed-medical-equipment.jpg",
      description: "Adjustable electric hospital bed with safety rails and mattress",
      specs: ["Electric adjustment", "Safety rails", "Included mattress", "Weight capacity: 300kg"],
    },
    {
      id: 2,
      name: "Manual Hospital Bed",
      category: "Hospital Beds",
      price: "$1,200",
      image: "/manual-hospital-bed.jpg",
      description: "Durable manual hospital bed for basic patient care",
      specs: ["Manual crank adjustment", "Sturdy frame", "Easy cleaning", "Weight capacity: 250kg"],
    },
    {
      id: 3,
      name: "Digital Blood Pressure Monitor",
      category: "Diagnostic Tools",
      price: "$150",
      image: "/digital-blood-pressure-monitor.png",
      description: "Accurate automatic blood pressure monitoring device",
      specs: ["Digital display", "Memory function", "Portable", "Battery powered"],
    },
    {
      id: 4,
      name: "Pulse Oximeter",
      category: "Diagnostic Tools",
      price: "$80",
      image: "/pulse-oximeter-medical-device.jpg",
      description: "Portable pulse oximeter for oxygen saturation monitoring",
      specs: ["LED display", "Portable design", "Fast reading", "Includes carrying case"],
    },
    {
      id: 5,
      name: "Surgical Instrument Set",
      category: "Surgical Instruments",
      price: "$800",
      image: "/surgical-instruments-medical-tools.jpg",
      description: "Complete sterilized surgical instrument set for general procedures",
      specs: ["Stainless steel", "Sterilized", "Complete set", "Includes carrying case"],
    },
    {
      id: 6,
      name: "Surgical Gloves (Box of 100)",
      category: "Surgical Instruments",
      price: "$25",
      image: "/surgical-gloves-medical.jpg",
      description: "Sterile latex-free surgical gloves for safe procedures",
      specs: ["Latex-free", "Sterile", "Box of 100", "Various sizes available"],
    },
    {
      id: 7,
      name: "Mobility Walker",
      category: "Mobility Aids",
      price: "$200",
      image: "/mobility-walker-elderly-care.jpg",
      description: "Lightweight aluminum walker with adjustable height",
      specs: ["Aluminum frame", "Adjustable height", "Lightweight", "Includes wheels"],
    },
    {
      id: 8,
      name: "Wheelchair",
      category: "Mobility Aids",
      price: "$400",
      image: "/wheelchair-medical-mobility.jpg",
      description: "Comfortable and durable wheelchair for patient mobility",
      specs: ["Foldable design", "Comfortable seat", "Durable frame", "Easy to maneuver"],
    },
  ]

  const categories = ["all", "Hospital Beds", "Diagnostic Tools", "Surgical Instruments", "Mobility Aids"]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Medical Equipment Catalog</h1>
          <p className="text-lg text-muted-foreground">Browse our comprehensive range of medical equipment</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-foreground mb-3">Search Products</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition ${
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

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
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
                            <span className="text-primary hover:underline text-sm font-semibold">View →</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
