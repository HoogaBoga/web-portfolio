import Image from "next/image"

export default function ProjectsGrid() {
  const projects = [
    {
      id: 1,
      title: "iDiscount Mobile App",
      lang: "Flutter Dart",
      icon: "💰",
      desc: "Engineered and successfully published a cross-platform mobile application for student discounts to the Google Play Store within a specialized 4-person team. ",
      color: "hover:border-[#43D9AD]/50",
      github: "https://github.com/pjtoral/iDiscountMobileApp",
      image: "/idiscount.webp",
    },
  ]

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500">
      <h2 className="text-white font-mono text-xl border-b border-white/10 pb-4">
        <span className="text-blue-400">const</span>{" "}
        <span className="text-[#43D9AD]">projects</span> = [
      </h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 justify-start">
        {projects.map((p) => (
          <div
            key={p.id}
            className={`bg-[#011221] border border-white/10 rounded-xl overflow-hidden shadow-lg group transition-colors duration-300 ${p.color} w-full max-w-150 flex flex-col`}
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

            <div className="h-56 relative border-b border-white/5 overflow-hidden bg-[#0d1326] group-hover:opacity-80 transition-opacity">
              <Image
                src={p.image}
                alt={`${p.title} screenshot`}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 space-y-4">
              <p className="text-gray-400 text-sm leading-relaxed min-h-20">
                {p.desc}
              </p>
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
