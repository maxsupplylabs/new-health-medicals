import { AlertCircle, CheckCircle, Clock } from "lucide-react"

interface ProductAvailabilityProps {
  stock?: "in-stock" | "limited" | "pre-order"
  leadTime?: string
  warranty?: string
}

export function ProductAvailability({
  stock = "in-stock",
  leadTime = "3-5 business days",
  warranty = "2 years",
}: ProductAvailabilityProps) {
  const stockInfo = {
    "in-stock": {
      icon: CheckCircle,
      label: "In Stock",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    limited: {
      icon: AlertCircle,
      label: "Limited Stock",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    "pre-order": {
      icon: Clock,
      label: "Pre-Order Available",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
  }

  const info = stockInfo[stock]
  const Icon = info.icon

  return (
    <div className="space-y-4">
      {/* Stock Status */}
      <div className={`${info.bgColor} border border-current rounded-lg p-4`}>
        <div className="flex items-center gap-2 mb-2">
          <Icon className={`w-5 h-5 ${info.color}`} />
          <span className={`font-semibold ${info.color}`}>{info.label}</span>
        </div>
        <p className="text-sm text-foreground">Ready for immediate delivery</p>
      </div>

      {/* Lead Time and Warranty */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <p className="text-xs font-semibold text-secondary uppercase mb-1">Lead Time</p>
          <p className="text-sm font-semibold text-foreground">{leadTime}</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <p className="text-xs font-semibold text-secondary uppercase mb-1">Warranty</p>
          <p className="text-sm font-semibold text-foreground">{warranty}</p>
        </div>
      </div>
    </div>
  )
}
