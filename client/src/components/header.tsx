import { Trophy, Calendar, Users } from "lucide-react"

export function Header() {
  return (
    <div className="relative">
      {/* Main Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 border border-teal-700/50 rounded-3xl p-6 sm:p-8 md:p-12 text-center backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-teal-400/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-emerald-500/20 rounded-2xl border border-emerald-400/30">
              <Trophy className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-emerald-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent leading-tight">
              Premier League Analytics
            </h1>
          </div>
          <p className="text-sm sm:text-lg md:text-xl text-teal-200 mb-6 sm:mb-8 font-medium px-2">
            Advanced Fantasy Premier League Platform • 2025/26 Season
          </p>

          {/* Status Banner */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-teal-800/60 backdrop-blur-sm border border-teal-600/40 rounded-2xl px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-semibold text-white">PRE-SEASON</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-teal-600"></div>
            <div className="flex items-center gap-2 text-teal-100">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">Season starts August 17, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="mt-4 sm:mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {[
          { label: "Total Teams", value: "20", icon: Users },
          { label: "Current GW", value: "16/38", icon: Calendar },
          { label: "Leader Points", value: "0", icon: Trophy },
          { label: "Days to Kickoff", value: "7", icon: Calendar },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-teal-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center backdrop-blur-sm hover:from-teal-900/50 hover:to-slate-900 hover:border-teal-600/50 transition-all duration-300 group"
          >
            <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 mx-auto mb-2 group-hover:text-emerald-300 transition-colors" />
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
