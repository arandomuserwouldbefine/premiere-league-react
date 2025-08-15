import { useState } from "react";
import { Header } from "./components/header"
import { NavigationTabs } from "./components/navigation-tabs";
import { ContentSections } from "./components/content-sections";

function App() {
  const [activeTab, setActiveTab] = useState("news");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12 space-y-8 sm:space-y-12 md:space-y-16 max-w-7xl">
        <Header />
        <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <ContentSections activeTab={activeTab} />
      </div>
    </div>
  )
}

export default App
