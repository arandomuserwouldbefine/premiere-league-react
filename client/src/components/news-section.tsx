"use client"

import { useState } from "react"
import { Newspaper, BarChart3, Calendar, CheckCircle, Trophy, Activity, Target } from "lucide-react"
import { NewsArticle } from "./news-article"
import { TransferNews } from "./transfer-news"
import { getCurrentGameweek } from "@/lib/game-week"

export function NewsSection() {
  const [activeSubTab, setActiveSubTab] = useState("Breaking News")

  const breakingNews = [
    {
      Icon: Trophy,
      TagLabel: "League Update",
      Source: "Premier League Official",
      TimeAgo: "3 hours ago",
      Title: `Liverpool maintain title charge after Gameweek ${getCurrentGameweek("2025-08-15")} victories`,
      Description:
        "The Reds continue their strong Premier League campaign with key wins maintaining their position at the summit.",
      StatsIcon: BarChart3,
      StatsText: "45,672 clicks",
    },
    {
      Icon: Activity,
      TagLabel: "Injury Update",
      Source: "BBC Sport",
      TimeAgo: "4 hours ago",
      Title: `Gameweek ${getCurrentGameweek("2025-08-15")} injury roundup: Key updates for FPL managers`,
      Description: "Latest fitness news from all 20 Premier League clubs heading into the busy festive period.",
      StatsIcon: BarChart3,
      StatsText: "32,145 clicks",
    },
    {
      Icon: Calendar,
      TagLabel: "Fixture",
      Source: "Premier League Official",
      TimeAgo: "5 hours ago",
      Title: "Premier League fixture update: Festive period schedule confirmed",
      Description: "Official confirmation of match times and dates for the crucial Christmas and New Year fixtures.",
      StatsIcon: BarChart3,
      StatsText: "28,934 clicks",
    },
    {
      Icon: BarChart3,
      TagLabel: "Report",
      Source: "Sky Sports",
      TimeAgo: "6 hours ago",
      Title: "Player stats analysis: Top performers through 16 gameweeks",
      Description: "Sky Sports breaks down the key statistics from the season so far across all positions.",
      StatsIcon: BarChart3,
      StatsText: "23,876 clicks",
    },
    {
      Icon: Target,
      TagLabel: "FPL Official",
      Source: "Premier League Official",
      TimeAgo: "7 hours ago",
      Title: "FPL price changes: Latest updates from official game",
      Description: "Official Fantasy Premier League price movements and transfer trends ahead of next deadline.",
      StatsIcon: BarChart3,
      StatsText: "19,432 clicks",
    },
  ]

  const matchAnalysis = [
    {
      Icon: Activity,
      TagLabel: "Team News",
      Source: "Premier League Official",
      TimeAgo: "1 day ago",
      Title: `Gameweek ${getCurrentGameweek("2025-08-15")} team news: Official injury updates from all clubs`,
      Description:
        "Comprehensive injury and team news roundup from all 20 Premier League clubs ahead of this weekend's fixtures.",
      StatsIcon: BarChart3,
      StatsText: "67,892 clicks",
    },
    {
      Icon: Calendar,
      TagLabel: "Match Preview",
      Source: "BBC Sport",
      TimeAgo: "1 day ago",
      Title: "Premier League weekend preview: Key matches and talking points",
      Description: `BBC Sport's analysis of the standout fixtures and storylines to watch in Gameweek ${getCurrentGameweek("2025-08-15")}.`,
      StatsIcon: BarChart3,
      StatsText: "45,123 clicks",
    },
    {
      Icon: Target,
      TagLabel: "Predictions",
      Source: "Sky Sports",
      TimeAgo: "6 hours ago",
      Title: `Sky Sports Premier League predictions: Expert insights for GW${getCurrentGameweek("2025-08-15")}`,
      Description: "Sky Sports panel predictions and analysis for all weekend Premier League fixtures.",
      StatsIcon: BarChart3,
      StatsText: "38,967 clicks",
    },
  ]

  const fplInsights = [
    {
      Icon: Target,
      TagLabel: "FPL Official",
      Source: "Premier League Official",
      TimeAgo: "2 hours ago",
      Title: "Official FPL price changes: Latest player value movements",
      Description:
        `Official Fantasy Premier League price changes and the most transferred players ahead of GW${getCurrentGameweek("2025-08-15")} deadline.`,
      StatsIcon: BarChart3,
      StatsText: "59,832 clicks",
    },
    {
      Icon: BarChart3,
      TagLabel: "Statistics",
      Source: "BBC Sport",
      TimeAgo: "4 hours ago",
      Title: `Premier League stats: Form guide for Gameweek ${getCurrentGameweek("2025-08-15")} fixtures`,
      Description: "BBC Sport breaks down the key statistics and form trends for all Premier League teams.",
      StatsIcon: BarChart3,
      StatsText: "34,567 clicks",
    },
    {
      Icon: Activity,
      TagLabel: "Analysis",
      Source: "ESPN",
      TimeAgo: "6 hours ago",
      Title: "ESPN Fantasy focus: Premier League player performance data",
      Description: "ESPN's comprehensive analysis of player statistics and trends for fantasy managers.",
      StatsIcon: BarChart3,
      StatsText: "32,341 clicks",
    },
  ]

  const handleReadMore = (articleTitle: string) => {
    console.log(`Reading full article: ${articleTitle}`)
    // In a real app, this would navigate to the full article
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-center backdrop-blur-sm shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-white/10 rounded-xl sm:rounded-2xl border border-white/20 backdrop-blur-sm">
              <Newspaper className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center sm:text-left">
              Premier League News Centre
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 font-light px-2">
            PRE-SEASON • 2025/26 Season • Season Starts August 17, 2025
          </p>
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 max-w-full">
            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-white/90 text-center">
              <span className="hidden sm:inline">
                Trusted Sources: Premier League Official • BBC Sport • Sky Sports • ESPN
              </span>
              <span className="sm:hidden">Trusted Premier League Sources</span>
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="flex gap-2 sm:gap-3 min-w-max sm:min-w-0 sm:flex-wrap px-1">
          {["Breaking News", "Transfer Market", "Match Analysis", "FPL Insights"].map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm font-medium transition-all duration-300 whitespace-nowrap min-h-[44px] ${
                activeSubTab === tab
                  ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white border border-teal-500/30 shadow-lg shadow-teal-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50 border border-slate-700/30"
              }`}
            >
              <span className="hidden sm:inline">{tab}</span>
              <span className="sm:hidden">
                {tab === "Breaking News" && "Breaking"}
                {tab === "Transfer Market" && "Transfers"}
                {tab === "Match Analysis" && "Matches"}
                {tab === "FPL Insights" && "FPL"}
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeSubTab === "Breaking News" && (
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-teal-400 rounded-full animate-pulse"></div>
            </div>
            <span className="hidden sm:inline">Latest Premier League News</span>
            <span className="sm:hidden">Latest News</span>
          </h3>

          <div className="space-y-4 sm:space-y-6">
            {breakingNews.map((article, index) => (
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
        </div>
      )}

      {activeSubTab === "Transfer Market" && <TransferNews />}

      {activeSubTab === "Match Analysis" && (
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
              <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" />
            </div>
            <span className="hidden sm:inline">Match Analysis & Previews</span>
            <span className="sm:hidden">Match Analysis</span>
          </h3>

          <div className="space-y-4 sm:space-y-6">
            {matchAnalysis.map((article, index) => (
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
        </div>
      )}

      {activeSubTab === "FPL Insights" && (
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" />
            </div>
            <span className="hidden sm:inline">Fantasy Premier League Insights</span>
            <span className="sm:hidden">FPL Insights</span>
          </h3>

          <div className="space-y-4 sm:space-y-6">
            {fplInsights.map((article, index) => (
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
        </div>
      )}
    </div>
  )
}
