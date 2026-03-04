import ScanTable from "../components/ui/ScanTable";
import { orgSummary, severityStats } from "../data/DashboardData";
import { Search, Filter, Columns, Plus, TrendingUp, TrendingDown, RefreshCcw } from "lucide-react";

export default function Dashboard() {
  return (
    <div >
      <div className=" mx-auto space-y-12 ">
   
        <div className="bg-white p-4 rounded-md">
          <div className="flex items-center justify-between text-[11px] text-gray-500   pb-10">
          
            <p>Org: <span className="font-bold text-black dark:text-white">{orgSummary.name}</span></p>
            <div className="w-[1.5px] h-4 bg-gray-200 dark:bg-gray-800" />
            <p>Owner: <span className="font-bold text-black dark:text-white">{orgSummary.owner}</span></p>
            <div className="w-[1.5px] h-4 bg-gray-200 dark:bg-gray-800" />
            <p>Total Scans: <span className="text-black dark:text-white font-semibold">{orgSummary.totalScans}</span></p>
            <div className="w-[1.5px] h-4 bg-gray-200 dark:bg-gray-800" />
            <p>Scheduled: <span className="text-black font-semibold">{orgSummary.scheduled}</span></p>
            <div className="w-[1.5px] h-4 bg-gray-200 dark:bg-gray-800" />
            <p>Rescans: <span className="text-black font-semibold">{orgSummary.rescans}</span></p>
            <div className="w-[1.5px] h-4 bg-gray-200 dark:bg-gray-800" />
            <p >Failed Scans: <span className="font-semibold text-black">{orgSummary.failed}</span></p>
            <div className="w-[1.5px] h-4 bg-gray-200 dark:bg-gray-800" />
            <p className="flex flex-row items-baseline gap-2"><RefreshCcw size={12} className="mr-1 text-[#0CC8A8]"/><span className="italic opacity-60">{orgSummary.lastUpdated}</span></p>
          </div>

          <div className="flex flex-row justify-between">
            {severityStats.map((stat) => (
              <div key={stat.title} className="px-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold tracking-widest text-gray-400">
                    {stat.title}
                  </span>
                  <div className="rounded-md" style={{ backgroundColor: stat.color }} >
                    <stat.icon size={16} className="p-1 text-white" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold tracking-tighter dark:text-white">{stat.count}</span>
                  <div className={`flex items-center text-[11px] font-bold ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.trend === 'up' ? <TrendingUp size={10} className="mr-1"/> : <TrendingDown size={10} className="mr-1"/>}
                    +{stat.change}%
                  </div>
                  <p className={`text-[8px] text-gray-400 mt-1 font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>increase than yesterday</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search scans by name or type..." 
                className="w-full bg-white dark:bg-[#0D0D0D] border border-gray-100 dark:border-[#1A1A1A] pl-12 pr-4 py-2.5 rounded-xl text-sm focus:border-[#0CC8A8] outline-none transition-all dark:text-white"
              />
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#0D0D0D] border border-gray-100 dark:border-[#1A1A1A] rounded-xl text-sm font-bold text-gray-600 dark:text-gray-300 whitespace-nowrap">
                <Filter size={16}/> Filter
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#0D0D0D] border border-gray-100 dark:border-[#1A1A1A] rounded-xl text-sm font-bold text-gray-600 dark:text-gray-300 whitespace-nowrap">
                <Columns size={16}/> Column
              </button>

              <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0CC8A8] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#0CC8A8]/20 hover:bg-[#0bb598] transition-all whitespace-nowrap">
                <Plus size={18}/> New scan
              </button>
            </div>
          </div>

          <div className="premium-card overflow-hidden">
            <ScanTable />
          </div>
        </div>

      </div>
    </div>
  );
}