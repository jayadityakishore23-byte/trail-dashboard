"use client";

import { User, Bell, Building, Image as ImageIcon, Users, Upload, Plus } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings & Brand Profile</h1>
        <p className="text-zinc-400">Manage your profile, brand assets, and team access.</p>
      </div>

      <div className="grid md:grid-cols-[240px_1fr] gap-8 items-start">
        <nav className="flex flex-col gap-2 sticky top-24">
          <button className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:bg-white/5 hover:text-white transition-colors text-left">
            <User size={18} /> Profile Info
          </button>
          <button className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium bg-white/10 text-white transition-colors text-left">
            <ImageIcon size={18} /> Brand Assets
          </button>
          <button className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:bg-white/5 hover:text-white transition-colors text-left">
            <Users size={18} /> Team Access
          </button>
          <button className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:bg-white/5 hover:text-white transition-colors text-left">
            <Bell size={18} /> Notifications
          </button>
        </nav>

        <div className="space-y-6">
          {/* Brand Assets Section */}
          <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-8 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Brand Assets</h2>
              <p className="text-sm text-zinc-400 mb-6">Upload your logos, fonts, and brand guidelines here so our team always has access to them.</p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="border border-dashed border-[#27272a] hover:border-yellow-400/50 hover:bg-yellow-400/5 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all cursor-pointer group h-48">
                  <div className="w-12 h-12 rounded-full bg-[#27272a] group-hover:bg-yellow-400/20 text-zinc-400 group-hover:text-yellow-400 flex items-center justify-center mb-3 transition-colors">
                    <Upload size={24} />
                  </div>
                  <h3 className="text-white font-medium mb-1">Company Logos</h3>
                  <p className="text-xs text-zinc-500">Upload vector files (.AI, .SVG)</p>
                </div>
                
                <div className="border border-dashed border-[#27272a] hover:border-yellow-400/50 hover:bg-yellow-400/5 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all cursor-pointer group h-48">
                  <div className="w-12 h-12 rounded-full bg-[#27272a] group-hover:bg-yellow-400/20 text-zinc-400 group-hover:text-yellow-400 flex items-center justify-center mb-3 transition-colors">
                    <Upload size={24} />
                  </div>
                  <h3 className="text-white font-medium mb-1">Brand Typography</h3>
                  <p className="text-xs text-zinc-500">Upload font files (.TTF, .OTF)</p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-sm font-medium text-white mb-4">Brand Colors</h3>
                <div className="flex gap-4">
                  <div className="space-y-2">
                    <div className="w-16 h-16 rounded-xl bg-[#FACC15] border-2 border-white/10 shadow-lg cursor-pointer"></div>
                    <p className="text-xs text-zinc-400 text-center uppercase tracking-widest">#FACC15</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-16 h-16 rounded-xl border border-[#27272a] border-dashed flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-500 cursor-pointer transition-colors bg-[#09090b]">
                      <Plus size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-[#27272a] pt-6 flex justify-end">
              <button className="px-6 py-2.5 rounded-lg font-bold bg-[#27272a] text-white hover:bg-zinc-700 transition-colors">
                Save Asset Library
              </button>
            </div>
          </div>

          {/* Team Access Section */}
          <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-8 space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Team Access</h2>
                <p className="text-sm text-zinc-400">Manage who has access to view projects and approve assets.</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black text-sm font-bold rounded-lg hover:bg-yellow-500 transition-all shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                <Plus size={16} />
                Invite Member
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-[#27272a] rounded-lg bg-[#09090b]/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
                    A
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Alex Director</h4>
                    <p className="text-zinc-500 text-xs">alex@company.com</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-[#27272a] text-zinc-300 text-xs rounded-lg font-medium">Owner</span>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-[#27272a] rounded-lg bg-[#09090b]/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Sarah Editor</h4>
                    <p className="text-zinc-500 text-xs">sarah@company.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 border border-[#27272a] text-zinc-400 text-xs rounded-lg font-medium">Collaborator</span>
                  <button className="text-zinc-500 hover:text-red-400 text-sm font-medium transition-colors">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
