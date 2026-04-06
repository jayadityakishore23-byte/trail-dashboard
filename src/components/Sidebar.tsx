"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Video, ListChecks, MessageSquare, CreditCard } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Asset Library", href: "/dashboard/assets", icon: Video },
    { name: "Progress Tracker", href: "/dashboard/projects", icon: ListChecks },
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  ];


  return (
    <aside className="w-64 border-r border-[#27272a] bg-[#09090b] flex flex-col justify-between hidden md:flex">
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center gap-2 mb-10 group">
          <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xl group-hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all">
          </div>
          <span className="text-xl font-bold tracking-tight">Edbros Portal</span>
        </Link>
        <nav className="space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-white/10 text-white" 
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <link.icon size={20} className={isActive ? "text-yellow-400" : ""} />
                <span className="font-medium">{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>


    </aside>
  );
}
