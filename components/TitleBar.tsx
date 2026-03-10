interface TitleBarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function TitleBar({ activeTab, setActiveTab }: TitleBarProps) {
  return (
    <div className="flex items-center justify-between bg-white/5 px-4 py-3 border-b border-white/5">
      {/* Windows Controls */}

      <div className="flex items-center gap-6">
        <div className=" flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-inner"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-inner"></div>
        </div>

        {/* Tabs */}
        <div className="hidden md:flex items-center text-xs font-mono -mb-3.5 relative z-10">
          {/* Tab 1: Home */}
          <div
            onClick={() => setActiveTab("index.tsx")}
            className={`flex items-center gap-2 px-3 py-1 cursor-pointer rounded-t-md ${
              activeTab === "index.tsx"
                ? "bg-inner-background border-t border-x border-border-color"
                : "hover:bg-white/5 text-gray-500"
            }`}
          >
            <span className="text-blue-400">#</span>
            <span>index.tsx</span>
          </div>

          {/* Tab 2: Projects */}
          <div
            onClick={() => setActiveTab("projects.tsx")}
            className={`flex items-center gap-2 px-3 py-1 cursor-pointer rounded-t-md ${
              activeTab === "projects.tsx"
                ? "bg-inner-background border-t border-x border-border-color"
                : "hover:bg-white/5 text-gray-500"
            }`}
          >
            <span className="text-emerald-400">#</span>
            <span>projects.tsx</span>
          </div>
        </div>
      </div>
      <span className="text-[10px] md:text-xs font-mono opacity-30">
        Visual Studio Code - Spyke Matthew Lim
      </span>
    </div>
  )
}
