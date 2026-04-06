"use client";

import { Bell, Search, LogOut, ChevronDown, Settings, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-20 border-b border-[#27272a] bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-8">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
          <input
            type="text"
            placeholder="Search projects, files..."
            className="w-full bg-[#18181b] border border-[#27272a] rounded-full py-2.5 pl-10 pr-4 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative text-zinc-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute 0 top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full"></span>
        </button>
        
        <div className="relative border-l border-[#27272a] pl-6" ref={dropdownRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-white">Client Portal</p>
              <p className="text-xs text-zinc-400">Premium Member</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-800 border border-[#27272a] flex items-center justify-center overflow-hidden">
              <span className="text-zinc-400 text-sm font-medium">U</span>
            </div>
            <ChevronDown size={16} className={`text-zinc-400 transition-transform ${isProfileOpen ? "rotate-180" : ""}`} />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-[#18181b] border border-[#27272a] rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
              <div className="py-2">
                <Link 
                  href="/dashboard/profile"
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-[#27272a]/50 transition-colors"
                >
                  <User size={16} />
                  <span>Profile</span>
                </Link>
                <Link 
                  href="/dashboard/settings"
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-[#27272a]/50 transition-colors"
                >
                  <Settings size={16} />
                  <span>Settings</span>
                </Link>
                <div className="h-px bg-[#27272a] my-2"></div>
                <Link 
                  href="/login"
                  onClick={() => setIsProfileOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-[#27272a]/50 transition-colors"
                >
                  <LogOut size={16} />
                  <span>Sign out</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
