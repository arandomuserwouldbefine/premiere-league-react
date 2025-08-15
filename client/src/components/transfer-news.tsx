import { TrendingUp, Calendar, FileText, Zap, BarChart3 } from "lucide-react"
import { NewsArticle } from "./news-article"

export function TransferNews() {
  const transferNews = [
    {
      Icon: Calendar,
      TagLabel: "Transfer Window",
      Source: "Sky Sports",
      TimeAgo: "3 hours ago",
      Title: "January transfer window opens: Premier League clubs prepare moves",
      Description: "Official window opens January 1st with several Premier League clubs already linked with potential signings.",
      StatsIcon: TrendingUp,
      StatsText: "52,341 clicks"
    },
    {
      Icon: Zap,
      TagLabel: "Transfer Rules",
      Source: "BBC Sport",
      TimeAgo: "1 day ago",
      Title: "Premier League spending regulations: What clubs can do in January",
      Description: "BBC Sport explains the financial fair play rules affecting January transfer business.",
      StatsIcon: TrendingUp,
      StatsText: "41,567 clicks"
    },
    {
      Icon: FileText,
      TagLabel: "Transfer News",
      Source: "ESPN",
      TimeAgo: "4 hours ago",
      Title: "Transfer deadline day countdown: Key dates for January window",
      Description: "ESPN outlines all the important dates and deadlines for the January transfer period.",
      StatsIcon: TrendingUp,
      StatsText: "23,789 clicks"
    },
    {
      Icon: BarChart3,
      TagLabel: "Market Analysis",
      Source: "The Athletic",
      TimeAgo: "6 hours ago",
      Title: "Top 10 most expensive January transfers in Premier League history",
      Description: "Analysis of the biggest winter window deals and their impact on Premier League clubs.",
      StatsIcon: TrendingUp,
      StatsText: "18,432 clicks"
    },
    {
      Icon: FileText,
      TagLabel: "Rumors",
      Source: "Goal.com",
      TimeAgo: "2 hours ago",
      Title: "Manchester United linked with €80m striker as Haaland alternative",
      Description: "Latest transfer rumors suggest United are exploring options to strengthen their attack.",
      StatsIcon: TrendingUp,
      StatsText: "34,567 clicks"
    },
    {
      Icon: Calendar,
      TagLabel: "Deadline Day",
      Source: "Sky Sports",
      TimeAgo: "1 hour ago",
      Title: "Transfer deadline day: Live updates and breaking news",
      Description: "Follow all the latest transfer news and confirmed deals as the window reaches its climax.",
      StatsIcon: TrendingUp,
      StatsText: "67,890 clicks"
    }
  ]

  const handleReadMore = (articleTitle: string) => {
    console.log(`Reading full article: ${articleTitle}`)
    // In a real app, this would navigate to the full article
  }

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
        {transferNews.map((article, index) => (
          <NewsArticle
            key={index}
            Icon={article.Icon}
            TagLabel={article.TagLabel}
            Source={article.Source}
            TimeAgo={article.TimeAgo}
            Title={article.Title}
            Description={article.Description}
            StatsIcon={article.StatsIcon}
            StatsText={article.StatsText}
            onReadMore={() => handleReadMore(article.Title)}
          />
        ))}
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
              <TrendingUp className="h-5 w-5 text-red-400 rotate-180" />
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
