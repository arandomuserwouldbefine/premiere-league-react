"use client"

import { useState } from "react"
import { Trophy, Calendar, Users, TrendingUp, Crown, ArrowUp, BarChart3, Target, Zap, Swords } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TeamAnalytics() {
  const [activeSubTab, setActiveSubTab] = useState("league-table")
  const [team1, setTeam1] = useState("Liverpool")
  const [team2, setTeam2] = useState("Arsenal")

  const teamStats = [
    { label: "Total Teams", value: "20", badge: "Current", icon: Trophy },
    { label: "Gameweeks", value: "16/38", badge: "In Progress", icon: Calendar },
    { label: "Leader Points", value: "0", badge: "Liverpool", icon: Crown },
    { label: "Promoted Teams", value: "3", badge: "Leeds, Burnley, Sunderland", icon: ArrowUp },
    { label: "Season", value: "2025/26", badge: "Live", icon: TrendingUp },
  ]

  const leagueTable = [
    { pos: 1, team: "Arsenal", p: 0, pts: 0, gf: 0, ga: 0, gd: 0, form: "0-0-0" },
    { pos: 2, team: "Liverpool", p: 0, pts: 0, gf: 0, ga: 0, gd: 0, form: "0-0-0" },
    { pos: 3, team: "Man City", p: 0, pts: 0, gf: 0, ga: 0, gd: 0, form: "0-0-0" },
    { pos: 4, team: "Chelsea", p: 0, pts: 0, gf: 0, ga: 0, gd: 0, form: "0-0-0" },
    { pos: 5, team: "Aston Villa", p: 0, pts: 0, gf: 0, ga: 0, gd: 0, form: "0-0-0" },
    { pos: 6, team: "Tottenham", p: 0, pts: 0, gf: 0, ga: 0, gd: 0, form: "0-0-0" },
    { pos: 7, team: "Newcastle", p: 0, pts: 0, gf: 0, ga: 0, gd: 0, form: "0-0-0" },
    { pos: 8, team: "Brighton", p: 0, pts: 0, gf: 0, ga: 0, gd: 0, form: "0-0-0" },
    { pos: 9, team: "Man United", p: 0, pts: 0, gf: 0, ga: 0, gd: 0, form: "0-0-0" },
    { pos: 10, team: "West Ham", p: 0, pts: 0, gf: 0, ga: 0, gd: 0, form: "0-0-0" },
  ]

  const teamStrengthData = [
    { team: "Arsenal", strength: 89 },
    { team: "Liverpool", strength: 87 },
    { team: "Man City", strength: 85 },
    { team: "Chelsea", strength: 78 },
    { team: "Newcastle", strength: 72 },
    { team: "Tottenham", strength: 70 },
    { team: "Aston Villa", strength: 68 },
    { team: "Brighton", strength: 65 },
  ]

  const fplAssets = [
    { player: "Salah (Liverpool)", price: "£14.5m", points: "0 pts", ownership: "42.3% owned" },
    { player: "Haaland (Man City)", price: "£14.0m", points: "0 pts", ownership: "35.8% owned" },
    { player: "Saka (Arsenal)", price: "£10.0m", points: "0 pts", ownership: "33.2% owned" },
    { player: "Isak (Newcastle)", price: "£10.5m", points: "0 pts", ownership: "28.9% owned" },
    { player: "Palmer (Chelsea)", price: "£10.5m", points: "0 pts", ownership: "26.4% owned" },
    { player: "Watkins (Aston Villa)", price: "£9.0m", points: "0 pts", ownership: "21.5% owned" },
    { player: "Pickford (Everton)", price: "£5.5m", points: "0 pts", ownership: "19.7% owned" },
    { player: "Bellingham (Man City)", price: "£9.5m", points: "0 pts", ownership: "18.7% owned" },
    { player: "Son (Tottenham)", price: "£9.5m", points: "0 pts", ownership: "15.8% owned" },
  ]

  const rivalries = [
    "Liverpool vs Manchester United: Title race clash",
    "Arsenal vs Tottenham: North London Derby",
    "Manchester City vs Liverpool: Premier League supremacy",
    "Newcastle vs Sunderland: Tyne-Wear Derby returns!",
    "Leeds United vs Manchester United: Historic rivalry renewed",
  ]

  const fixtureInsights = [
    { team: "Liverpool", insight: "Excellent fixtures through GW20, maintain 3+ players", color: "text-emerald-400" },
    { team: "Arsenal", insight: "Mixed fixtures but great players, focus on home games", color: "text-yellow-400" },
    { team: "Man City", insight: "Tough run coming, consider rotation options", color: "text-orange-400" },
    { team: "Newcastle", insight: "Isak essential with their favorable schedule", color: "text-emerald-400" },
    { team: "Chelsea", insight: "Palmer remains must-have despite fixture concerns", color: "text-yellow-400" },
  ]

  const renderSubTabContent = () => {
    switch (activeSubTab) {
      case "league-table":
        return (
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-teal-400" />
              </div>
              <span className="text-sm sm:text-base lg:text-xl">Current Premier League Table</span>
            </h3>

            <Card className="bg-slate-900/90 border border-slate-700/50 overflow-hidden backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-slate-800/80 border-b border-slate-700/50">
                    <tr className="text-left">
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-slate-300">Pos</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-slate-300">
                        Team
                      </th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-slate-300">P</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-slate-300">Pts</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-slate-300">GF</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-slate-300">GA</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-slate-300">GD</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-slate-300">
                        W-D-L
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {leagueTable.map((team, index) => (
                      <tr
                        key={team.team}
                        className="border-t border-slate-700/30 hover:bg-slate-800/50 transition-colors"
                      >
                        <td className="px-3 sm:px-6 py-3 sm:py-5 flex items-center gap-2 sm:gap-3">
                          <div
                            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                              index < 4
                                ? "bg-emerald-500/20"
                                : index < 6
                                  ? "bg-blue-500/20"
                                  : index >= 17
                                    ? "bg-red-500/20"
                                    : "bg-slate-500/20"
                            }`}
                          >
                            <Trophy
                              className={`h-3 w-3 sm:h-4 sm:w-4 ${
                                index < 4
                                  ? "text-emerald-400"
                                  : index < 6
                                    ? "text-blue-400"
                                    : index >= 17
                                      ? "text-red-400"
                                      : "text-slate-400"
                              }`}
                            />
                          </div>
                          <span className="font-bold text-white text-sm sm:text-base">{team.pos}</span>
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-5 font-semibold text-white text-sm sm:text-base">
                          {team.team}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-5 text-slate-300 text-sm sm:text-base">{team.p}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-5 font-bold text-white text-sm sm:text-base">
                          {team.pts}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-5 text-slate-300 text-sm sm:text-base">{team.gf}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-5 text-slate-300 text-sm sm:text-base">{team.ga}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-5 text-slate-300 text-sm sm:text-base">{team.gd}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-5 text-slate-300 text-sm sm:text-base">{team.form}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/30">
              <div className="text-xs sm:text-sm text-slate-400 mb-2">Position Guide:</div>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500/20 rounded border border-emerald-500/30"></div>
                  <span className="text-emerald-400">Champions League (1-4)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500/20 rounded border border-blue-500/30"></div>
                  <span className="text-blue-400">Europa League (5)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-500/20 rounded border border-slate-500/30"></div>
                  <span className="text-slate-400">Conference League (6)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500/20 rounded border border-red-500/30"></div>
                  <span className="text-red-400">Relegation (18-20)</span>
                </div>
              </div>
            </div>

            <Card className="bg-slate-900/90 border border-slate-700/50 p-4 sm:p-6 backdrop-blur-sm">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2 sm:gap-3">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-teal-400" />
                Recent Form (Last 5 Games)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {["Arsenal", "Liverpool", "Man City", "Chelsea"].map((team) => (
                  <div key={team} className="text-center">
                    <div className="font-semibold text-white mb-2 text-sm sm:text-base">{team}</div>
                    <div className="text-slate-400 text-xs sm:text-sm">-----</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )

      case "team-strength":
        return (
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-teal-400" />
              </div>
              <span className="text-sm sm:text-base lg:text-xl">Team Strength Analysis</span>
            </h3>

            <Card className="bg-slate-900/90 border border-slate-700/50 p-4 sm:p-6 backdrop-blur-sm">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Top 8 Teams by Overall Strength</h4>
              <div className="space-y-3 sm:space-y-4">
                {teamStrengthData.map((team, index) => (
                  <div key={team.team} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-16 sm:w-20 text-xs sm:text-sm font-medium text-slate-300">{team.team}</div>
                    <div className="flex-1 bg-slate-800 rounded-full h-6 sm:h-8 relative overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${team.strength}%` }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-end pr-2 sm:pr-3">
                        <span className="text-white font-bold text-xs sm:text-sm">{team.strength}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-slate-900/90 border border-slate-700/50 p-4 sm:p-6 backdrop-blur-sm">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Swords className="h-4 w-4 sm:h-5 sm:w-5 text-teal-400" />
                Attack vs Defense Matrix
              </h4>
              <div className="text-slate-400 mb-4 text-xs sm:text-sm">Team Playing Styles: Attack vs Defense</div>
              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-8 h-48 sm:h-64 relative">
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-xs text-slate-500">Defensive</div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-xs text-slate-500">Attacking</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-slate-600 text-xs sm:text-sm">Attack Strength</div>
                </div>
                <div className="absolute top-1/2 left-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-teal-400 rounded-full"></div>
                <div className="absolute top-1/3 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-teal-400 rounded-full"></div>
                <div className="absolute top-2/3 right-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-teal-400 rounded-full"></div>
              </div>
            </Card>

            <Card className="bg-slate-900/90 border border-slate-700/50 p-4 sm:p-6 backdrop-blur-sm">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-teal-400" />
                Team Categories (2025/26)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <h5 className="font-semibold text-emerald-400 mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <Crown className="h-3 w-3 sm:h-4 sm:w-4" />
                    Title Contenders
                  </h5>
                  <div className="space-y-2">
                    {["1", "2", "3"].map((pos) => (
                      <div key={pos} className="bg-slate-800/50 rounded-lg p-2 sm:p-3 text-slate-300 text-sm">
                        {pos}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-400 mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <Target className="h-3 w-3 sm:h-4 sm:w-4" />
                    European Race
                  </h5>
                  <div className="space-y-2">
                    {["4", "5", "6"].map((pos) => (
                      <div key={pos} className="bg-slate-800/50 rounded-lg p-2 sm:p-3 text-slate-300 text-sm">
                        {pos}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-orange-400 mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4" />
                    Promoted Teams
                  </h5>
                  <div className="space-y-2">
                    {["Leeds", "Burnley", "Sunderland"].map((team) => (
                      <div key={team} className="bg-slate-800/50 rounded-lg p-2 sm:p-3 text-slate-300 text-sm">
                        {team}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )

      case "fpl-impact":
        return (
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 text-teal-400" />
              </div>
              <span className="text-sm sm:text-base lg:text-xl">FPL Team Impact Analysis</span>
            </h3>

            <div className="mb-4 sm:mb-6">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2 sm:gap-3">
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
                Team FPL Value Distribution
              </h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <Card className="bg-slate-900/90 border border-slate-700/50 p-4 sm:p-6 backdrop-blur-sm">
                <h4 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2 sm:gap-3">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
                  Highest FPL Points
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-white font-medium text-sm sm:text-base">Arsenal</span>
                    <span className="text-teal-400 text-xs sm:text-sm">0 total points (18.1% avg ownership)</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-white font-medium text-sm sm:text-base">Aston Villa</span>
                    <span className="text-teal-400 text-xs sm:text-sm">0 total points (15.2% avg ownership)</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-white font-medium text-sm sm:text-base">Brentford</span>
                    <span className="text-teal-400 text-xs sm:text-sm">0 total points (11.1% avg ownership)</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-white font-medium text-sm sm:text-base">Chelsea</span>
                    <span className="text-teal-400 text-xs sm:text-sm">0 total points (20.3% avg ownership)</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-white font-medium text-sm sm:text-base">Crystal Palace</span>
                    <span className="text-teal-400 text-xs sm:text-sm">0 total points (7.8% avg ownership)</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-slate-900/90 border border-slate-700/50 p-4 sm:p-6 backdrop-blur-sm">
                <h4 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2 sm:gap-3">
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                  Best Value Teams
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-white font-medium text-sm sm:text-base">Arsenal</span>
                    <span className="text-blue-400 text-xs sm:text-sm">0.0 pts/£m (avg £7.2m)</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-white font-medium text-sm sm:text-base">Aston Villa</span>
                    <span className="text-blue-400 text-xs sm:text-sm">0.0 pts/£m (avg £8.0m)</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-white font-medium text-sm sm:text-base">Brentford</span>
                    <span className="text-blue-400 text-xs sm:text-sm">0.0 pts/£m (avg £7.8m)</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-white font-medium text-sm sm:text-base">Chelsea</span>
                    <span className="text-blue-400 text-xs sm:text-sm">0.0 pts/£m (avg £9.0m)</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-white font-medium text-sm sm:text-base">Crystal Palace</span>
                    <span className="text-blue-400 text-xs sm:text-sm">0.0 pts/£m (avg £7.2m)</span>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-slate-900/90 border border-slate-700/50 p-4 sm:p-6 backdrop-blur-sm mb-4 sm:mb-6">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2 sm:gap-3">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-teal-400" />
                Most Popular FPL Assets by Team
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {fplAssets.map((asset, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-slate-700/30 last:border-0 gap-2"
                  >
                    <div className="font-medium text-white text-sm sm:text-base">{asset.player}</div>
                    <div className="text-left sm:text-right">
                      <div className="text-teal-400 font-semibold text-sm sm:text-base">{asset.price}</div>
                      <div className="text-xs text-slate-400">{asset.points}</div>
                      <div className="text-xs text-slate-500">{asset.ownership}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-slate-900/90 border border-slate-700/50 p-4 sm:p-6 backdrop-blur-sm">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2 sm:gap-3">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-teal-400" />
                Fixture Difficulty Insights
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {fixtureInsights.map((insight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0"></div>
                    <div className="text-sm sm:text-base">
                      <span className="font-semibold text-white">{insight.team}:</span>
                      <span className={`ml-2 ${insight.color}`}>{insight.insight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )

      case "head-to-head":
        return (
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                <Swords className="h-3 w-3 sm:h-4 sm:w-4 text-teal-400" />
              </div>
              <span className="text-sm sm:text-base lg:text-xl">Head-to-Head Team Comparisons</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">Select Team 1</label>
                <Select value={team1} onValueChange={setTeam1}>
                  <SelectTrigger className="bg-slate-800/50 border-slate-700/50 text-white h-10 sm:h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    {["Liverpool", "Arsenal", "Man City", "Chelsea", "Newcastle", "Tottenham"].map((team) => (
                      <SelectItem key={team} value={team} className="text-white hover:bg-slate-700">
                        {team}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">Select Team 2</label>
                <Select value={team2} onValueChange={setTeam2}>
                  <SelectTrigger className="bg-slate-800/50 border-slate-700/50 text-white h-10 sm:h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    {["Liverpool", "Arsenal", "Man City", "Chelsea", "Newcastle", "Tottenham"].map((team) => (
                      <SelectItem key={team} value={team} className="text-white hover:bg-slate-700">
                        {team}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Card className="bg-slate-900/90 border border-slate-700/50 p-4 sm:p-6 backdrop-blur-sm">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                {team1} vs {team2}
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      <th className="text-left py-3 text-slate-300 font-medium text-xs sm:text-sm">Metric</th>
                      <th className="text-center py-3 text-slate-300 font-medium text-xs sm:text-sm">{team1}</th>
                      <th className="text-center py-3 text-slate-300 font-medium text-xs sm:text-sm">{team2}</th>
                      <th className="text-right py-3 text-slate-300 font-medium text-xs sm:text-sm">Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: "Position", team1Val: "2", team2Val: "1", advantage: team2 },
                      { metric: "Points", team1Val: "0", team2Val: "0", advantage: "Equal" },
                      { metric: "Goals For", team1Val: "0", team2Val: "0", advantage: "Equal" },
                      { metric: "Goals Against", team1Val: "0", team2Val: "0", advantage: "Equal" },
                      { metric: "Overall Strength", team1Val: "89", team2Val: "92", advantage: team2 },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-slate-700/30">
                        <td className="py-3 sm:py-4 font-medium text-white text-xs sm:text-sm">{row.metric}</td>
                        <td className="py-3 sm:py-4 text-center text-slate-300 text-xs sm:text-sm">{row.team1Val}</td>
                        <td className="py-3 sm:py-4 text-center text-slate-300 text-xs sm:text-sm">{row.team2Val}</td>
                        <td className="py-3 sm:py-4 text-right">
                          <span
                            className={`font-medium text-xs sm:text-sm ${row.advantage === "Equal" ? "text-slate-400" : "text-teal-400"}`}
                          >
                            {row.advantage}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="bg-slate-900/90 border border-slate-700/50 p-4 sm:p-6 backdrop-blur-sm">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2 sm:gap-3">
                <Swords className="h-4 w-4 sm:h-5 sm:w-5 text-teal-400" />
                Key Rivalries (2025/26)
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {rivalries.map((rivalry, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300 text-sm sm:text-base">{rivalry}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center backdrop-blur-sm shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-white/10 rounded-xl sm:rounded-2xl border border-white/20 backdrop-blur-sm">
              <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Team Analytics Centre</h2>
          </div>
          <p className="text-base sm:text-xl text-white/90 font-light">2025/26 Season • All 20 Premier League Teams</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
        {teamStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card
              key={index}
              className="bg-slate-900/90 border border-slate-700/50 p-3 sm:p-6 backdrop-blur-sm hover:bg-slate-800/90 transition-all duration-300 hover:border-teal-500/30"
            >
              <div className="flex items-center gap-2 text-slate-400 mb-2 sm:mb-3">
                <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">{stat.label}</span>
              </div>
              <div className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">{stat.value}</div>
              <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 hover:bg-teal-500/30 text-xs">
                {stat.badge}
              </Badge>
            </Card>
          )
        })}
      </div>

      <Card className="bg-slate-900/90 border border-slate-700/50 p-4 sm:p-6 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-slate-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
            <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <div>
            <span className="font-semibold text-white text-sm sm:text-base">Promoted Teams 2025/26:</span>
            <div className="text-xs sm:text-sm mt-1">
              Leeds United (Champions), Burnley (Automatic), Sunderland (Play-offs)
            </div>
          </div>
        </div>
      </Card>

      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {[
          { id: "league-table", label: "League Table", icon: Trophy },
          { id: "team-strength", label: "Team Strength", icon: TrendingUp },
          { id: "fpl-impact", label: "FPL Impact", icon: Users },
          { id: "head-to-head", label: "Head-to-Head", icon: Crown },
        ].map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap min-h-[44px] ${
                activeSubTab === tab.id
                  ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white border border-teal-500/30 shadow-lg shadow-teal-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50 border border-slate-700/30"
              }`}
            >
              <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {renderSubTabContent()}
    </div>
  )
}
