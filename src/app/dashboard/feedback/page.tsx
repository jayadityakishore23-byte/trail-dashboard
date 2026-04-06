import { MessageSquare, ExternalLink } from "lucide-react";

export default function FeedbackPage() {
  const reviews = [
    {
      id: 1,
      project: "FitLife - Reel #4 (Draft 1)",
      message: "Hey! We've uploaded the first draft of Reel #4. Please let us know if the pacing feels right.",
      sender: "Alex (Editor)",
      time: "2 hours ago",
      link: "https://frame.io"
    },
    {
      id: 2,
      project: "NovaTech - Brand Anthem (Final Polish)",
      message: "Color grading is applied. Waiting on your final approval to render in 4K.",
      sender: "Marcus (Lead)",
      time: "Yesterday",
      link: "https://vimeo.com"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Feedback & Reviews</h1>
        <p className="text-zinc-400">Review drafts, leave timestamped comments, and approve final assets.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white border-b border-[#27272a] pb-4">Needs Approval</h2>
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#27272a] flex items-center justify-center text-yellow-400">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{rev.project}</h3>
                    <p className="text-xs text-zinc-400">{rev.sender} • {rev.time}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-300 mb-6 bg-[#09090b] p-4 rounded-lg border border-[#27272a]">
                &quot;{rev.message}&quot;
              </p>
              <div className="flex gap-4">
                <button className="flex-1 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                  Open Review Link
                  <ExternalLink size={16} />
                </button>
                <button className="px-4 py-2 bg-[#27272a] text-white font-medium rounded-lg hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors">
                  Approve
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block bg-[#18181b] border border-[#27272a] rounded-xl p-8 flex items-center justify-center text-center">
          <div className="max-w-xs">
            <div className="mx-auto w-20 h-20 bg-[#27272a] rounded-full flex items-center justify-center text-zinc-500 mb-6">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Select a thread</h3>
            <p className="text-sm text-zinc-400">Select an item from the approval list to see full history or launch the review player.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
