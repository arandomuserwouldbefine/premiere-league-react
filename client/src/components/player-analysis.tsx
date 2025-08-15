"use client"

import {
  Target,
  TrendingUp,
  Users,
  DollarSign,
  Star,
  Calendar,
  Gem,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  TrendingDown,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export function PlayerAnalysis() {
  const [activeSubTab, setActiveSubTab] = useState("Top Performers")
  const [activePosition, setActivePosition] = useState("Defender")

  const playerStats = [
    { label: "Total Players", value: "25", badge: "Live Data", icon: Users },
    { label: "Avg Price", value: "£7.8m", badge: "Current", icon: DollarSign },
    { label: "Highest Points", value: "0", badge: "Season", icon: Star },
    { label: "Max Ownership", value: "42.3%", badge: "Popular Pick", icon: TrendingUp },
    { label: "Current GW", value: "16", badge: "2025/26", icon: Calendar },
  ]

  const budgetOptions = [
    { name: "Player A", team: "Team X", price: "£5.0m", points: "10", ownership: "20%" },
    { name: "Player B", team: "Team Y", price: "£5.5m", points: "12", ownership: "25%" },
  ]

  const positionData = {
    Defender: {
      total: "10",
      avgPrice: "£7.0m",
      avgPoints: "15",
      topPlayers: [{ name: "Player C", team: "Team Z", price: "£6.0m", points: "20", ownership: "30%" }],
    },
    Forward: {
      total: "10",
      avgPrice: "£7.0m",
      avgPoints: "15",
      topPlayers: [{ name: "Player D", team: "Team W", price: "£6.0m", points: "20", ownership: "30%" }],
    },
    Goalkeeper: {
      total: "10",
      avgPrice: "£7.0m",
      avgPoints: "15",
      topPlayers: [{ name: "Player E", team: "Team V", price: "£6.0m", points: "20", ownership: "30%" }],
    },
    Midfielder: {
      total: "10",
      avgPrice: "£7.0m",
      avgPoints: "15",
      topPlayers: [{ name: "Player F", team: "Team U", price: "£6.0m", points: "20", ownership: "30%" }],
    },
  }

  const transfersIn = [
    { name: "Player G", price: "£6.5m", change: "+50%" },
    { name: "Player H", price: "£7.0m", change: "+40%" },
  ]

  const transfersOut = [
    { name: "Player I", price: "£6.5m", change: "-50%" },
    { name: "Player J", price: "£7.0m", change: "-40%" },
  ]

  const hotPicks = [
    { name: "Player K", team: "Team T", price: "£8.0m" },
    { name: "Player L", team: "Team S", price: "£8.5m" },
  ]

  const valuePicks = [
    { name: "Player M", team: "Team R", price: "£9.0m" },
    { name: "Player N", team: "Team Q", price: "£9.5m" },
  ]

  const monitorClosely = ["Player O is showing signs of improvement.", "Player P has been underperforming recently."]

  const strategyInsights = [
    "Consider transferring in players from Team P for better value.",
    "Avoid players from Team Q due to high ownership.",
  ]

  const premiumPlayers = [
    {
      name: "Player Q",
      team: "Team P",
      price: "£10.0m",
      points: "30",
      ownership: "10%",
      initials: "PQ",
      color: "from-red-600 to-red-500",
    },
    {
      name: "Player R",
      team: "Team O",
      price: "£11.0m",
      points: "35",
      ownership: "15%",
      initials: "PR",
      color: "from-blue-600 to-blue-500",
    },
  ]

  const topScorers = [
    { name: "Player S", team: "Team N", position: "Forward", points: "40", ownership: "50%", price: "£12.0m" },
    { name: "Player T", team: "Team M", position: "Midfielder", points: "38", ownership: "45%", price: "£11.5m" },
  ]

  const renderSubTabContent = () => {
    switch (activeSubTab) {
      case "Hidden Gems":
        return (
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-3xl font-bold text-white flex items-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                <Gem className="h-3 w-3 md:h-4 md:w-4 text-teal-400" />
              </div>
              Hidden Gems & Value Picks
            </h3>

            <div className="space-y-4 md:space-y-6">
              <h4 className="text-lg md:text-xl font-semibold text-teal-400 flex items-center gap-2 md:gap-3">
                <DollarSign className="h-4 w-4 md:h-5 md:w-5" />
                Budget Options (Under £6.0m)
              </h4>

              <div className="space-y-3 md:space-y-4">
                {budgetOptions.map((player, index) => (
                  <Card
                    key={index}
                    className="bg-slate-900/90 border border-slate-700/50 p-4 md:p-6 backdrop-blur-sm hover:bg-slate-800/90 transition-all duration-300 hover:border-teal-500/30"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3 md:gap-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xs md:text-sm border-2 border-white/20">
                          {player.name.slice(0, 2)}
                        </div>
                        <div>
                          <h5 className="text-lg md:text-xl font-semibold text-white mb-1">
                            {player.name} ({player.team})
                          </h5>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
                        <div>
                          <div className="text-xs text-slate-400 mb-1 font-medium">Price</div>
                          <div className="text-lg md:text-xl font-bold text-white">{player.price}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 mb-1 font-medium">Points</div>
                          <div className="text-lg md:text-xl font-bold text-white">{player.points}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 mb-1 font-medium">Ownership</div>
                          <div className="text-lg md:text-xl font-bold text-teal-400">{player.ownership}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case "Position Analysis":
        return (
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-3xl font-bold text-white flex items-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                <BarChart3 className="h-3 w-3 md:h-4 md:w-4 text-teal-400" />
              </div>
              Position Analysis
            </h3>

            <div className="flex gap-2 md:gap-3 mb-6 md:mb-8 overflow-x-auto pb-2 scrollbar-hide">
              {["Defender", "Forward", "Goalkeeper", "Midfielder"].map((position) => (
                <button
                  key={position}
                  onClick={() => setActivePosition(position)}
                  className={`flex-shrink-0 px-4 md:px-6 py-2 md:py-3 rounded-2xl text-sm font-medium transition-all duration-300 min-w-[100px] ${
                    activePosition === position
                      ? "bg-gradient-to-r from-red-600 to-red-500 text-white border border-red-500/30 shadow-lg shadow-red-500/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50 border border-slate-700/30"
                  }`}
                >
                  {position}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <Card className="bg-slate-900/90 border border-slate-700/50 p-4 md:p-6 backdrop-blur-sm">
                <div className="text-slate-400 mb-2 text-sm font-medium">Total {activePosition}s</div>
                <div className="text-2xl md:text-3xl font-bold text-white">{positionData[activePosition].total}</div>
              </Card>
              <Card className="bg-slate-900/90 border border-slate-700/50 p-4 md:p-6 backdrop-blur-sm">
                <div className="text-slate-400 mb-2 text-sm font-medium">Average Price</div>
                <div className="text-2xl md:text-3xl font-bold text-white">{positionData[activePosition].avgPrice}</div>
              </Card>
              <Card className="bg-slate-900/90 border border-slate-700/50 p-4 md:p-6 backdrop-blur-sm">
                <div className="text-slate-400 mb-2 text-sm font-medium">Average Points</div>
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {positionData[activePosition].avgPoints}
                </div>
              </Card>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h4 className="text-lg md:text-xl font-semibold text-white">Top {activePosition}s by Points</h4>
              <div className="space-y-3 md:space-y-4">
                {positionData[activePosition].topPlayers.map((player, index) => (
                  <Card
                    key={index}
                    className="bg-slate-900/90 border border-slate-700/50 p-4 md:p-6 backdrop-blur-sm hover:bg-slate-800/90 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="text-white font-semibold text-sm md:text-base">
                        {player.name} ({player.team})
                      </div>
                      <div className="flex items-center justify-between sm:gap-6 md:gap-8 text-sm md:text-base">
                        <div className="text-white">{player.price}</div>
                        <div className="text-white">{player.points}</div>
                        <div className="text-teal-400">{player.ownership}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case "Transfer Targets":
        return (
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-3xl font-bold text-white flex items-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                <Target className="h-3 w-3 md:h-4 md:w-4 text-teal-400" />
              </div>
              Transfer Targets & Recommendations
            </h3>

            <div className="space-y-6 md:space-y-8">
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-teal-400" />
                  Most Transferred Players (Last 24h)
                </h4>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <h5 className="text-base md:text-lg font-semibold text-teal-400 mb-3 md:mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Transfers IN
                    </h5>
                    <div className="space-y-2 md:space-y-3">
                      {transfersIn.map((player, index) => (
                        <Card
                          key={index}
                          className="bg-slate-900/90 border border-slate-700/50 p-3 md:p-4 backdrop-blur-sm"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium text-sm md:text-base">{player.name}</span>
                            <div className="flex items-center gap-2 md:gap-4">
                              <span className="text-green-400 font-semibold text-sm md:text-base">{player.change}</span>
                              <span className="text-slate-400 text-xs md:text-sm">({player.price})</span>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-base md:text-lg font-semibold text-teal-400 mb-3 md:mb-4 flex items-center gap-2">
                      <TrendingDown className="h-4 w-4" />
                      Transfers OUT
                    </h5>
                    <div className="space-y-2 md:space-y-3">
                      {transfersOut.map((player, index) => (
                        <Card
                          key={index}
                          className="bg-slate-900/90 border border-slate-700/50 p-3 md:p-4 backdrop-blur-sm"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium text-sm md:text-base">{player.name}</span>
                            <div className="flex items-center gap-2 md:gap-4">
                              <span className="text-red-400 font-semibold text-sm md:text-base">{player.change}</span>
                              <span className="text-slate-400 text-xs md:text-sm">({player.price})</span>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <Target className="h-4 w-4 md:h-5 md:w-5 text-teal-400" />
                  Smart Transfer Recommendations
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div>
                    <h5 className="text-base md:text-lg font-semibold text-green-400 mb-3 md:mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Hot Picks
                    </h5>
                    <div className="space-y-2 md:space-y-3">
                      {hotPicks.map((player, index) => (
                        <Card
                          key={index}
                          className="bg-slate-900/90 border border-green-500/30 p-3 md:p-4 backdrop-blur-sm"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-white font-medium text-sm md:text-base">{player.name}</span>
                          </div>
                          <div className="text-slate-400 text-xs md:text-sm">
                            {player.team} • {player.price}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-base md:text-lg font-semibold text-blue-400 mb-3 md:mb-4 flex items-center gap-2">
                      <Gem className="h-4 w-4" />
                      Value Picks
                    </h5>
                    <div className="space-y-2 md:space-y-3">
                      {valuePicks.map((player, index) => (
                        <Card
                          key={index}
                          className="bg-slate-900/90 border border-blue-500/30 p-3 md:p-4 backdrop-blur-sm"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <DollarSign className="h-4 w-4 text-blue-400" />
                            <span className="text-white font-medium text-sm md:text-base">{player.name}</span>
                          </div>
                          <div className="text-slate-400 text-xs md:text-sm">
                            {player.team} • {player.price}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-base md:text-lg font-semibold text-yellow-400 mb-3 md:mb-4 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Monitor Closely
                    </h5>
                    <div className="space-y-2 md:space-y-3">
                      {monitorClosely.map((item, index) => (
                        <Card
                          key={index}
                          className="bg-slate-900/90 border border-yellow-500/30 p-3 md:p-4 backdrop-blur-sm"
                        >
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span className="text-white text-xs md:text-sm leading-relaxed">{item}</span>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-teal-400" />
                  Transfer Strategy Insights
                </h4>

                <div className="space-y-3 md:space-y-4">
                  {strategyInsights.map((insight, index) => (
                    <Card
                      key={index}
                      className="bg-slate-900/90 border border-slate-700/50 p-3 md:p-4 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 bg-teal-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-400 rounded-full"></div>
                        </div>
                        <span className="text-slate-300 leading-relaxed text-sm md:text-base">{insight}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-3xl font-bold text-white flex items-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                <Star className="h-3 w-3 md:h-4 md:w-4 text-teal-400" />
              </div>
              Elite Performers - 2025/26 Season
            </h3>

            <div className="space-y-4 md:space-y-6">
              <h4 className="text-lg md:text-xl font-semibold text-teal-400 flex items-center gap-2 md:gap-3">
                <DollarSign className="h-4 w-4 md:h-5 md:w-5" />
                Premium Tier (£10.0m+)
              </h4>

              <div className="space-y-3 md:space-y-4">
                {premiumPlayers.map((player, index) => (
                  <Card
                    key={index}
                    className="bg-slate-900/90 border border-slate-700/50 p-4 md:p-6 backdrop-blur-sm hover:bg-slate-800/90 transition-all duration-300 hover:border-teal-500/30"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3 md:gap-6">
                        <div
                          className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${player.color} rounded-xl flex items-center justify-center text-white font-bold text-xs md:text-sm border-2 border-white/20`}
                        >
                          {player.initials}
                        </div>
                        <div>
                          <h5 className="text-lg md:text-xl font-semibold text-white mb-1">
                            {player.name} ({player.team})
                          </h5>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
                        <div>
                          <div className="text-xs text-slate-400 mb-1 font-medium">Price</div>
                          <div className="text-lg md:text-xl font-bold text-white">{player.price}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 mb-1 font-medium">Points</div>
                          <div className="text-lg md:text-xl font-bold text-white">{player.points}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 mb-1 font-medium">Ownership</div>
                          <div className="text-lg md:text-xl font-bold text-teal-400">{player.ownership}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h4 className="text-lg md:text-xl font-semibold text-white">Premium Players: Price vs Performance</h4>
              <Card className="bg-slate-900/90 border border-slate-700/50 p-6 md:p-8 backdrop-blur-sm">
                <div className="h-48 md:h-64 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-lg"></div>
                  <div className="text-slate-400 text-center z-10">
                    <TrendingUp className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 opacity-50" />
                    <p className="text-base md:text-lg font-medium">Interactive Chart Coming Soon</p>
                    <p className="text-xs md:text-sm">Price vs Performance Analysis</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h4 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 md:gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                  <Star className="h-3 w-3 md:h-4 md:w-4 text-teal-400" />
                </div>
                Overall Top Scorers
              </h4>

              <Card className="bg-slate-900/90 border border-slate-700/50 backdrop-blur-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="border-b border-slate-700/50">
                        <th className="text-left p-3 md:p-4 text-slate-400 font-medium text-xs md:text-sm">Web Name</th>
                        <th className="text-left p-3 md:p-4 text-slate-400 font-medium text-xs md:text-sm">
                          Team Name
                        </th>
                        <th className="text-left p-3 md:p-4 text-slate-400 font-medium text-xs md:text-sm">
                          Position Name
                        </th>
                        <th className="text-center p-3 md:p-4 text-slate-400 font-medium text-xs md:text-sm">
                          Total Points
                        </th>
                        <th className="text-center p-3 md:p-4 text-slate-400 font-medium text-xs md:text-sm">
                          Selected By %
                        </th>
                        <th className="text-right p-3 md:p-4 text-slate-400 font-medium text-xs md:text-sm">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topScorers.map((player, index) => (
                        <tr
                          key={index}
                          className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors"
                        >
                          <td className="p-3 md:p-4 text-white font-medium text-sm md:text-base">{player.name}</td>
                          <td className="p-3 md:p-4 text-slate-300 text-sm md:text-base">{player.team}</td>
                          <td className="p-3 md:p-4 text-slate-300 text-sm md:text-base">{player.position}</td>
                          <td className="p-3 md:p-4 text-center text-white font-semibold text-sm md:text-base">
                            {player.points}
                          </td>
                          <td className="p-3 md:p-4 text-center text-teal-400 font-semibold text-sm md:text-base">
                            {player.ownership}
                          </td>
                          <td className="p-3 md:p-4 text-right text-white font-semibold text-sm md:text-base">
                            {player.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center backdrop-blur-sm shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="p-2 md:p-3 bg-white/10 rounded-xl md:rounded-2xl border border-white/20 backdrop-blur-sm">
              <Target className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white">Player Analysis Centre</h2>
          </div>
          <p className="text-base md:text-xl text-white/90 font-light">
            2025/26 Season • Advanced FPL Analytics & Insights
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6">
        {playerStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card
              key={index}
              className="bg-slate-900/90 border border-slate-700/50 p-4 md:p-6 backdrop-blur-sm hover:bg-slate-800/90 transition-all duration-300 hover:border-teal-500/30"
            >
              <div className="flex items-center gap-2 text-slate-400 mb-2 md:mb-3">
                <Icon className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm font-medium">{stat.label}</span>
              </div>
              <div className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">{stat.value}</div>
              <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 hover:bg-teal-500/30 text-xs">
                {stat.badge}
              </Badge>
            </Card>
          )
        })}
      </div>

      <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {[
          { label: "Top Performers", icon: TrendingUp },
          { label: "Hidden Gems", icon: Gem },
          { label: "Position Analysis", icon: BarChart3 },
          { label: "Transfer Targets", icon: Target },
        ].map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.label}
              onClick={() => setActiveSubTab(tab.label)}
              className={`flex-shrink-0 flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-2xl text-sm font-medium transition-all duration-300 min-w-[140px] md:min-w-0 ${
                activeSubTab === tab.label
                  ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white border border-teal-500/30 shadow-lg shadow-teal-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50 border border-slate-700/30"
              }`}
            >
              <Icon className="h-3 w-3 md:h-4 md:w-4" />
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          )
        })}
      </div>

      {renderSubTabContent()}
    </div>
  )
}
