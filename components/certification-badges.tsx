import { Shield } from "lucide-react"

interface CertificationBadgesProps {
  certifications?: string[]
}

export function CertificationBadges({ certifications }: CertificationBadgesProps) {
  const defaultCertifications = ["ISO 13485", "CE Certified", "FDA Approved"]
  const certs = certifications || defaultCertifications

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-3">
        <Shield className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">Certifications & Compliance</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {certs.map((cert, index) => (
          <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            {cert}
          </span>
        ))}
      </div>
    </div>
  )
}
