"use client"

import { useEffect, useState } from "react"

interface TrustStat {
  label: string
  value: number
  suffix: string
}

export function TrustCounter() {
  const [counts, setCounts] = useState<Record<string, number>>({
    facilities: 0,
    products: 0,
    years: 0,
  })

  const stats: TrustStat[] = [
    { label: "Healthcare Facilities Served", value: 500, suffix: "+" },
    { label: "Products Installed", value: 15000, suffix: "+" },
    { label: "Years of Excellence", value: 12, suffix: "+" },
  ]

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = []

    stats.forEach((stat, index) => {
      const key = Object.keys(counts)[index]
      const increment = Math.ceil(stat.value / 50)

      const interval = setInterval(() => {
        setCounts((prev) => ({
          ...prev,
          [key]: Math.min(prev[key] + increment, stat.value),
        }))
      }, 30)

      intervals.push(interval)
    })

    return () => intervals.forEach((interval) => clearInterval(interval))
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Healthcare Providers</h2>
          <p className="text-lg opacity-90">Our commitment to reliability speaks through numbers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {counts[Object.keys(counts)[index]]}
                <span className="text-3xl">{stat.suffix}</span>
              </div>
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
