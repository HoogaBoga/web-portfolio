export default function AboutSection() {
  return (
    <div className="flex flex-col animate-in fade-in duration-500 max-w-3xl">
      <h2 className="text-white font-mono text-xl border-b border-white/10 pb-4 mb-8 flex items-center gap-3">
        <span className="text-blue-400">profile.json</span>
      </h2>

      <div className="bg-[#011221] border border-white/10 rounded-xl p-6 md:p-8 shadow-lg overflow-x-auto">
        <pre className="font-mono text-[13px] md:text-sm leading-loose">
          <span className="text-gray-400">{`{`}</span>
          <br />
          <span className="text-[#43D9AD]"> "developer"</span>
          <span className="text-white">: </span>
          <span className="text-gray-400">{`{`}</span>
          <br />
          <span className="text-blue-400"> "name"</span>
          <span className="text-white">: </span>
          <span className="text-[#FEA55F]">"Spyke Matthew Lim"</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-blue-400"> "location"</span>
          <span className="text-white">: </span>
          <span className="text-[#FEA55F]">"Cebu City, Philippines"</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-blue-400"> "education"</span>
          <span className="text-white">: </span>
          <span className="text-[#FEA55F]">
            "BS Computer Science (3rd Year)"
          </span>
          <span className="text-white">,</span>
          <br />
          <span className="text-blue-400"> "availability"</span>
          <span className="text-white">: </span>
          <span className="text-[#FEA55F]">
            "Seeking 300-hour Internship / Freelance"
          </span>
          <br />
          <span className="text-gray-400"> {`}`}</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-[#43D9AD]"> "skills"</span>
          <span className="text-white">: </span>
          <span className="text-gray-400">[</span>
          <br />
          <span className="text-[#FEA55F]">
            {" "}
            "Python (LLM / RAG Architecture)"
          </span>
          <span className="text-white">,</span>
          <br />
          <span className="text-[#FEA55F]">
            {" "}
            "C# .NET (RESTful API & LINQ)"
          </span>
          <span className="text-white">,</span>
          <br />
          <span className="text-[#FEA55F]"> "Next.js & React"</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-[#FEA55F]"> "Flutter (Figma to Dart UI)"</span>
          <br />
          <span className="text-gray-400"> ]</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-[#43D9AD]"> "other_experience"</span>
          <span className="text-white">: </span>
          <span className="text-gray-400">[</span>
          <br />
          <span className="text-[#FEA55F]">
            {" "}
            "PHP / Laravel Blade (School Publication Blog)"
          </span>
          <br />
          <span className="text-gray-400"> ]</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-[#43D9AD]"> "hobbies"</span>
          <span className="text-white">: </span>
          <span className="text-gray-400">[</span>
          <br />
          <span className="text-[#FEA55F]"> "Volleyball"</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-[#FEA55F]"> "Basketball"</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-[#FEA55F]">
            {" "}
            "Hitting the gym (Incline press & triceps)"
          </span>
          <br />
          <span className="text-gray-400"> ]</span>
          <br />
          <span className="text-gray-400">{`}`}</span>
        </pre>
      </div>
    </div>
  )
}
