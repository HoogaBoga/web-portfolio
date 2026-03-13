"use client"

import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsGrid from "@/components/ProjectsGrid"
import Sidebar from "@/components/Sidebar"
import StarBackground from "@/components/StarBackground"
import TitleBar from "@/components/TitleBar"
import { useState } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("index.tsx")
  const [filters, setFilters] = useState<string[]>([])

  return (
    <div className="flex min-h-screen items-center justify-center  p-4 md:p-10 font-sans ">
      <main className="flex h-[80vh] w-full max-w-6xl flex-col rounded-xl border-2 border-border-color bg-inner-background shadow-2xl overflow-hidden">
        <StarBackground />
        {/* Title Bar */}
        <TitleBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* SideBar */}
          <Sidebar
            activeTab={activeTab}
            filters={filters}
            setFilters={setFilters}
          />

          {/* Main Editor */}
          <section className="flex-1 overflow-y-auto p-8 lg:p-16 bg-[#0d1326]/30 relative editor-scroll">
            {activeTab === "index.tsx" && <HeroSection />}
            {activeTab === "projects.tsx" && <ProjectsGrid filters={filters} />}
            {activeTab === "about.json" && <AboutSection />}
          </section>
        </div>
      </main>
    </div>
  )
}
