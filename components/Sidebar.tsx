interface SidebarProps {
  activeTab: string
}

export default function Sidebar({ activeTab }: SidebarProps) {
  return (
    <aside className="hidden md:flex w-64 flex-col bg-black/20 border-r border-border-color p-4 font-mono text-[13px]">
      {/* Section 1 */}
      <div className="flex items-center gap-2 text-white/90 mb-6 pb-2 border-b border-white/5">
        <span>▼</span> <span>contacts</span>
      </div>
      <div className="space-y-2 mb-10 pl-2 text-gray-400">
        <p className="hover:text-white cursor-pointer transition-colors">
          📧 matty.lim718@gmail.com
        </p>
        <p className="hover:text-white cursor-pointer transition-colors">
          📞 +63 917 773 4483
        </p>
      </div>

      {/* Sectiom 2 */}
      <div className="flex flex-col gap-6">
        {activeTab === "index.tsx" && (
          <div className="animate-in slide-in-from-left duration-300">
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-30 font-bold mb-4">
              Projects Explorer
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/50 hover:text-white cursor-pointer transition-colors">
                <span>
                  ▼ <span>personal-projects</span>
                </span>
              </div>
              <div className="pl-4 space-y-2 border-l border-white/5 ml-1.5 mt-2">
                <div className="flex items-center gap-2 px-2 hover:bg-white/5 rounded group cursor-pointer">
                  <span className="text-emerald-400">🐍</span>
                  <span className="text-white/60 group-hover:text-white">
                    guidance_rag.py
                  </span>
                </div>
                <div className="flex items-center gap-2 px-2 hover:bg-white/5 rounded group cursor-pointer">
                  <span className="text-blue-500">⚙️</span>
                  <span className="text-white/60 group-hover:text-white">
                    AssetAPI.cs
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "projects.tsx" && (
          <div className="animate-in slide-in-from-left duration-300">
            <p className="text=[10px] uppercase tracking-[0.2em] opacity-30 font-bold mb-4">
              Filter by Language
            </p>
            <div className="space-y-4 pl-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-600 bg-transparent accent-[#43D9AD]"
                />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  Python
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-600 bg-transparent accent-[#43D9AD]"
                />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  C# .NET
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-600 bg-transparent accent-[#43D9AD]"
                />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  Flutter Dart
                </span>
              </label>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
