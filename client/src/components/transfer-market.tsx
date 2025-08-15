import { TrendingUp, TrendingDown, Calendar, FileText, Zap, BarChart3 } from "lucide-react"

export function TransferMarket() {
  return (
    <div className="space-y-8">
      {/* Transfer Market Intelligence Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg">
          <FileText className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
          Transfer Market Intelligence
        </h2> 
      </div>

      {/* Transfer News Articles */}
      <div className="space-y-6">
        {/* Transfer Window Article */}
        <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-teal-700/30 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300 group">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-teal-400" />
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Transfer Window
              </span>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm">Sky Sports</p>
              <p className="text-slate-500 text-xs">3 hours ago</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
            January transfer window opens: Premier League clubs prepare moves
          </h3>

          <p className="text-slate-300 mb-4 leading-relaxed">
            Official window opens January 1st with several Premier League clubs already linked with potential signings.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-teal-400">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">52,341 clicks</span>
            </div>
            <button className="text-teal-400 hover:text-teal-300 font-semibold text-sm transition-colors">
              Read full article →
            </button>
          </div>
        </div>

        {/* Transfer Rules Article */}
        <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-teal-700/30 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300 group">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-orange-400" />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Transfer Rules
              </span>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm">BBC Sport</p>
              <p className="text-slate-500 text-xs">1 day ago</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
            Premier League spending regulations: What clubs can do in January
          </h3>

          <p className="text-slate-300 mb-4 leading-relaxed">
            BBC Sport explains the financial fair play rules affecting January transfer business.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-teal-400">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">41,567 clicks</span>
            </div>
            <button className="text-teal-400 hover:text-teal-300 font-semibold text-sm transition-colors">
              Read full article →
            </button>
          </div>
        </div>

        {/* Transfer Deadline Article */}
        <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-teal-700/30 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300 group">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-orange-400" />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Transfer News
              </span>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm">ESPN</p>
              <p className="text-slate-500 text-xs">4 hours ago</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
            Transfer deadline day countdown: Key dates for January window
          </h3>

          <p className="text-slate-300 mb-4 leading-relaxed">
            ESPN outlines all the important dates and deadlines for the January transfer period.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-teal-400">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">23,789 clicks</span>
            </div>
            <button className="text-teal-400 hover:text-teal-300 font-semibold text-sm transition-colors">
              Read full article →
            </button>
          </div>
        </div>
      </div>

      {/* Transfer Market Trends */}
      <div className="mt-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg">
            <BarChart3 className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Transfer Market Trends
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Most Transferred IN */}
          <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-teal-700/30 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-400" />
              Most Transferred IN (Last 24h)
            </h4>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-xl p-4 border border-slate-600/40">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-white font-semibold">Mohamed Salah</span>
                  <span className="text-emerald-400 font-bold ml-auto">(+234,567)</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-xl p-4 border border-slate-600/40">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-white font-semibold">Alexander Isak</span>
                  <span className="text-emerald-400 font-bold ml-auto">(+189,234)</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-xl p-4 border border-slate-600/40">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-white font-semibold">Cole Palmer</span>
                  <span className="text-emerald-400 font-bold ml-auto">(+156,789)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Most Transferred OUT */}
          <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-teal-700/30 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-red-400" />
              Most Transferred OUT (Last 24h)
            </h4>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-xl p-4 border border-slate-600/40">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Erling Haaland</span>
                  <span className="text-red-400 font-bold ml-auto">(-89,234)</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-xl p-4 border border-slate-600/40">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-white font-semibold">Marcus Rashford</span>
                  <span className="text-red-400 font-bold ml-auto">(-67,890)</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-xl p-4 border border-slate-600/40">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-white font-semibold">Dominic Solanke</span>
                  <span className="text-red-400 font-bold ml-auto">(-45,678)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
