import { Badge } from "@/components/ui/badge"

const stats = [
  {
    label: "Season Status",
    value: "PRE-SEASON",
    badge: "Ready",
    badgeVariant: "default" as const,
  },
  {
    label: "Teams Set",
    value: "20/20",
    badge: "Complete",
    badgeVariant: "default" as const,
  },
  {
    label: "Transfer Window",
    value: "Open",
    badge: "Active",
    badgeVariant: "default" as const,
  },
  {
    label: "Days to Kick-off",
    value: "7",
    badge: "-1",
    badgeVariant: "destructive" as const,
  },
]

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
          <div className="text-3xl font-bold text-white mb-3">{stat.value}</div>
          <Badge variant={stat.badgeVariant} className="text-xs">
            {stat.badge}
          </Badge>
        </div>
      ))}
    </div>
  )
}
