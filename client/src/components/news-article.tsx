"use client"

import type React from "react"

export const NewsArticle = ({
  Icon, // React icon component for category (e.g., Zap)
  TagLabel, // String for category label (e.g., "Transfer Rules")
  Source, // String for news source (e.g., "BBC Sport")
  TimeAgo, // String for time info (e.g., "1 day ago")
  Title, // Article title
  Description, // Article description
  StatsIcon, // React icon component for stats (e.g., TrendingUp)
  StatsText, // Stats text (e.g., "41,567 clicks")
  onReadMore, // Function for Read More click
}: {
  Icon: React.ComponentType<{ className?: string }>
  TagLabel: string
  Source: string
  TimeAgo: string
  Title: string
  Description: string
  StatsIcon: React.ComponentType<{ className?: string }>
  StatsText: string
  onReadMore: () => void
}) => {
  return (
    <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-teal-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-teal-500/50 transition-all duration-300 group">
      {/* Header Section - Stack on mobile, side-by-side on larger screens */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0 mb-4">
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 flex-shrink-0" />}
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
            {TagLabel}
          </span>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-slate-400 text-xs sm:text-sm font-medium">{Source}</p>
          <p className="text-slate-500 text-xs">{TimeAgo}</p>
        </div>
      </div>

      {/* Title - Responsive font sizing and line height */}
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors leading-tight sm:leading-normal">
        {Title}
      </h3>

      {/* Description - Better mobile readability */}
      <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">{Description}</p>

      {/* Footer - Stack on mobile, side-by-side on larger screens */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        <div className="flex items-center gap-2 text-teal-400">
          {StatsIcon && <StatsIcon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />}
          <span className="text-xs sm:text-sm font-medium">{StatsText}</span>
        </div>
        <button
          onClick={onReadMore}
          className="text-teal-400 hover:text-teal-300 font-semibold text-xs sm:text-sm transition-colors self-start sm:self-auto min-h-[44px] sm:min-h-0 flex items-center"
        >
          <span className="hidden sm:inline">Read full article →</span>
          <span className="sm:hidden">Read more →</span>
        </button>
      </div>
    </div>
  )
}
