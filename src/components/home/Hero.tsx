"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Mic, Languages } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
          >
            🇮🇳 Built for Indian Life Decisions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold leading-tight text-white md:text-7xl"
          >
            Some decisions change
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              your entire life.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl"
          >
            LifeLens helps you explore multiple future outcomes, uncover hidden
            risks, understand family and financial trade-offs, and make
            confident decisions before taking your next step.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="h-14 rounded-2xl bg-cyan-500 px-8 text-base font-semibold text-slate-950 hover:bg-cyan-400"
            >
              <Link href="/story">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-2xl border-white/15 bg-white/5 px-8 text-base text-white hover:bg-white/10"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <Languages className="h-4 w-4 text-cyan-300" />
              English • தமிழ் • हिन्दी • తెలుగు • ಕನ್ನಡ • മലയാളം
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <Mic className="h-4 w-4 text-cyan-300" />
              Speak or type your story
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}