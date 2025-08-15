import {
  Newspaper,
  Target,
  Trophy,
  BarChart3,
  Users,
  TrendingUp,
} from "lucide-react";

const tabs = [
  { id: "news", label: "News Centre", shortLabel: "News", icon: Newspaper },
  {
    id: "player",
    label: "Player Analysis",
    shortLabel: "Players",
    icon: Target,
  },
  { id: "team", label: "Team Analytics", shortLabel: "Teams", icon: Trophy },
  { id: "table", label: "League Table", shortLabel: "Table", icon: BarChart3 },
  {
    id: "formation",
    label: "Formation & Strategy",
    shortLabel: "Strategy",
    icon: Users,
  },
  {
    id: "advanced",
    label: "Advanced Analytics",
    shortLabel: "Advanced",
    icon: TrendingUp,
  },
];

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function NavigationTabs({
  activeTab,
  onTabChange,
}: NavigationTabsProps) {
  return (
    <div className="border-b border-teal-700/30 pb-3 sm:pb-4 md:pb-6">
      <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide pb-2 px-1 pt-[2px] sm:px-0">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center justify-center gap-1 sm:gap-2 md:gap-3 
                px-2 sm:px-3 md:px-4 lg:px-6 
                py-2 sm:py-2.5 md:py-3 
                rounded-lg sm:rounded-xl md:rounded-2xl 
                text-xs sm:text-sm md:text-base 
                font-medium sm:font-semibold 
                transition-all duration-300 
                whitespace-nowrap
                touch-manipulation
                ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white border border-emerald-400/40 shadow-lg shadow-teal-500/20 scale-105 sm:scale-100"
                    : "text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-teal-800/50 hover:to-slate-800/50 border border-slate-700/40 hover:border-teal-600/40 hover:scale-105 sm:hover:scale-100"
                }
              `}
            >
              <Icon className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
              <span className="hidden md:inline font-medium">{tab.label}</span>
              <span className="md:hidden text-xs sm:text-sm font-medium">
                {tab.shortLabel}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center mt-2 sm:hidden">
        <div className="flex gap-1">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`h-1 w-6 rounded-full transition-all duration-300 ${
                activeTab === tab.id ? "bg-teal-500" : "bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
