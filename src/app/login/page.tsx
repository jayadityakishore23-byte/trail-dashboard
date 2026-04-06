"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Key, ShieldCheck, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const [loginMode, setLoginMode] = useState<"client" | "admin">("client");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginMode === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Aesthetic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#18181b] border border-[#27272a] rounded-2xl p-8 shadow-2xl relative"
      >
        <div className="mb-8 text-center">
          <div className="w-12 h-12 rounded-full bg-yellow-400 mx-auto flex items-center justify-center text-black font-bold text-2xl mb-4 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
            E
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Edbros Portal</h1>
          <p className="text-sm text-zinc-400 mt-2">Sign in to manage your creative workspace</p>
        </div>

        {/* Unified Tab Switcher */}
        <div className="flex bg-[#09090b] border border-[#27272a] rounded-xl p-1 mb-6 relative">
          <div 
            className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] bg-[#27272a] rounded-lg transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              loginMode === "admin" ? "translate-x-[calc(100%+0.25rem)]" : "translate-x-0"
            }`}
          />
          <button 
            type="button"
            className={`flex-1 py-2 text-sm font-medium z-10 flex items-center justify-center gap-2 transition-colors ${
              loginMode === "client" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
            onClick={() => setLoginMode("client")}
          >
            <User size={16} />
            Client
          </button>
          <button 
            type="button"
            className={`flex-1 py-2 text-sm font-medium z-10 flex items-center justify-center gap-2 transition-colors ${
              loginMode === "admin" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
            onClick={() => setLoginMode("admin")}
          >
            <ShieldCheck size={16} />
            Admin
          </button>
        </div>

        {/* Login Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input 
                type="email" 
                placeholder={loginMode === "admin" ? "admin@edbros.com" : "client@company.com"}
                className="w-full bg-[#09090b] border border-[#27272a] rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2 pb-4">
            <div className="flex justify-between items-center ml-1 mt-1">
              <label className="text-sm font-medium text-zinc-300">Password</label>
              <a href="#" className="text-xs text-zinc-500 hover:text-yellow-400 transition-colors">Forgot password?</a>
            </div>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-[#09090b] border border-[#27272a] rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                required
              />
            </div>
            {loginMode === "admin" && (
              <p className="text-xs text-yellow-400/80 mt-2 flex items-center justify-center">
                <ShieldCheck size={12} className="mr-1" /> Protected Staff Route
              </p>
            )}
          </div>

          <button type="submit" className="w-full py-3 rounded-xl font-bold bg-yellow-400 text-black hover:bg-yellow-500 transition-all shadow-[0_0_15px_rgba(250,204,21,0.2)] hover:shadow-[0_0_25px_rgba(250,204,21,0.4)] flex items-center justify-center gap-2 group">
            {loginMode === "admin" ? "Enter Admin Panel" : "Login to Workspace"}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Registration is only for Clients */}
          <div className={`pt-4 text-center transition-opacity duration-300 ${loginMode === "admin" ? "opacity-0 pointer-events-none h-0 pt-0 overflow-hidden" : "opacity-100 h-auto"}`}>
            <p className="text-sm text-zinc-500">
              New to Edbros? {' '}
              <Link href="/register" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                Register yourself
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
