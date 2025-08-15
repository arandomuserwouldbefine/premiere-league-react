"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, Activity, Target, MapPin } from "lucide-react"

const pricePointsData = [
  { price: 4.5, points: 12, name: "Steele" },
  { price: 5.0, points: 28, name: "Pickford" },
  { price: 4.5, points: 15, name: "Gabriel" },
  { price: 5.5, points: 45, name: "Saliba" },
  { price: 6.0, points: 52, name: "Alexander-Arnold" },
  { price: 7.5, points: 68, name: "Mbeumo" },
  { price: 8.0, points: 75, name: "Rogers" },
  { price: 9.0, points: 85, name: "Watkins" },
  { price: 9.5, points: 92, name: "Son" },
  { price: 10.0, points: 98, name: "Saka" },
  { price: 10.5, points: 105, name: "Palmer" },
  { price: 10.5, points: 110, name: "Isak" },
  { price: 14.0, points: 125, name: "Haaland" },
  { price: 14.5, points: 135, name: "Salah" },
]

export function AdvancedAnalytics() {
  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-teal-900 to-emerald-600 p-8 text-white">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="h-8 w-8 text-emerald-300" />
            <h1 className="text-2xl sm:text-3xl font-bold">Advanced Analytics & Performance</h1>
          </div>
          <p className="text-emerald-100 text-lg">2025/26 Season • Advanced FPL Analytics & Insights</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Player Performance Metrics */}
        <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-teal-400" />
              Player Performance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Price vs Points Analysis</h3>
              <div className="h-80 w-full bg-slate-800/30 rounded-lg p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart data={pricePointsData} margin={{ top: 20, right: 20, bottom: 40, left: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" opacity={0.3} />
                    <XAxis
                      dataKey="price"
                      stroke="#94A3B8"
                      fontSize={12}
                      label={{
                        value: "Price (£m)",
                        position: "insideBottom",
                        offset: -10,
                        style: { textAnchor: "middle", fill: "#94A3B8" },
                      }}
                    />
                    <YAxis
                      dataKey="points"
                      stroke="#94A3B8"
                      fontSize={12}
                      label={{
                        value: "Total Points",
                        angle: -90,
                        position: "insideLeft",
                        style: { textAnchor: "middle", fill: "#94A3B8" },
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1E293B",
                        border: "1px solid #475569",
                        borderRadius: "8px",
                        color: "#F1F5F9",
                        fontSize: "12px",
                      }}
                      formatter={(value, name) => [
                        name === "points" ? `${value} pts` : `£${value}m`,
                        name === "points" ? "Points" : "Price",
                      ]}
                      labelFormatter={(label, payload) => (payload && payload[0] ? payload[0].payload.name : "")}
                    />
                    <Scatter dataKey="points" fill="#14B8A6" stroke="#0D9488" strokeWidth={1} r={6} />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Insights */}
        <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Target className="h-5 w-5 text-teal-400" />
              Analytics Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/40">
              <Badge variant="secondary" className="bg-teal-500/20 text-teal-300 border-teal-500/30 mb-3">
                Advanced zone analysis and heat maps
              </Badge>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">Player positioning data</span>
                  <Badge variant="outline" className="ml-2 border-teal-500/30 text-teal-300">
                    Live Tracking
                  </Badge>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">Team formation analysis</span>
                  <Badge variant="outline" className="ml-2 border-blue-500/30 text-blue-300">
                    Tactical Insights
                  </Badge>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">Attacking/defensive zones</span>
                  <Badge variant="outline" className="ml-2 border-orange-500/30 text-orange-300">
                    Zone Analysis
                  </Badge>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">Performance heat maps</span>
                  <Badge variant="outline" className="ml-2 border-purple-500/30 text-purple-300">
                    Heat Mapping
                  </Badge>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-lg border border-teal-500/20">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span className="text-sm font-medium text-teal-300">Advanced Metrics Available</span>
              </div>
              <p className="text-sm text-slate-300">
                Access detailed player movement patterns, tactical positioning, and performance correlation analysis.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
