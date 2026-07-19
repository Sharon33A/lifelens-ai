"use client";

import { useEffect } from "react";

import { getUserId } from "@/lib/user";
import { getSession, updateSession } from "@/lib/session";

import LifeTree from "@/components/analysis/LifeTree";
import DecisionScorecard from "@/components/analysis/DecisionScorecard";
import PauseReflect from "@/components/analysis/PauseReflect";
import ActionPlan from "@/components/analysis/ActionPlan";


function getReadinessLabel(score: number) {
  if (score >= 80) return "Well Prepared";
  if (score >= 60) return "Needs More Clarity";
  return "High Uncertainty";
}


export default function AnalysisPage() {

  const session = getSession();

  const report = session.analysis;


  useEffect(() => {

    async function saveDecisionMemory() {

      if (!report) return;


      const saved = sessionStorage.getItem(
        "lifelens_memory_saved"
      );


      if (saved) return;


      try {

        await fetch("/api/memory", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

            userId: getUserId(),

            memory: `
LifeLens Decision:

Story:
${session.story}

Desired Outcomes:
${session.desiredOutcomes?.join(", ") || ""}

Influences:
${session.decisionInfluences?.join(", ") || ""}

Input Language:
${session.inputLanguage || "English"}

Output Language:
${session.outputLanguage || "English"}

Decision Summary:
${report.summary}

Recommended Path:
${report.possiblePaths?.[1]?.title ?? ""}

Reflection:
${report.reflection}
            `,

          }),
        });


        sessionStorage.setItem(
          "lifelens_memory_saved",
          "true"
        );


      } catch (error) {

        console.error(
          "Mem0 save failed:",
          error
        );

      }

    }


    saveDecisionMemory();


  }, [report, session]);



  if (!report) {

    return (

      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">

        No LifeLens Report Found

      </main>

    );

  }



  return (

    <main className="min-h-screen bg-slate-950 text-white">


      <div className="mx-auto max-w-7xl px-6 py-16">


        <h1 className="text-5xl font-extrabold">

          📘 LifeLens Decision Report

        </h1>



        <div className="mt-12 rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-8">


          <h2 className="text-2xl font-bold">

            🟢 Decision Readiness Index

          </h2>



          <div className="mt-6 flex items-end gap-5">


            <span className="text-7xl font-black text-cyan-300">

              {report.decisionReadiness}%

            </span>



            <span className="mb-2 rounded-full bg-cyan-500 px-4 py-2 font-semibold text-slate-950">

              {getReadinessLabel(
                report.decisionReadiness
              )}

            </span>


          </div>


        </div>




        <LifeTree
          paths={report.possiblePaths}
        />



        <DecisionScorecard
          scorecard={report.scorecard}
        />



        <PauseReflect
          reflection={report.reflection}
        />



        <ActionPlan
          actionPlan={report.actionPlan}
        />





        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-8">


          <h2 className="text-3xl font-bold">

            📖 Understanding Your Situation

          </h2>



          <p className="mt-6 text-lg leading-9 text-slate-300">

            {report.summary}

          </p>



        </section>



      </div>


    </main>

  );

}