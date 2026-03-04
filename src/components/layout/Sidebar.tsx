import { NavLink } from "react-router-dom";
import { sidebarNavItems } from "../../data/Sidebar";
import { ChevronRight } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-[#0A0A0A] border-r border-gray-200 dark:border-gray-800 flex flex-col transition-colors duration-300">
      
      <div className="p-8 flex items-center gap-3">
        <div className="relative flex items-center justify-center w-5 h-5">
          
           <div className="absolute w-full h-full bg-[#0CC8A8]/20 rounded-full animate-pulse"></div>
          
           <div className="absolute w-3 h-3 border-2 border-[#0CC8A8] rounded-full"></div>
           
           <div className="relative w-1.5 h-1.5 bg-[#0CC8A8] dark:bg-white rounded-full"></div>
        </div>
        <span className="text-xl font-bold dark:text-white tracking-tight">aps</span>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {sidebarNavItems.map((item, index) => {
        
          const isEnabled = item.name === "Dashboard" || item.name === "Scans";

          return (
            <div key={item.name}>
              <NavLink
                to={isEnabled ? item.path : "#"}
                onClick={(e) => !isEnabled && e.preventDefault()}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all group ${
                    isActive && isEnabled
                      ? "bg-[#0CC8A8]/10 text-[#0CC8A8]" 
                      : "text-gray-400 dark:text-gray-500"
                  } ${
                    isEnabled 
                      ? "hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer" 
                      : "cursor-default opacity-40" 
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <item.icon 
                        size={18} 
                        className={`${isActive && isEnabled ? "text-[#0CC8A8]" : "text-gray-400"}`} 
                      />
                      {item.name}
                    </div>
                    
                    
                    {isEnabled && isActive && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0CC8A8] shadow-[0_0_8px_#0CC8A8]"></div>
                    )}
                  </>
                )}
              </NavLink>
              
              {index === 3 && (
                <div className="my-4 mx-4 border-t border-gray-100 dark:border-gray-800/50" />
              )}
            </div>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.05] cursor-pointer hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-all group">
          <div className="flex items-center gap-3">

            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0CC8A8] to-teal-700 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-teal-500/20">
              AD
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold dark:text-white leading-tight">admin@edu.com</span>
              <span className="text-[11px] text-gray-500 dark:text-gray-500 font-medium">Security Lead</span>
            </div>
          </div>
          <ChevronRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </aside>
  );
}