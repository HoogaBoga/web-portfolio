import { useEffect, useState } from "react"

const SNIPPETS = [
  {
    title: "AssetController.cs",
    code: `public async Task<IActionResult> Get() {
 // Strict DTO filtering applied
 var assets = await _db.Assets.ToListAsync();
 return Ok(assets);
}`,

    color: "border-[#4D5BCE]/30",
  },
  {
    title: "rag_pipeline.py",
    code: `def query_llm(context, prompt):
 # Local LLM Integration
 res = ollama.generate(
 model='llama3',
 prompt=f"{context} {prompt}"
 )
 return res['response]`,
    color: "border-[#43D9AD]/30",
  },
  {
    title: "home_page.dart",
    code: `Widget build(BuildContext context){
 return Scaffold(
 body: Center(
 child: Text('Figma to Flutter'),
 ),
 );
}`,
    color: "border-[#FEA55F]/30",
  },
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SNIPPETS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 h-full items-center">
      {/* Left side */}
      <div className="flex flex-col justify-center font-sans z-10">
        <h1 className="text-5xl md:text-6xl text-white font-bold tracking-tight mb-2">
          Spyke Matthew Lim
        </h1>
        <h2 className="text-[#43D9AD] text-2xl md:text-3xl font-mono mb-8">
          {">"} Robotics & AI Developer
        </h2>

        <a
          href="/Spyke_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1C2B3A] text-white/90 hover:text-white hover:bg-[#4D5BCE] px-6 py-3 rounded text-sm font-mono transition-colors border border-white/10 shadow-lg"
        >
          <span>📄</span> download_cv.pdf
        </a>
        <div className="space-y-2 mt-5 text-gray-400 font-mono text-[13px] md:text-sm">
          <p>{`// love to create and innovate`}</p>
          <p>{`// you can see more in my github page`}</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex flex-col justify-center items-center w-full hidden md:flex h-[500px]">
        {/* Orbs */}
        <div
          className={`absolute w-72 h-72 rounded-full blur-[120px] transition-all duration-1000 ${
            index === 0
              ? "bg-blue-500/20"
              : index === 1
                ? "bg-emerald-500/20"
                : "bg-orange-500/20"
          }`}
        />

        {/* Snippet card */}
        <div
          key={index}
          className={`relative z-10 bg-inner-background/80 backdrop-blur-md border ${SNIPPETS[index].color}
  rounded-xl p-6 text-xs shadow-2xl w-full max-w-100
  min-h-50 flex flex-col justify-between // Added fixed min-height
  animate-in fade-in zoom-in-95 duration-700`}
        >
          <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
            <span className="text-gray-400 font-mono text-[10px]">
              {SNIPPETS[index].title}
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
            </div>
          </div>

          <pre className="font-mono text-gray-300 leading-relaxed overflow-hidden">
            {SNIPPETS[index].code}
          </pre>
        </div>

        <div className="flex gap-2 mt-8 z-10">
          {SNIPPETS.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-white" : "w-2 bg-white/20"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
