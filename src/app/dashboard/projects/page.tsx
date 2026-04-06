import { MoreHorizontal, MessageSquare, Paperclip, Clock } from "lucide-react";

export default function ProgressTrackerPage() {
  const columns = [
    {
      id: "backlog",
      title: "Backlog",
      color: "border-zinc-700",
      tasks: [
        { id: 1, title: "Q4 Roadmap Planning", tags: ["Strategy"], comments: 2, attachments: 0, time: "Due next month" },
        { id: 2, title: "Website Rebranding Assets", tags: ["Design"], comments: 5, attachments: 3, time: "No due date" }
      ]
    },
    {
      id: "in_progress",
      title: "In Progress",
      color: "border-yellow-400/50",
      tasks: [
        { id: 3, title: "FitLife - August Reels Batch", tags: ["Video Editing", "Urgent"], comments: 12, attachments: 8, time: "Due in 2 days" }
      ]
    },
    {
      id: "review",
      title: "Client Review",
      color: "border-blue-400/50",
      tasks: [
        { id: 4, title: "NovaTech - Brand Anthem", tags: ["Animation"], comments: 3, attachments: 1, time: "Due tomorrow" }
      ]
    },
    {
      id: "done",
      title: "Completed",
      color: "border-emerald-400/50",
      tasks: [
        { id: 5, title: "Mindful Living - Q3 Identity", tags: ["Branding"], comments: 0, attachments: 4, time: "Completed last week" }
      ]
    }
  ];

  return (
    <div className="space-y-8 h-[calc(100vh-8rem)] flex flex-col">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Progress Tracker</h1>
        <p className="text-zinc-400">Track the pipeline of your creative deliverables.</p>
      </div>

      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex gap-6 min-w-max h-full">
          {columns.map((col) => (
            <div key={col.id} className="w-80 flex flex-col h-full">
              <div className={`flex items-center justify-between mb-4 pb-2 border-b-2 ${col.color}`}>
                <h3 className="font-bold text-white">{col.title} <span className="text-zinc-500 font-normal ml-2">{col.tasks.length}</span></h3>
                <button className="text-zinc-400 hover:text-white transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {col.tasks.map((task) => (
                  <div key={task.id} className="bg-[#18181b] border border-[#27272a] rounded-xl p-4 cursor-grab hover:border-yellow-400/50 transition-colors shadow-lg group">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {task.tags.map(tag => (
                        <span key={tag} className={`px-2 py-0.5 text-[10px] font-bold rounded-md ${
                          tag === 'Urgent' ? 'bg-red-500/20 text-red-400' : 'bg-[#27272a] text-zinc-300'
                        }`}>
                          {tag.toUpperCase()}
                        </span>
                      ))}
                    </div>
                    
                    <h4 className="text-white font-medium mb-4 group-hover:text-yellow-400 transition-colors">{task.title}</h4>
                    
                    <div className="flex items-center justify-between text-xs text-zinc-500">
                      <div className="flex items-center gap-1">
                        <Clock size={14} className={task.time.includes('Due in') || task.time.includes('tomorrow') ? 'text-yellow-400' : ''} />
                        <span className={task.time.includes('Due in') || task.time.includes('tomorrow') ? 'text-yellow-400/80 mr-2' : 'mr-2'}>
                          {task.time}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {task.comments > 0 && (
                          <div className="flex items-center gap-1 hover:text-zinc-300 transition-colors">
                            <MessageSquare size={14} />
                            <span>{task.comments}</span>
                          </div>
                        )}
                        {task.attachments > 0 && (
                          <div className="flex items-center gap-1 hover:text-zinc-300 transition-colors">
                            <Paperclip size={14} />
                            <span>{task.attachments}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
