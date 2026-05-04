import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const navItems = [
  "Dashboard",
  "University Regulations",
  "Lesson Plan Agent",
  "Academics Agent",
  "Placements Agent",
  "Reports Agent",
  "Project Plagiarism",
  "Documents Generation",
  "Semester Outcome Forecast",
];

export default function Navbar() {
  return (
    <nav className="h-20 px-6 lg:px-[60px] flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-50">
      <div className="flex items-center gap-10">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="text-2xl font-extrabold font-heading tracking-tight text-indigo-600">
            ADITYA
          </div>
          <span className="text-xl font-bold font-heading tracking-tight text-slate-900 hidden sm:inline">
            AI Agents
          </span>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.slice(0, 4).map((item, index) => (
            <button
              key={item}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                index === 0
                  ? "text-indigo-600"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Gemini Status badge from theme */}
        <div className="hidden md:flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full">
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
          <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">
            Gemini AI Active
          </div>
        </div>

        {/* Primary Action Button style from theme */}
        <button className="hidden sm:block bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-[0_10px_15px_-3px_rgba(79,70,229,0.3)] hover:bg-indigo-700 transition-all hover:-translate-y-0.5 active:translate-y-0">
          Sign In
        </button>

        {/* Avatar */}
        <Avatar className="h-9 w-9 border border-slate-200">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AU</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
