"use client";

import { Play, Download, MessageSquare, ThumbsUp, AlertCircle, UploadCloud, X, FileVideo } from "lucide-react";
import { useState } from "react";

export default function AssetLibraryPage() {
  const [revisions, setRevisions] = useState([
    { id: 1, title: "TikTok Batch 4 - Draft V2", status: "Needs Review", time: "2 hours ago", size: "124 MB" },
    { id: 2, title: "TikTok Batch 4 - Draft V1", status: "Changes Requested", time: "2 days ago", size: "135 MB" },
    { id: 3, title: "Instagram Reels - Final", status: "Approved", time: "1 week ago", size: "512 MB" },
  ]);

  const [isUploading, setIsUploading] = useState(false);
  const [uploadTitle, setUploadTitle] = useState("");
  
  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadTitle.trim()) return;

    const newAsset = {
      id: Date.now(),
      title: uploadTitle,
      status: "Needs Review",
      time: "Just now",
      size: "245 MB", // Mock size
    };

    setRevisions([newAsset, ...revisions]);
    setUploadTitle("");
    setIsUploading(false);
  };

  const latestAsset = revisions[0] || null;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Asset Library</h1>
          <p className="text-zinc-400">Review deliverables, request revisions, and download finalized assets.</p>
        </div>
        <button 
          onClick={() => setIsUploading(true)}
          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(250,204,21,0.2)]"
        >
          <UploadCloud size={20} />
          Upload New Version
        </button>
      </div>

      {/* Upload Mock Form Drawer */}
      {isUploading && (
        <div className="bg-[#18181b] border border-yellow-400/50 rounded-2xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 relative">
          <button 
            onClick={() => setIsUploading(false)} 
            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <UploadCloud className="text-yellow-400" size={24} />
            Secure Upload Portal
          </h2>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Drive Link / File Title</label>
                <input 
                  type="text" 
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  placeholder="e.g. TikTok Batch 4 - Draft V3"
                  className="w-full bg-[#09090b] border border-[#27272a] rounded-xl py-3 px-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">File Mock Selector</label>
                <div className="w-full bg-[#27272a]/30 border border-dashed border-[#27272a] rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-zinc-400 hover:border-yellow-400/50 transition-colors cursor-pointer text-sm">
                  <FileVideo size={18} />
                  <span>Select a mock file...</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button 
                type="submit"
                className="bg-zinc-100 text-black px-6 py-2 rounded-xl font-bold hover:bg-white transition-colors"
              >
                Submit Asset
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Main Review Player */}
      {latestAsset && (
        <div className="bg-[#18181b] border border-[#27272a] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 animate-in fade-in">
          <div className="aspect-video bg-black flex items-center justify-center relative group cursor-pointer border-b border-[#27272a]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            
            <div className="w-20 h-20 rounded-full bg-yellow-400/90 text-black flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(250,204,21,0.3)]">
              <Play size={36} fill="currentColor" className="ml-2" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
              <div>
                <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full mb-2 inline-block shadow-[0_0_10px_rgba(250,204,21,0.5)]">
                  LATEST DRAFT
                </span>
                <h2 className="text-2xl font-bold text-white">{latestAsset.title}</h2>
                <p className="text-zinc-300">00:45 • MP4 • {latestAsset.size}</p>
              </div>
              <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm text-white transition-colors">
                <Download size={20} />
              </button>
            </div>
          </div>

          {/* Action Bar */}
          <div className="p-6 bg-[#09090b] flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black border border-emerald-500/20 rounded-xl font-bold transition-all">
                <ThumbsUp size={20} />
                Approve Asset
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/20 rounded-xl font-bold transition-all">
                <AlertCircle size={20} />
                Request Revisions
              </button>
            </div>
            
            <button className="flex items-center gap-2 px-6 py-3 bg-[#27272a] text-white hover:bg-yellow-400 hover:text-black rounded-xl font-bold transition-all">
              <MessageSquare size={20} />
              Add Timecoded Comment
            </button>
          </div>
        </div>
      )}

      {/* Revision History */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Version History</h3>
        <div className="bg-[#18181b] border border-[#27272a] rounded-xl overflow-hidden relative">
          {revisions.map((rev, idx) => (
            <div 
              key={rev.id} 
              className={`p-4 flex items-center justify-between ${idx !== revisions.length - 1 ? 'border-b border-[#27272a]' : ''} hover:bg-[#27272a]/30 transition-colors animate-in fade-in slide-in-from-left-2`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#27272a] flex items-center justify-center text-zinc-400">
                  <Play size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{rev.title}</h4>
                  <p className="text-sm text-zinc-400">{rev.size} • Uploaded {rev.time}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  rev.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                  rev.status === 'Needs Review' ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20' :
                  'bg-red-500/10 text-red-400 border-red-500/20'
                }`}>
                  {rev.status}
                </span>
                <button className="text-zinc-500 hover:text-white transition-colors">
                  <Download size={20} />
                </button>
              </div>
            </div>
          ))}
          {revisions.length === 0 && (
             <div className="p-8 text-center text-zinc-500">
                No active assets found in the library.
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
