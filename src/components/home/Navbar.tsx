"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/25">
            <Sparkles className="h-5 w-5 text-white" />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold text-white">
              LifeLens
            </span>

            <span className="text-xs text-slate-400">
              AI Decision Intelligence
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a
            href="#how-it-works"
            className="transition hover:text-cyan-400"
          >
            How it Works
          </a>

          <a
            href="#features"
            className="transition hover:text-cyan-400"
          >
            Features
          </a>

          <a
            href="#why-lifelens"
            className="transition hover:text-cyan-400"
          >
            Why LifeLens
          </a>
        </nav>
      </div>
    </motion.header>
  );
}