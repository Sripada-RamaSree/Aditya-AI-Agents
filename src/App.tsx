/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, GraduationCap, Layout, FileText, ClipboardList, Search, MessageSquare, LineChart, Database } from "lucide-react";
import Navbar from "./components/Navbar";
import GemCard from "./components/GemCard";
import { motion } from "motion/react";

const gems = [
  {
    icon: BookOpen,
    title: "University Regulations",
    description: "Get instant answers about university rules, exam policies, and academic regulations.",
  },
  {
    icon: Layout,
    title: "Lesson Plan Gem",
    description: "Generate structured weekly lesson plans based on your subject, syllabus, and timeframe.",
  },
  {
    icon: GraduationCap,
    title: "Academics Gem",
    description: "Generate comprehensive notes, question banks, and tailored exam preparation strategies.",
  },
  {
    icon: ClipboardList,
    title: "Placements Gem",
    description: "Build your resume, practice interview questions, and prepare for aptitude tests.",
  },
  {
    icon: LineChart,
    title: "Reports Gem",
    description: "Analyze student performance, attendance data, and generate downloadable summaries.",
  },
  {
    icon: Search,
    title: "Project Plagiarism",
    description: "Analyze project documents for similarity and ensure original content for submissions.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 relative overflow-hidden">
      {/* Theme Background Decorations */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 -z-10" />
      <div className="absolute -top-[10%] -left-[5%] w-[50%] h-[50%] bg-indigo-100/40 rounded-full blur-[140px] -z-20" />
      
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-6 lg:px-[60px] py-16 lg:py-28">
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold uppercase tracking-widest mb-6"
          >
            Academic ecosystem v3.0
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-slate-900 mb-8 tracking-[-0.04em] leading-[0.95]"
          >
            Orchestrate your <br className="hidden md:block" /> academic velocity.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed font-medium"
          >
            The all-in-one intelligence workspace designed for the Aditya University ecosystem. Transform raw academic data into actionable success.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-[0_10px_15px_-3px_rgba(79,70,229,0.3)] hover:bg-indigo-700 transition-all hover:scale-105">
              Explore Gems Now
            </button>
            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold shadow-sm hover:bg-slate-50 transition-all">
              Watch Guide
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {gems.map((gem, index) => (
            <GemCard 
              key={gem.title} 
              icon={gem.icon}
              title={gem.title}
              description={gem.description}
              index={index} 
            />
          ))}
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="mt-20 py-12 px-6 lg:px-[60px] border-t border-slate-200 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-10 text-center">
            Leading academic teams trust IntelliGems
          </p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-30 grayscale items-center">
            <span className="font-black text-2xl">ADITYA</span>
            <span className="font-black text-2xl">VERTEX</span>
            <span className="font-black text-2xl">PHASE 2</span>
            <span className="font-black text-2xl">GLOBO</span>
            <span className="font-black text-2xl">NEXUS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
