"use client"

import type React from "react"

import { Building2, TrendingUp, Users } from "lucide-react"

interface CaseStudy {
  id: number
  title: string
  organization: string
  type: string
  challenge: string
  solution: string
  result: string
  icon: React.ReactNode
}

export function CaseStudiesSection() {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Hospital Network Modernization",
      organization: "Central Medical Hospital",
      type: "Hospital",
      challenge: "Aging equipment causing frequent downtime and maintenance issues",
      solution: "Supplied 50+ electric hospital beds and diagnostic tools with comprehensive installation and training",
      result: "Reduced equipment downtime by 95%, improved patient satisfaction scores by 40%",
      icon: <Building2 className="w-8 h-8 text-primary" />,
    },
    {
      id: 2,
      title: "Rural Clinic Equipment Upgrade",
      organization: "Health for All Foundation",
      type: "NGO",
      challenge: "Limited budget for quality medical equipment in remote areas",
      solution: "Provided affordable diagnostic tools and mobility aids with flexible payment terms",
      result: "Enabled clinic to serve 5,000+ patients annually with reliable equipment",
      icon: <Users className="w-8 h-8 text-primary" />,
    },
    {
      id: 3,
      title: "Home Care Service Expansion",
      organization: "Senior Care Services",
      type: "Home Care",
      challenge: "Need for reliable, durable equipment for elderly patients at home",
      solution: "Supplied mobility aids and monitoring equipment with 24/7 support",
      result: "Expanded services to 2,000+ patients with zero equipment-related complaints",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground">How we've helped healthcare organizations achieve their goals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-semibold text-secondary mb-1">{study.type}</p>
                  <h3 className="text-lg font-bold text-foreground">{study.title}</h3>
                </div>
                {study.icon}
              </div>

              <p className="text-sm text-muted-foreground font-medium mb-4">{study.organization}</p>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs font-semibold text-secondary uppercase mb-1">Challenge</p>
                  <p className="text-sm text-foreground">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-secondary uppercase mb-1">Solution</p>
                  <p className="text-sm text-foreground">{study.solution}</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-xs font-semibold text-primary uppercase mb-1">Result</p>
                  <p className="text-sm font-semibold text-primary">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
