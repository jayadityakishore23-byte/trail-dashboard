"use client";

import { motion } from "framer-motion";
import { FolderGit2, CheckCircle, Clock, Video } from "lucide-react";

import { useRouter } from "next/navigation";

export default function DashboardOverview() {
  const router = useRouter();

  const stats = [
    { label: "Active Projects", value: "3", icon: FolderGit2, color: "text-blue-400", href: "/dashboard/projects" },
    { label: "Pending Review", value: "1", icon: Clock, color: "text-yellow-400", href: "/dashboard/projects" },
    { label: "Completed", value: "12", icon: CheckCircle, color: "text-emerald-400", href: "/dashboard/projects" },
    { label: "Total Assets", value: "48", icon: Video, color: "text-purple-400", href: "/dashboard/assets" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Welcome Back! 👋</h1>
        <p className="text-zinc-400">Here&apos;s a quick overview of your creative projects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            onClick={() => router.push(stat.href)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer bg-[#18181b] border border-[#27272a] rounded-xl p-6 flex items-center gap-4 hover:border-yellow-400/50 hover:shadow-[0_0_15px_rgba(250,204,21,0.1)] transition-all"
          >
            <div className={`p-4 rounded-full bg-[#27272a]/50 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-zinc-400 font-medium">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
        <div className="bg-[#18181b] border border-[#27272a] rounded-xl overflow-hidden">
          <div className="p-6 border-b border-[#27272a] flex justify-between items-center bg-[#09090b]/50">
            <div>
              <h3 className="font-semibold text-white">Social Media Batch - August</h3>
              <p className="text-sm text-zinc-400">Short Form Editing</p>
            </div>
            <span className="px-3 py-1 bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 rounded-full text-xs font-medium">
              In Progress
            </span>
          </div>
          <div className="p-6 text-sm text-zinc-400 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mt-1"></div>
              <div>
                <p className="text-zinc-200">Draft 1 uploaded for review</p>
                <p className="text-xs mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-zinc-600 mt-1"></div>
              <div>
                <p className="text-zinc-400">Assets received securely</p>
                <p className="text-xs mt-1">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
