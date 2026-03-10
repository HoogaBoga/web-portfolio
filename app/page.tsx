"use client"

import HeroSection from "@/components/HeroSection"
import Sidebar from "@/components/Sidebar"
import TitleBar from "@/components/TitleBar"
import { act, useState } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("index.tsx")

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 md:p-10 font-sans ">
      <main className="flex h-[80vh] w-full max-w-6xl flex-col rounded-xl border-2 border-border-color bg-inner-background shadow-2xl overflow-hidden">
        {/* Title Bar */}
        <TitleBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* SideBar */}
          <Sidebar activeTab={activeTab} />

          {/* Main Editor */}
          <section className="flex-1 overflow-y-auto p-8 lg:p-16 bg-[#0d1326]/30 relative">
            {activeTab === "index.tsx" && <HeroSection />}
            {activeTab === "projects.tsx" && (
              <div className="text-white">Projects Grid Coming Soon</div>
            )}
          </section>
        </div>
      </main>
    </div>
  )
}
