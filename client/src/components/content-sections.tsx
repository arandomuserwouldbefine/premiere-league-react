import { NewsSection } from "./news-section"
import { PlayerAnalysis } from "./player-analysis"
import { TeamAnalytics } from "./team-analytics"
import { BarChart3 } from "lucide-react"
import { LeagueTable } from "./league-table"
import { FormationStrategy } from "./formation-strategy"
import { AdvancedAnalytics } from "./advanced-analytics"

interface ContentSectionsProps {
  activeTab: string
}

export function ContentSections({ activeTab }: ContentSectionsProps) {
  return (
    <div className="space-y-8">
      {activeTab === "news" && <NewsSection />}
      {activeTab === "player" && <PlayerAnalysis />}
      {activeTab === "team" && <TeamAnalytics />}
      {activeTab === "table" && <LeagueTable />}
      {activeTab === "formation" && <FormationStrategy />}
      {activeTab === "advanced" && <AdvancedAnalytics />}
      {activeTab !== "news" &&
        activeTab !== "player" &&
        activeTab !== "team" &&
        activeTab !== "table" &&
        activeTab !== "formation" &&
        activeTab !== "advanced" && (
          <div className="bg-slate-900/50 rounded-2xl p-12 text-center border border-slate-700/40">
            <div className="text-slate-400">
              <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p>This section is currently under development.</p>
            </div>
          </div>
        )}
    </div>
  )
}
