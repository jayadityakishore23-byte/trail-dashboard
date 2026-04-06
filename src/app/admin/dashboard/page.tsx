"use client";

import Link from "next/link";
import { useState } from "react";
import { LayoutDashboard, Users, FolderKanban, Settings, Edit2, Trash2, MoreVertical, CheckCircle2, Clock } from "lucide-react";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "clients" | "projects">("overview");

  // Mock State for Clients
  const [clients, setClients] = useState([
    { id: 1, name: "Acme Corp", email: "contact@acme.com", plan: "Premium", status: "Active" },
    { id: 2, name: "Globex Inc", email: "billing@globex.com", plan: "Standard", status: "Active" },
    { id: 3, name: "Soylent Corp", email: "admin@soylent.com", plan: "Enterprise", status: "Inactive" },
  ]);

  // Mock State for Projects
  const [projects, setProjects] = useState([
    { id: 101, title: "Q3 Marketing Video", client: "Acme Corp", status: "In Progress", due: "Oct 12, 2026" },
    { id: 102, title: "Brand Identity Refresh", client: "Globex Inc", status: "Review Pending", due: "Nov 01, 2026" },
    { id: 103, title: "Social Media Assets", client: "Acme Corp", status: "Backlog", due: "Dec 15, 2026" },
  ]);

  const handleDeleteClient = (id: number) => {
    setClients(clients.filter(c => c.id !== id));
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    setProjects(projects.map(p => p.id === id ? { ...p, status: newStatus } : p));
  };

  return (
    <div className="flex h-screen bg-[#09090b] text-white overflow-hidden">
      {/* Basic Admin Sidebar */}
      <aside className="w-64 border-r border-[#27272a] p-6 hidden md:flex flex-col">
        <div className="flex items-center gap-2 mb-10 text-yellow-400">
          <div className="w-8 h-8 rounded bg-yellow-400 text-black flex items-center justify-center font-bold">A</div>
          <span className="font-bold text-xl tracking-tight text-white">Edbros Admin</span>
        </div>
        
        <nav className="space-y-2 flex-1">
          <button 
            onClick={() => setActiveTab("overview")}
            className={`flex w-full items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "overview" ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <LayoutDashboard size={20} className={activeTab === "overview" ? "text-yellow-400" : ""} />
            <span className="font-medium">Overview</span>
          </button>
          
          <button 
            onClick={() => setActiveTab("clients")}
            className={`flex w-full items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "clients" ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Users size={20} className={activeTab === "clients" ? "text-yellow-400" : ""} />
            <span className="font-medium">Manage Clients</span>
          </button>
          
          <button 
            onClick={() => setActiveTab("projects")}
            className={`flex w-full items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "projects" ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <FolderKanban size={20} className={activeTab === "projects" ? "text-yellow-400" : ""} />
            <span className="font-medium">All Projects</span>
          </button>
        </nav>

        <div className="pt-6 border-t border-[#27272a]">
          <Link href="/login" className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-zinc-400 hover:text-red-400 hover:bg-red-400/10 transition-colors">
            <Settings size={20} />
            <span className="font-medium">Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Admin Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="mb-8">
              <h1 className="text-3xl font-bold">Admin Operations</h1>
              <p className="text-zinc-400 mt-1">Status: All systems operational</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
                <h3 className="text-zinc-400 text-sm font-medium mb-2">Total Clients</h3>
                <p className="text-4xl font-bold text-white">{clients.length}</p>
              </div>
              <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
                <h3 className="text-zinc-400 text-sm font-medium mb-2">Active Projects</h3>
                <p className="text-4xl font-bold text-white">{projects.filter(p => p.status !== "Backlog").length}</p>
              </div>
              <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
                <h3 className="text-zinc-400 text-sm font-medium mb-2">Review Pending</h3>
                <p className="text-4xl font-bold text-yellow-400">{projects.filter(p => p.status === "Review Pending").length}</p>
              </div>
            </div>
          </div>
        )}

        {/* CLIENTS TAB */}
        {activeTab === "clients" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="mb-8 flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">Manage Clients</h1>
                <p className="text-zinc-400 mt-1">Add, edit, or remove client accounts</p>
              </div>
              <button 
                onClick={() => alert("Mock Action: Add new client modal would open here.")}
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                + Add Client
              </button>
            </header>

            <div className="bg-[#18181b] border border-[#27272a] rounded-xl overflow-hidden">
              <table className="w-full text-left text-sm text-zinc-400">
                <thead className="bg-[#27272a]/30 text-zinc-300 uppercase">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Client Name</th>
                    <th className="px-6 py-4 font-semibold">Email</th>
                    <th className="px-6 py-4 font-semibold">Plan</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client) => (
                    <tr key={client.id} className="border-t border-[#27272a] hover:bg-[#27272a]/20 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">{client.name}</td>
                      <td className="px-6 py-4">{client.email}</td>
                      <td className="px-6 py-4">
                        <span className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded text-xs">{client.plan}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs flex items-center gap-1 w-max ${client.status === "Active" ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                          {client.status === "Active" ? <CheckCircle2 size={12}/> : <Clock size={12}/>}
                          {client.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex justify-end gap-3">
                        <button onClick={() => alert(`Mock Action: Editing ${client.name}`)} className="text-zinc-400 hover:text-white transition-colors" title="Edit">
                          <Edit2 size={16} />
                        </button>
                        <button onClick={() => handleDeleteClient(client.id)} className="text-zinc-400 hover:text-red-400 transition-colors" title="Delete">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {clients.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-zinc-500">No clients found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PROJECTS TAB */}
        {activeTab === "projects" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="mb-8">
              <h1 className="text-3xl font-bold">All Projects</h1>
              <p className="text-zinc-400 mt-1">Cross-client project tracking matrix</p>
            </header>
            
            <div className="grid grid-cols-1 gap-4">
              {projects.map((project) => (
                <div key={project.id} className="bg-[#18181b] border border-[#27272a] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">{project.title}</h3>
                    <p className="text-sm text-zinc-400 mt-1">Client: {project.client} &bull; Due: {project.due}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <select 
                      value={project.status}
                      onChange={(e) => handleStatusChange(project.id, e.target.value)}
                      className="bg-[#09090b] border border-[#27272a] text-sm text-zinc-300 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-yellow-400"
                    >
                      <option value="Backlog">Backlog</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Review Pending">Review Pending</option>
                      <option value="Completed">Completed</option>
                    </select>

                    <button className="p-2 hover:bg-[#27272a] rounded-md transition-colors text-zinc-500">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                </div>
              ))}
              {projects.length === 0 && (
                <div className="text-center py-10 text-zinc-500 border border-dashed border-[#27272a] rounded-xl">
                  No projects active.
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
