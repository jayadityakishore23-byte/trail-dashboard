"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Key, User } from "lucide-react";
import Link from "next/link";
export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Aesthetic Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#18181b] border border-[#27272a] rounded-2xl p-8 shadow-2xl relative"
      >
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-white tracking-tight">Register Yourself</h1>
          <p className="text-sm text-zinc-400 mt-2">Create an account to start your creative project</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-[#09090b] border border-[#27272a] rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input 
                type="email" 
                placeholder="client@company.com"
                className="w-full bg-[#09090b] border border-[#27272a] rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2 pb-4">
            <label className="text-sm font-medium text-zinc-300 ml-1">Password</label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-[#09090b] border border-[#27272a] rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
              />
            </div>
          </div>

          <Link href="/onboarding" className="w-full flex items-center justify-center">
            <button type="button" className="w-full py-3 rounded-xl font-bold bg-white text-black hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group">
              Start your project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          <div className="pt-4 text-center">
            <p className="text-sm text-zinc-500">
              Already have an account? {' '}
              <Link href="/login" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
