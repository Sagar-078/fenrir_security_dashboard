import { Home, ChevronRight, Square, Download, Moon, Sun } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"

interface TopbarProps {
  breadcrumb?: string[]
}

export default function Topbar({
  breadcrumb = [],
}: TopbarProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="h-16 border-b border-gray-100 dark:border-gray-800 
                    flex items-center justify-between px-8 
                    bg-white dark:bg-[#0F0F0F]">

      <div className="flex items-center gap-3">
        <div className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
          <Home size={18} className="text-gray-400" />
        </div>

        {breadcrumb.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <ChevronRight size={14} className="text-gray-300" />
            <span
              className={`text-sm ${
                index === breadcrumb.length - 1
                  ? "font-bold dark:text-white tracking-tight"
                  : "text-gray-400 font-medium"
              }`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">


        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-transparent 
                               border border-gray-200 dark:border-gray-700 
                               text-gray-700 dark:text-gray-300 
                               rounded-xl text-[13px] font-bold 
                               hover:bg-gray-50 dark:hover:bg-white/5 
                               transition-all shadow-sm">
              <Download size={14} />
              Export Report
            </button>

            <button className="flex items-center gap-2 px-4 py-2 
                               border border-red-200 dark:border-red-900/30 
                               text-red-600 dark:text-red-500 
                               rounded-xl text-[13px] font-bold 
                               hover:bg-red-50 dark:hover:bg-red-500/10 
                               transition-all">
              <Square size={14} fill="currentColor" />
              Stop Scan
            </button>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition"
        >
          {theme === "light" ? (
            <Moon size={18} className="text-gray-500" />
          ) : (
            <Sun size={18} className="text-yellow-400" />
          )}
        </button>

      </div>
    </div>
  )
}