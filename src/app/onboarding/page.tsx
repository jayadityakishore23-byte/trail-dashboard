"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function OnboardingFlow() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-[#27272a] rounded-full -z-10"></div>
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-yellow-400 rounded-full -z-10 transition-all duration-500 ease-in-out"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
            
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-500 ${
                  step >= num ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.4)]" : "bg-[#18181b] text-zinc-500 border-2 border-[#27272a]"
                }`}
              >
                {step > num ? <CheckCircle2 size={20} /> : num}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm font-medium">
            <span className={step >= 1 ? "text-white" : "text-zinc-500"}>Project Brief</span>
            <span className={step >= 2 ? "text-white" : "text-zinc-500"}>Brand Assets</span>
            <span className={step >= 3 ? "text-white" : "text-zinc-500"}>Confirmation</span>
          </div>
        </div>

        {/* Form Area */}
        <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8 shadow-2xl relative overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-white">Let&apos;s start your project</h2>
                  <p className="text-zinc-400 mt-2">What service are you looking for?</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {['Short Form Editing', 'Long Form Editing', 'Social Media Management', 'Graphic Design'].map((service) => (
                    <label key={service} className="cursor-pointer">
                      <input type="radio" name="service" className="peer sr-only" />
                      <div className="p-4 rounded-xl border border-[#27272a] bg-[#09090b]/50 peer-checked:border-yellow-400 peer-checked:bg-yellow-400/10 hover:border-zinc-600 transition-all text-center font-medium text-zinc-300 peer-checked:text-yellow-400">
                        {service}
                      </div>
                    </label>
                  ))}
                </div>

                <div className="space-y-2 pt-4">
                  <label className="text-sm font-medium text-zinc-300">Project Goals</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-[#09090b] border border-[#27272a] rounded-lg p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 resize-none transition-all"
                    placeholder="Tell us about your brand and what you want to achieve..."
                  ></textarea>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-white">Upload your assets</h2>
                  <p className="text-zinc-400 mt-2">Drag and drop your raw footage, logos, or brand guides.</p>
                </div>

                <div className="border-2 border-dashed border-[#27272a] rounded-2xl p-12 flex flex-col items-center justify-center text-center hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-colors cursor-pointer group">
                  <div className="w-16 h-16 rounded-full bg-[#27272a] flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 group-hover:text-yellow-400 text-zinc-400 transition-colors">
                    <UploadCloud size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Click or drag files here</h3>
                  <p className="text-sm text-zinc-400 max-w-sm">
                    Support for MP4, MOV, ZIP, PDF, PNG up to 10GB per file.
                  </p>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-24 h-24 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle2 size={48} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">You&apos;re all set!</h2>
                  <p className="text-zinc-400 max-w-sm mx-auto">
                    Our creative team is reviewing your brief. We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex justify-between border-t border-[#27272a] pt-6">
            {step > 1 && step < 3 ? (
              <button 
                onClick={prevStep}
                className="px-6 py-2.5 rounded-lg font-medium text-zinc-400 hover:text-white hover:bg-[#27272a] transition-colors"
              >
                Back
              </button>
            ) : (
              <div></div>
            )}
            
            {step < 3 ? (
              <button 
                onClick={nextStep}
                className="px-8 py-2.5 rounded-lg font-bold bg-yellow-400 text-black hover:bg-yellow-500 transition-colors ml-auto shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_25px_rgba(250,204,21,0.4)]"
              >
                {step === 2 ? "Submit Project" : "Continue"}
              </button>
            ) : (
              <Link 
                href="/dashboard"
                className="px-8 py-2.5 rounded-lg font-bold bg-white text-black hover:bg-zinc-200 transition-colors mx-auto"
              >
                Go to Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
