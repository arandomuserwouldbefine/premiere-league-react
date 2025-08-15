"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Target,
  TrendingUp,
  ArrowUpDown,
  Star,
  Trophy,
  Shield,
  Zap,
  BarChart3,
  PieChart,
  Calendar,
  DollarSign,
} from "lucide-react"
import { GameweekNumber } from "./game-week"

export function FormationStrategy() {
  const [activeSubTab, setActiveSubTab] = useState("formation")

  const subTabs = [
    { id: "formation", label: "Formation Builder", shortLabel: "Formation", icon: Users },
    { id: "captain", label: "Captain Strategy", shortLabel: "Captain", icon: Star },
    { id: "transfer", label: "Transfer Planner", shortLabel: "Transfer", icon: ArrowUpDown },
    { id: "analysis", label: "Team Analysis", shortLabel: "Analysis", icon: BarChart3 },
  ]

  return (
    <div className="space-y-4 md:space-y-8">
      <div className="bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-400 rounded-xl md:rounded-2xl p-4 md:p-8 text-center">
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-4">
          <Trophy className="h-6 w-6 md:h-8 md:w-8 text-white" />
          <h1 className="text-xl md:text-4xl font-bold text-white">Formation & Strategy Centre</h1>
        </div>
        <p className="text-white/90 text-sm md:text-lg">Advanced FPL Strategy • Gameweek <GameweekNumber startDate="2025-08-15"/></p>
      </div>

      <div className="flex gap-1 md:gap-2 mb-4 md:mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {subTabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg font-medium transition-all whitespace-nowrap min-h-[44px] ${
                activeSubTab === tab.id
                  ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg"
                  : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-slate-700/40"
              }`}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              <span className="text-xs md:text-sm lg:hidden">{tab.shortLabel}</span>
              <span className="text-sm hidden lg:inline">{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Content */}
      {activeSubTab === "formation" && <FormationBuilder />}
      {activeSubTab === "captain" && <CaptainStrategy />}
      {activeSubTab === "transfer" && <TransferPlanner />}
      {activeSubTab === "analysis" && <TeamAnalysis />}
    </div>
  )
}

function FormationBuilder() {
  const [selectedFormation, setSelectedFormation] = useState("3-4-3")

  const formations = [
    { name: "3-4-3", defenders: 3, midfielders: 4, forwards: 3 },
    { name: "3-5-2", defenders: 3, midfielders: 5, forwards: 2 },
    { name: "4-3-3", defenders: 4, midfielders: 3, forwards: 3 },
    { name: "4-4-2", defenders: 4, midfielders: 4, forwards: 2 },
    { name: "4-5-1", defenders: 4, midfielders: 5, forwards: 1 },
  ]

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <Users className="h-5 w-5 md:h-6 md:w-6 text-teal-400" />
        <h2 className="text-xl md:text-2xl font-bold text-white">Optimal Formation Builder</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm lg:w-80 flex-shrink-0">
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-white text-lg md:text-xl">Choose Formation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 md:space-y-3">
            {formations.map((formation) => (
              <Button
                key={formation.name}
                onClick={() => setSelectedFormation(formation.name)}
                variant={selectedFormation === formation.name ? "default" : "outline"}
                className={`w-full justify-start text-sm md:text-base min-h-[44px] ${
                  selectedFormation === formation.name
                    ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white"
                    : "border-slate-600 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {formation.name} Formation
              </Button>
            ))}
          </CardContent>
        </Card>

        <Card className="flex-1 bg-gradient-to-b from-green-600 to-green-700 border-slate-700/40 backdrop-blur-sm">
          <CardHeader className="text-center pb-3 md:pb-6">
            <CardTitle className="text-white flex items-center justify-center gap-2 text-lg md:text-xl">
              <Shield className="h-4 w-4 md:h-5 md:w-5" />
              {selectedFormation} Formation Layout
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 md:p-6">
            <div className="bg-green-500/20 rounded-lg p-3 sm:p-4 md:p-8 min-h-[350px] sm:min-h-[400px] md:min-h-[450px] relative overflow-hidden">
              <div className="text-center text-white font-semibold mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                Premier League Pitch
              </div>

              <div className="absolute bottom-[20px] sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-500 text-black px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded text-xs sm:text-sm font-semibold whitespace-nowrap">
                  GK (1)
                </div>
              </div>

              <div className="absolute flex-nowrap bottom-[56px] sm:bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 md:gap-4 justify-center max-w-[90%]">
                {Array.from({ length: formations.find((f) => f.name === selectedFormation)?.defenders || 3 }).map(
                  (_, i) => (
                    <div
                      key={i}
                      className="bg-blue-500 text-white px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm whitespace-nowrap"
                    >
                      D{i + 1}
                    </div>
                  ),
                )}
              </div>

              <div className="absolute flex-nowrap bottom-[104px] sm:bottom-32 md:bottom-40 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 md:gap-4 justify-center max-w-[90%]">
                {Array.from({ length: formations.find((f) => f.name === selectedFormation)?.midfielders || 4 }).map(
                  (_, i) => (
                    <div
                      key={i}
                      className="bg-green-500 text-white px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm whitespace-nowrap"
                    >
                      M{i + 1}
                    </div>
                  ),
                )}
              </div>

              <div className="absolute flex-nowrap bottom-[152px] sm:bottom-48 md:bottom-60 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 md:gap-4 justify-center max-w-[90%]">
                {Array.from({ length: formations.find((f) => f.name === selectedFormation)?.forwards || 3 }).map(
                  (_, i) => (
                    <div
                      key={i}
                      className="bg-red-500 text-white px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm whitespace-nowrap"
                    >
                      F{i + 1}
                    </div>
                  ),
                )}
              </div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-white/70">Goal</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm">
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
              <Zap className="h-4 w-4 md:h-5 md:w-5 text-teal-400" />
              Midfield Heavy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 md:space-y-3">
            {["Salah (Liverpool) - £14.5m", "Palmer (Chelsea) - £10.5m", "Saka (Arsenal) - £10.0m"].map((player, i) => (
              <div key={i} className="bg-slate-800/50 p-3 sm:p-4 rounded-lg border border-slate-700/40">
                <div className="text-white font-medium text-sm md:text-base break-words">{player}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm">
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
              <Target className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />
              Attack Focused
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 md:space-y-3">
            {["Haaland (Man City) - £14.0m", "Isak (Newcastle) - £10.5m", "Watkins (Aston Villa) - £9.0m"].map(
              (player, i) => (
                <div key={i} className="bg-slate-800/50 p-3 sm:p-4 rounded-lg border border-slate-700/40">
                  <div className="text-white font-medium text-sm md:text-base break-words">{player}</div>
                </div>
              ),
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function CaptainStrategy() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <Star className="h-5 w-5 md:h-6 md:w-6 text-teal-400" />
        <h2 className="text-xl md:text-2xl font-bold text-white">Captain Selection Strategy</h2>
      </div>

      <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm">
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
            <Trophy className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
            Prime Captain Candidates (GW16)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 md:space-y-4">
          {[
            { name: "Mohamed Salah (Liverpool)", percentage: 85, fixture: "vs Brighton (H)" },
            { name: "Erling Haaland (Man City)", percentage: 72, fixture: "vs Everton (A)" },
            { name: "Alexander Isak (Newcastle)", percentage: 68, fixture: "vs Leicester (H)" },
            { name: "Cole Palmer (Chelsea)", percentage: 45, fixture: "vs Fulham (A)" },
            { name: "Bukayo Saka (Arsenal)", percentage: 38, fixture: "vs Crystal Palace (H)" },
          ].map((captain, i) => (
            <div key={i} className="bg-slate-800/50 p-3 md:p-4 rounded-lg border border-slate-700/40">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                <div className="text-white font-medium text-sm md:text-base">{captain.name}</div>
                <Badge className="bg-teal-600 text-white self-start sm:self-auto">{captain.percentage}%</Badge>
              </div>
              <div className="text-slate-400 text-xs md:text-sm mb-2">{captain.fixture}</div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${captain.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm">
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
              <Target className="h-4 w-4 md:h-5 md:w-5 text-teal-400" />
              Captain Strategy Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 md:space-y-3">
              {[
                "Consider home advantage when selecting captain",
                "Monitor team news and injury updates before deadline",
                "Fixture difficulty rating should influence captain choice",
                "Consider player's recent form and goal scoring record",
                "Weather conditions can impact attacking returns",
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-slate-800/20 rounded-lg">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm md:text-base">{tip}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm">
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
              <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />
              Average Captain Points
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 md:space-y-4">
            {[
              { name: "Salah", points: 8.2 },
              { name: "Haaland", points: 7.8 },
              { name: "Palmer", points: 6.9 },
              { name: "Isak", points: 6.5 },
              { name: "Saka", points: 6.1 },
            ].map((player, i) => (
              <div key={i} className="flex items-center justify-between gap-2">
                <span className="text-white text-sm md:text-base">{player.name}</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 md:w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-teal-500 to-emerald-500 h-2 rounded-full"
                      style={{ width: `${player.points * 10}%` }}
                    ></div>
                  </div>
                  <span className="text-slate-400 text-xs md:text-sm w-6 md:w-8">{player.points}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function TransferPlanner() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <ArrowUpDown className="h-5 w-5 md:h-6 md:w-6 text-teal-400" />
        <h2 className="text-xl md:text-2xl font-bold text-white">Transfer Planner & Strategy</h2>
      </div>

      <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm">
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
            <Target className="h-4 w-4 md:h-5 md:w-5 text-teal-400" />
            Transfer Priorities (GW16)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <h4 className="text-red-400 font-semibold mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                <ArrowUpDown className="h-3 w-3 md:h-4 md:w-4" />
                Consider Transferring OUT (If Owned)
              </h4>
              <div className="space-y-2 md:space-y-3">
                {[
                  { name: "Marcus Rashford", reason: "Poor form, difficult fixtures" },
                  { name: "Darwin Nunez", reason: "Rotation risk, inconsistent" },
                  { name: "James Maddison", reason: "Injury concerns, tough run" },
                  { name: "Dominic Solanke", reason: "Limited attacking returns" },
                ].map((player, i) => (
                  <div key={i} className="bg-red-900/20 border border-red-700/40 p-2 md:p-3 rounded-lg">
                    <div className="text-white font-medium text-sm md:text-base">{player.name}</div>
                    <div className="text-red-300 text-xs md:text-sm">{player.reason}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-green-400 font-semibold mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
                Target Players to Bring IN
              </h4>
              <div className="space-y-2 md:space-y-3">
                {[
                  { name: "Alexander Isak", reason: "Excellent fixtures, in form" },
                  { name: "Bryan Mbeumo", reason: "Great value, consistent returns" },
                  { name: "Morgan Rogers", reason: "Rising star, good fixtures" },
                  { name: "Yoane Wissa", reason: "Budget option with potential" },
                ].map((player, i) => (
                  <div key={i} className="bg-green-900/20 border border-green-700/40 p-2 md:p-3 rounded-lg">
                    <div className="text-white font-medium text-sm md:text-base">{player.name}</div>
                    <div className="text-green-300 text-xs md:text-sm">{player.reason}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm">
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
            <Calendar className="h-4 w-4 md:h-5 md:w-5 text-teal-400" />
            Free Transfer Strategy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 md:space-y-3">
            {[
              "Single Transfer: Use free transfer to upgrade priority position",
              "Bank Transfer: Save if no urgent changes needed for better options",
              "Hit Strategy: Take -4 hit for essential moves (injury/suspension)",
              "Wildcard: Target international breaks for major overhaul",
              "Bench Boost: Plan transfers around favorable fixture swings",
            ].map((strategy, i) => (
              <div key={i} className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-slate-800/20 rounded-lg">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-300 text-sm md:text-base">{strategy}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm">
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-green-400 flex items-center gap-2 text-lg md:text-xl">
              <TrendingUp className="h-4 w-4 md:h-5 md:w-5" />
              Likely to Rise Tonight
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 md:space-y-3">
            {[
              "Isak (97.2% rise probability)",
              "Palmer (89.4% rise probability)",
              "Mbeumo (76.8% rise probability)",
            ].map((player, i) => (
              <div key={i} className="bg-green-900/20 border border-green-700/40 p-2 md:p-3 rounded-lg">
                <div className="text-green-300 font-medium text-sm md:text-base">{player}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm">
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-red-400 flex items-center gap-2 text-lg md:text-xl">
              <TrendingUp className="h-4 w-4 md:h-5 md:w-5 rotate-180" />
              Likely to Fall Tonight
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 md:space-y-3">
            {[
              "Rashford (94.1% fall probability)",
              "Nunez (82.7% fall probability)",
              "Maddison (71.3% fall probability)",
            ].map((player, i) => (
              <div key={i} className="bg-red-900/20 border border-red-700/40 p-2 md:p-3 rounded-lg">
                <div className="text-red-300 font-medium text-sm md:text-base">{player}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function TeamAnalysis() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <BarChart3 className="h-5 w-5 md:h-6 md:w-6 text-teal-400" />
        <h2 className="text-xl md:text-2xl font-bold text-white">Team Structure Analysis</h2>
      </div>

      <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm">
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
            <DollarSign className="h-4 w-4 md:h-5 md:w-5 text-teal-400" />
            Optimal Budget Allocation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[500px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-slate-300 pb-3 text-sm md:text-base">Position</th>
                  <th className="text-slate-300 pb-3 text-sm md:text-base">Budget Range</th>
                  <th className="text-slate-300 pb-3 text-sm md:text-base">Price</th>
                  <th className="text-slate-300 pb-3 text-sm md:text-base">Recommended</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {[
                  { position: "Goalkeeper", range: "£4.5m - £5.5m", price: "£5.0m", rec: "Pickford (Everton)" },
                  { position: "Defenders", range: "£4.0m - £6.5m", price: "£5.2m", rec: "Gabriel (Arsenal)" },
                  { position: "Midfielders", range: "£6.0m - £14.5m", price: "£8.7m", rec: "Salah (Liverpool)" },
                  { position: "Forwards", range: "£6.5m - £14.0m", price: "£8.2m", rec: "Haaland (Man City)" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-800">
                    <td className="text-white py-3 text-sm md:text-base">{row.position}</td>
                    <td className="text-slate-300 py-3 text-sm md:text-base">{row.range}</td>
                    <td className="text-teal-400 py-3 font-semibold text-sm md:text-base">{row.price}</td>
                    <td className="text-slate-300 py-3 text-sm md:text-base">{row.rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm">
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
              <PieChart className="h-4 w-4 md:h-5 md:w-5 text-teal-400" />
              Team Balance Matrix
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-base">Balance</span>
              </div>
              <div className="text-slate-300 text-xs md:text-sm">Optimal team structure achieved</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm">
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
              <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />
              Team Diversity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 md:space-y-4">
            {[
              { team: "Arsenal", players: 3 },
              { team: "Liverpool", players: 2 },
              { team: "Man City", players: 2 },
              { team: "Newcastle", players: 2 },
              { team: "Chelsea", players: 2 },
            ].map((team, i) => (
              <div key={i} className="flex items-center justify-between gap-2">
                <span className="text-white text-sm md:text-base">{team.team}</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 md:w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-teal-500 to-emerald-500 h-2 rounded-full"
                      style={{ width: `${team.players * 20}%` }}
                    ></div>
                  </div>
                  <span className="text-slate-400 text-xs md:text-sm w-4 md:w-8">{team.players}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm">
        <CardHeader className="pb-3 md:pb-6">
          <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
            <Calendar className="h-4 w-4 md:h-5 md:w-5 text-teal-400" />
            Season Strategy Phases
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 md:space-y-4">
          {[
            { phase: "Early Season (GW1-10)", progress: 100, status: "Complete" },
            { phase: "Autumn Phase (GW11-16)", progress: 85, status: "Current" },
            { phase: "Winter Fixtures (GW17-25)", progress: 0, status: "Upcoming" },
            { phase: "Spring Run-in (GW26-38)", progress: 0, status: "Planning" },
          ].map((phase, i) => (
            <div key={i} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <span className="text-white font-medium text-sm md:text-base">{phase.phase}</span>
                <Badge
                  className={`self-start sm:self-auto text-xs ${
                    phase.status === "Complete"
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : phase.status === "Current"
                        ? "bg-teal-500/20 text-teal-400 border-teal-500/30"
                        : "bg-slate-500/20 text-slate-400 border-slate-500/30"
                  }`}
                >
                  {phase.status}
                </Badge>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${phase.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
