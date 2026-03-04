import {Activity, Terminal as TerminalIcon } from "lucide-react";

export default function ScanDetail() {
  const steps = ["Spidering", "Mapping", "Scanning", "Analyzing", "Reporting"];
  const currentStep = 1; 

  return (
    <div className="max-w-[1600px] mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">

      <div className="bg-white dark:bg-[#0D0D0D] p-8 rounded-[32px] border border-gray-100 dark:border-white/[0.05] shadow-sm">
        <div className="flex flex-col lg:flex-row items-center gap-12">
     
          <div className="relative flex items-center justify-center w-40 h-40">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100 dark:text-gray-800" />
              <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="440" strokeDashoffset="440" className="text-[#0CC8A8] transition-all duration-1000" />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-black dark:text-white">0<span className="text-lg">%</span></span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">In Progress</span>
            </div>
          </div>

          <div className="flex-1 space-y-8 w-full">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold dark:text-white">Private Assets Scan</h1>
                <p className="text-sm text-gray-400 font-medium">Target: <span className="text-[#0CC8A8]">https://api.internal.assets</span></p>
              </div>
              <div className="flex gap-3">
                <div className="px-4 py-2 bg-teal-50 dark:bg-teal-500/10 border border-teal-100 dark:border-teal-500/20 rounded-xl text-[#0CC8A8] text-xs font-bold flex items-center gap-2">
                  <Activity size={14} className="animate-pulse" /> Live Scanning
                </div>
              </div>
            </div>

            <div className="flex items-center w-full">
              {steps.map((step, i) => (
                <div key={step} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      i <= currentStep ? "bg-[#0CC8A8] text-white shadow-lg shadow-[#0CC8A8]/30" : "bg-gray-100 dark:bg-gray-800 text-gray-400"
                    }`}>
                      {i + 1}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-tight ${i <= currentStep ? "text-black dark:text-white" : "text-gray-400"}`}>
                      {step}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-[2px] mb-6 mx-2 ${i < currentStep ? "bg-[#0CC8A8]" : "bg-gray-100 dark:bg-gray-800"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0A0A0A] rounded-[32px] border border-white/[0.05] shadow-2xl overflow-hidden flex flex-col h-[400px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <TerminalIcon size={16} className="text-[#0CC8A8]" />
            <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Live Output Log</span>
          </div>
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
        </div>

        <div className="flex-1 p-6 font-mono text-sm overflow-y-auto space-y-2">
          <p className="text-teal-500/80">[INFO] Initializing scan engine v2.4.0...</p>
          <p className="text-gray-500">[14:22:01] Loading target: https://api.internal.assets</p>
          <p className="text-gray-500">[14:22:03] SSL Certificate validated (Expires in 240 days)</p>
          <p className="text-white font-bold tracking-tight animate-pulse underline decoration-[#0CC8A8]">
            {">"} CURRENTLY SPIDERING DIRECTORIES...
          </p>
          <p className="text-gray-400">[SCAN] Found /v1/auth - checking permissions...</p>
          <p className="text-gray-400">[SCAN] Found /config/db - high priority mapping started</p>
          <div className="w-1 h-5 bg-[#0CC8A8] animate-caret-blink inline-block ml-1" />
        </div>
      </div>
    </div>
  );
}


