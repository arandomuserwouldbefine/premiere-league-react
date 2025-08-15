"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, TrendingUp, Clock } from "lucide-react"
import { GameweekNumber } from "./game-week"

export function LeagueTable() {
  const [activeSubTab, setActiveSubTab] = useState("current")

  const subTabs = [
    { id: "current", label: "Current Table", shortLabel: "Table", icon: Trophy },
    { id: "fixtures", label: "Fixtures & Results", shortLabel: "Fixtures", icon: Calendar },
    { id: "form", label: "Form & Trends", shortLabel: "Form", icon: TrendingUp },
  ]

  const leagueTable = [
    { pos: 1, team: "Arsenal", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 2, team: "Liverpool", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 3, team: "Man City", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 4, team: "Chelsea", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 5, team: "Aston Villa", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 6, team: "Tottenham", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 7, team: "Newcastle", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 8, team: "Brighton", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 9, team: "Man United", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 10, team: "West Ham", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 11, team: "Crystal Palace", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 12, team: "Fulham", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 13, team: "Brentford", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 14, team: "Wolves", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 15, team: "Everton", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 16, team: "Nottm Forest", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 17, team: "Bournemouth", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 18, team: "Ipswich", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 19, team: "Leicester", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 20, team: "Southampton", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
  ]

  const fixtures = [
    { home: "Arsenal", away: "Ipswich", date: "Dec 27", time: "15:00" },
    { home: "Liverpool", away: "Tottenham", date: "Dec 27", time: "17:30" },
    { home: "Man City", away: "Leicester", date: "Dec 28", time: "15:00" },
    { home: "Chelsea", away: "Fulham", date: "Dec 28", time: "17:30" },
    { home: "Newcastle", away: "West Ham", date: "Dec 29", time: "15:00" },
    { home: "Brentford", away: "Wolves", date: "Dec 29", time: "17:30" },
    { home: "Brighton", away: "Everton", date: "Dec 30", time: "15:00" },
    { home: "Aston Villa", away: "Crystal Palace", date: "Dec 30", time: "17:30" },
  ]

  const formGrid = [
    ["Arsenal", "Liverpool", "Man City", "Chelsea"],
    ["Aston Villa", "Tottenham", "Newcastle", "Brighton"],
    ["Man United", "West Ham", "Crystal Palace", "Fulham"],
    ["Brentford", "Wolves", "Everton", "Leicester"],
    ["Bournemouth", "Ipswich", "Leicester", "Southampton"],
  ]

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      <div className="bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-400 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-4">
          <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Premier League Table</h1>
        </div>
        <p className="text-white/90 text-sm sm:text-base lg:text-lg">2025/26 Season • Gameweek <GameweekNumber startDate="2025-08-15"/></p>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 text-xs sm:text-sm text-slate-400 px-2 sm:px-0">
        <span>Season Progress: 42.1% complete</span>
        <span>Matches Played: 16/38 gameweeks</span>
      </div>

      <div className="flex gap-2 mb-4 sm:mb-6 lg:mb-8 overflow-x-auto scrollbar-hide px-2 sm:px-0">
        {subTabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg font-medium transition-all whitespace-nowrap min-h-[44px] ${
                activeSubTab === tab.id
                  ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg"
                  : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-slate-700/40"
              }`}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              <span className="sm:hidden">{tab.shortLabel}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Current Table */}
      {activeSubTab === "current" && (
        <div className="space-y-4 sm:space-y-6">
          <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-white text-lg sm:text-xl">
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-teal-400" />
                <span className="hidden sm:inline">Premier League Table 2025/26</span>
                <span className="sm:hidden">PL Table 2025/26</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 sm:px-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-slate-700/40">
                      <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-slate-400 font-medium text-xs sm:text-sm">
                        Pos
                      </th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-slate-400 font-medium text-xs sm:text-sm">
                        Team
                      </th>
                      <th className="text-center py-2 sm:py-3 px-1 sm:px-2 text-slate-400 font-medium text-xs sm:text-sm">
                        P
                      </th>
                      <th className="text-center py-2 sm:py-3 px-1 sm:px-2 text-slate-400 font-medium text-xs sm:text-sm">
                        W
                      </th>
                      <th className="text-center py-2 sm:py-3 px-1 sm:px-2 text-slate-400 font-medium text-xs sm:text-sm">
                        D
                      </th>
                      <th className="text-center py-2 sm:py-3 px-1 sm:px-2 text-slate-400 font-medium text-xs sm:text-sm">
                        L
                      </th>
                      <th className="text-center py-2 sm:py-3 px-1 sm:px-2 text-slate-400 font-medium text-xs sm:text-sm">
                        GF
                      </th>
                      <th className="text-center py-2 sm:py-3 px-1 sm:px-2 text-slate-400 font-medium text-xs sm:text-sm">
                        GA
                      </th>
                      <th className="text-center py-2 sm:py-3 px-1 sm:px-2 text-slate-400 font-medium text-xs sm:text-sm">
                        GD
                      </th>
                      <th className="text-center py-2 sm:py-3 px-1 sm:px-2 text-slate-400 font-medium text-xs sm:text-sm">
                        Pts
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {leagueTable.map((team, index) => (
                      <tr
                        key={team.team}
                        className="border-b border-slate-800/40 hover:bg-slate-800/30 transition-colors"
                      >
                        <td className="py-2 sm:py-3 px-1 sm:px-2">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <div
                              className={`w-1 h-4 sm:h-6 rounded-full ${
                                index < 4
                                  ? "bg-teal-400"
                                  : index < 6
                                    ? "bg-emerald-400"
                                    : index >= 17
                                      ? "bg-red-400"
                                      : "bg-slate-600"
                              }`}
                            />
                            <span className="text-white font-medium text-sm sm:text-base">{team.pos}</span>
                          </div>
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-white font-medium text-sm sm:text-base">
                          {team.team}
                        </td>
                        <td className="py-2 sm:py-3 px-1 sm:px-2 text-center text-slate-300 text-sm">{team.p}</td>
                        <td className="py-2 sm:py-3 px-1 sm:px-2 text-center text-slate-300 text-sm">{team.w}</td>
                        <td className="py-2 sm:py-3 px-1 sm:px-2 text-center text-slate-300 text-sm">{team.d}</td>
                        <td className="py-2 sm:py-3 px-1 sm:px-2 text-center text-slate-300 text-sm">{team.l}</td>
                        <td className="py-2 sm:py-3 px-1 sm:px-2 text-center text-slate-300 text-sm">{team.gf}</td>
                        <td className="py-2 sm:py-3 px-1 sm:px-2 text-center text-slate-300 text-sm">{team.ga}</td>
                        <td className="py-2 sm:py-3 px-1 sm:px-2 text-center text-slate-300 text-sm">{team.gd}</td>
                        <td className="py-2 sm:py-3 px-1 sm:px-2 text-center text-white font-semibold text-sm">
                          {team.pts}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-400 rounded-full" />
                  <span className="text-slate-400">Champions League (1-4)</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full" />
                  <span className="text-slate-400">Europa League (5)</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-slate-600 rounded-full" />
                  <span className="text-slate-400">Conference League (6)</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full" />
                  <span className="text-slate-400">Relegation (18-20)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 px-2 sm:px-0">
            <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="text-teal-400 font-semibold mb-1 text-xs sm:text-sm">Leader</div>
                <div className="text-white font-bold text-sm sm:text-lg">Arsenal</div>
                <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 mt-1 sm:mt-2 text-xs">0 pts</Badge>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="text-emerald-400 font-semibold mb-1 text-xs sm:text-sm">4th Place</div>
                <div className="text-white font-bold text-sm sm:text-lg">Chelsea</div>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mt-1 sm:mt-2 text-xs">
                  0 pts
                </Badge>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="text-red-400 font-semibold mb-1 text-xs sm:text-sm">Relegation Zone</div>
                <div className="text-white font-bold text-sm sm:text-lg">Ipswich</div>
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30 mt-1 sm:mt-2 text-xs">0 pts</Badge>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="text-slate-400 font-semibold mb-1 text-xs sm:text-sm">Title Gap</div>
                <div className="text-white font-bold text-sm sm:text-lg">0 pts</div>
                <Badge className="bg-slate-500/20 text-slate-400 border-slate-500/30 mt-1 sm:mt-2 text-xs">
                  1st to 2nd
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Fixtures & Results */}
      {activeSubTab === "fixtures" && (
        <div className="space-y-4 sm:space-y-6">
          <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-white text-lg sm:text-xl">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-teal-400" />
                <span className="hidden sm:inline">Gameweek 16 Fixtures</span>
                <span className="sm:hidden">GW16 Fixtures</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 sm:px-6">
              <div className="space-y-3 sm:space-y-4">
                {fixtures.map((fixture, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:bg-slate-700/30 transition-colors gap-2 sm:gap-4"
                  >
                    <div className="flex items-center gap-2 sm:gap-4 justify-center sm:justify-start">
                      <div className="text-white font-medium text-sm sm:text-base">{fixture.home}</div>
                      <div className="text-teal-400 font-semibold text-sm sm:text-base">vs</div>
                      <div className="text-white font-medium text-sm sm:text-base">{fixture.away}</div>
                    </div>
                    <div className="flex items-center justify-center sm:justify-end gap-3 sm:gap-3 text-slate-400 text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-teal-400" />
                        {fixture.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                        {fixture.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-white text-lg sm:text-xl">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-teal-400" />
                FPL Fixture Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 sm:px-6">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-slate-800/20 rounded-lg">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm sm:text-base">
                    Liverpool vs Man United: Salah captain potential despite tough opponent
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-slate-800/20 rounded-lg">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm sm:text-base">
                    Arsenal vs Brighton: Isak and great players, focus on home games
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-slate-800/20 rounded-lg">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm sm:text-base">
                    Man City vs Leicester: Haaland bounce back opportunity
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-slate-800/20 rounded-lg">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm sm:text-base">
                    Newcastle vs West Ham: Isak essential with their favorable schedule
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-slate-800/20 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm sm:text-base">
                    Aston Villa vs Tottenham: Rogers and Watkins at home
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Form & Trends */}
      {activeSubTab === "form" && (
        <div className="space-y-4 sm:space-y-6">
          <Card className="bg-slate-900/50 border-slate-700/40 backdrop-blur-sm mx-2 sm:mx-0">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-white text-lg sm:text-xl">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-teal-400" />
                Form & Trends Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 sm:px-6">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
                  Recent Form (Last 5 Games)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="space-y-2 sm:space-y-4">
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Arsenal</div>
                      <div className="text-teal-400 text-xs mt-1">W W W D W</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Aston Villa</div>
                      <div className="text-emerald-400 text-xs mt-1">W W D W L</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Brentford</div>
                      <div className="text-yellow-400 text-xs mt-1">D L W D W</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Bournemouth</div>
                      <div className="text-red-400 text-xs mt-1">L L D L W</div>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-4">
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Liverpool</div>
                      <div className="text-teal-400 text-xs mt-1">W W W W D</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Tottenham</div>
                      <div className="text-emerald-400 text-xs mt-1">W D W L W</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Wolves</div>
                      <div className="text-yellow-400 text-xs mt-1">L D D W L</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Ipswich</div>
                      <div className="text-red-400 text-xs mt-1">L L L D L</div>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-4">
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Man City</div>
                      <div className="text-emerald-400 text-xs mt-1">W W D W W</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Newcastle</div>
                      <div className="text-teal-400 text-xs mt-1">W W W D L</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Everton</div>
                      <div className="text-yellow-400 text-xs mt-1">D W L D D</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Leicester</div>
                      <div className="text-red-400 text-xs mt-1">L D L L W</div>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-4">
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Chelsea</div>
                      <div className="text-emerald-400 text-xs mt-1">W D W W L</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Brighton</div>
                      <div className="text-teal-400 text-xs mt-1">W L W W D</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Fulham</div>
                      <div className="text-yellow-400 text-xs mt-1">D D W L W</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 text-center hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-xs sm:text-sm">Southampton</div>
                      <div className="text-red-400 text-xs mt-1">L L L L D</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="flex items-center gap-2 text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
                    <TrendingUp className="h-4 w-4 text-teal-400" />
                    Hot Streaks
                  </h3>
                  <div className="space-y-2">
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-sm sm:text-base">
                        1. Arsenal (unbeaten in 8 games)
                      </div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-sm sm:text-base">2. Liverpool (7 wins in last 8)</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-sm sm:text-base">
                        3. Newcastle (5 wins in 6 games)
                      </div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-sm sm:text-base">4. Man City (4 wins in 5 games)</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-sm sm:text-base">5. Brighton (3 wins in 4 games)</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
                    <TrendingUp className="h-4 w-4 text-red-400 rotate-180" />
                    Struggling
                  </h3>
                  <div className="space-y-2">
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-sm sm:text-base">
                        1. Southampton (winless in 9 games)
                      </div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-sm sm:text-base">2. Ipswich (1 win in last 10)</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-sm sm:text-base">
                        3. Leicester (2 wins in 12 games)
                      </div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-sm sm:text-base">4. Everton (3 wins in 16 games)</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:bg-slate-700/30 transition-colors">
                      <div className="text-white font-medium text-sm sm:text-base">
                        5. Crystal Palace (poor away form)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
