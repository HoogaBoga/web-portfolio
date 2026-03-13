import Image from "next/image"

export default function ProjectsGrid({ filters }: { filters: string[] }) {
  const projects = [
    {
      id: 1,
      title: "iDiscount Mobile App",
      lang: "Flutter Dart",
      icon: "💰",
      desc: "Engineered and successfully published a cross-platform mobile application for student discounts to the Google Play Store within a specialized 4-person team and designed a localized UI and managed seamless front-end/back-end integration with Supabase for real-time data delivery.",
      color: "hover:border-[#43D9AD]/50",
      github: "https://github.com/pjtoral/iDiscountMobileApp",
      image: "/web-portfolio/idiscount.webp",
      tags: ["Flutter", "Dart", "Supabase"],
    },
    {
      id: 2,
      title: "Project Gaia",
      lang: "Flutter Dart",
      icon: "🍀",
      desc: "Co-developed a functional, AI-powered mobile application under strict time constraints, demonstrating rapid agile prototyping and engineered the mobile interface and backend infrastructure, seamlessly integrating physical Arduino sensor data with the Gemini API to execute real-time logic.",
      color: "hover:border-[#43D9AD]/50",
      github: "https://github.com/HoogaBoga/project_gaia",
      image: "/web-portfolio/gaia.webp",
      tags: ["Flutter", "Dart", "Firebase", "Arduino"],
    },

    {
      id: 3,
      title: "Linya Website",
      lang: "PHP Laravel (Other)",
      icon: "✏️",
      desc: "Engineered a full-stack student publication platform utilizing Laravel and PostgreSQL. Architected a robust relational database to efficiently manage digital content, authors, and media, providing a scalable content management system to modernize university journalism workflows.",
      color: "hover:border-[#43D9AD]/50",
      github: "https://github.com/SE-Ogs/linya",
      image: "/web-portfolio/linya.webp",
      tags: ["PHP", "Laravel", "Blade", "PostgreSQL"],
    },

    {
      id: 4,
      title: "The Sugbo Intern",
      lang: "Java, Flutter",
      icon: "🧑‍🎓",
      desc: "Developed a specialized, LinkedIn-style networking application dedicated to connecting university students with local internship opportunities. Built a responsive cross-platform mobile interface using Flutter, integrated with a secure, high-performance Java Spring Boot and PostgreSQL backend.",
      color: "hover:border-[#43D9AD]/50",
      github: "https://github.com/DrineDev/Sugbo-Intern",
      image: "/web-portfolio/sugbo.webp",
      tags: ["Flutter", "Java", "Spring Boot", "PostgreSQL"],
    },

    {
      id: 5,
      title: "Don Macchiatos",
      lang: "React.js & Prisma",
      icon: "☕",
      desc: "Spearheaded the end-to-end development of a production-ready corporate website for a rapidly scaling regional coffee franchise. Built dynamic, highly responsive UI components and integrated Prisma ORM to architect a scalable, type-safe database schema for robust business data management.",
      color: "hover:border-[#E27D60]/50",
      github: "https://github.com/HoogaBoga/donmac-web",
      image: "/web-portfolio/donmac.webp",
      tags: ["React.js", "Prisma", "Tailwind", "Full-Stack"],
    },
  ]

  const displayedProjects =
    filters.length > 0
      ? projects.filter((p) => filters.some((f) => p.lang.includes(f)))
      : projects

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500">
      <h2 className="text-white font-mono text-xl border-b border-white/10 pb-4">
        <span className="text-blue-400">const</span>{" "}
        <span className="text-[#43D9AD]">projects</span> = [
      </h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
        {displayedProjects.map((p) => (
          <div
            key={p.id}
            className={`bg-[#011221] border border-white/10 rounded-xl overflow-hidden shadow-lg group transition-colors duration-300 ${p.color} w-full max-w-150 flex flex-col `}
          >
            <div className="p-4 border-b border-white/10 flex justify-between items-center text-xs font-mono bg-white/5">
              <span className="text-blue-400 truncate pr-4">
                Project {p.id}{" "}
                <span className="text-gray-500">//_{p.title}</span>
              </span>
              <span className="text-lg grayscale group-hover:grayscale-0 transtiion-all shrink-0">
                {p.icon}
              </span>
            </div>

            <div className="h-64 relative border-b border-white/5 overflow-hidden bg-[#0d1326] group-hover:opacity-80 transition-opacity flex items-center justify-center">
              {p.image !== "" ? (
                <Image
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  fill
                  /* 2. FULL IMAGE: object-contain ensures zero cropping. Added p-2 for slight breathing room. */
                  className="object-cover"
                />
              ) : (
                <span className="text-gray-600 font-mono text-sm opacity-50">
                  // image_not_found.png
                </span>
              )}
            </div>

            <div className="p-6 flex flex-col h-full gap-4">
              {/* 3. FIXED SPACING: Removed the 'grow' class here! */}
              <p className="text-gray-400 text-sm leading-relaxed text-justify">
                {p.desc}
              </p>

              {/* Tags will now sit perfectly below the text */}
              <div className="flex flex-wrap gap-2 items-start content-start">
                {p.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-[#1C2B3A]/50 border border-white/5 rounded-md text-[10px] font-mono text-[#8694A6] group-hover:text-white group-hover:border-white/20 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto w-full pt-6 flex flex-col gap-1.5 font-mono text-[10px] text-gray-500 mb-4">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>{">"} build_status:</span>
                  <span className="text-[#43D9AD]">passing</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>{">"} deployment:</span>
                  <span className="text-gray-400">successful</span>
                </div>
              </div>

              {/* Notice I removed mt-auto from the button since the div above handles it now! */}
              <button
                onClick={() => window.open(p.github, "_blank")}
                className="bg-[#1C2B3A] text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded text-xs font-mono transition-colors w-full border border-white/5 cursor-pointer"
              >
                view-repository
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-white font-mono text-xl pt-4">];</h2>
    </div>
  )
}
