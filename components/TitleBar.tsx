interface TitleBarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function TitleBar({ activeTab, setActiveTab }: TitleBarProps) {
  return (
    <div className="flex flex-col w-full bg-[#011221] border-b border-white/5 rounded-t-xl">
      {/* Top Window Controls */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ED6A5E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#F4BF4F]"></div>
          <div className="w-3 h-3 rounded-full bg-[#61C554]"></div>
        </div>
        <p className="text-gray-400 text-[11px] font-mono hidden md:block opacity-60">
          Visual Studio Code - Spyke Matthew Lim
        </p>
        <div className="w-12"></div> {/* Spacer to keep title centered */}
      </div>

      {/* The Tabs */}
      <div className="flex items-center text-xs font-mono px-2 gap-1 overflow-hidden">
        {/* Index Tab */}
        <button
          onClick={() => setActiveTab("index.tsx")}
          className={`px-5 py-2.5 flex items-center gap-2 border-t-2 transition-all ${
            activeTab === "index.tsx"
              ? "bg-[#0d1326]/30 text-white border-[#FEA55F] opacity-100" // Active state
              : "bg-transparent text-gray-500 border-transparent hover:bg-white/5 opacity-70" // Inactive state
          }`}
        >
          <span
            className={`${activeTab === "index.tsx" ? "text-[#FEA55F]" : "text-gray-500"}`}
          >
            #
          </span>{" "}
          index.tsx
        </button>

        {/* Projects Tab */}
        <button
          onClick={() => setActiveTab("projects.tsx")}
          className={`px-5 py-2.5 flex items-center gap-2 border-t-2 transition-all ${
            activeTab === "projects.tsx"
              ? "bg-[#0d1326]/30 text-white border-[#43D9AD] opacity-100" // Active state
              : "bg-transparent text-gray-500 border-transparent hover:bg-white/5 opacity-70" // Inactive state
          }`}
        >
          <span
            className={`${activeTab === "projects.tsx" ? "text-[#43D9AD]" : "text-gray-500"}`}
          >
            #
          </span>{" "}
          projects.tsx
        </button>
      </div>
    </div>
  )
}
