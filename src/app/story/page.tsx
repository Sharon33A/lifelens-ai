import StoryForm from "@/components/story/StoryForm";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold">
            Tell us about your decision
          </h1>

          <p className="mt-4 text-slate-400">
            The more we understand your situation,
            the better guidance LifeLens can provide.
          </p>
        </div>

        <StoryForm />
      </div>
    </main>
  );
}