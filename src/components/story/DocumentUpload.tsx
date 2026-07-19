"use client";

import { FileText } from "lucide-react";

export default function DocumentUpload() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950 p-8 text-center">

      <FileText className="mx-auto h-10 w-10 text-cyan-400" />

      <h3 className="mt-4 text-xl font-semibold">
        Document AI Analysis
      </h3>

      <p className="mt-2 text-slate-400">
        Upload reports, documents, or files to help LifeLens understand your situation better.
      </p>

      <span className="mt-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
        Coming Soon
      </span>

    </div>
  );
}