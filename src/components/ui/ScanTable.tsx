import { useNavigate } from "react-router-dom";

const mockScans = [
  { id: 1, name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vuln: { c: 5, h: 18, m: 12, l: 25 }, last: "4d ago" },
  { id: 2, name: "Internal API", type: "Blackbox", status: "Scheduled", progress: 0, vuln: { c: 0, h: 0, m: 0, l: 0 }, last: "Not scanned" },
  { id: 3, name: "Cloud Infrastructure", type: "Greybox", status: "Failed", progress: 45, vuln: { c: 2, h: 4, m: 1, l: 0 }, last: "1h ago" },
];

export default function ScanTable() {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-100 dark:border-gray-800 text-xs uppercase tracking-wider text-gray-400">
            <th className="px-6 py-4 font-semibold">Scan Name</th>
            <th className="px-6 py-4 font-semibold">Type</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold">Progress</th>
            <th className="px-6 py-4 font-semibold">Vulnerability</th>
            <th className="px-6 py-4 font-semibold">Last Scan</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
          {mockScans.map((scan) => (
            <tr 
              key={scan.id} 
              onClick={() => navigate(`/scan/${scan.id}`)}
              className="hover:bg-gray-50 dark:hover:bg-white/[0.02] cursor-pointer transition-colors group"
            >
              <td className="px-6 py-4 text-sm font-bold dark:text-white">{scan.name}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{scan.type}</td>
              <td className="px-6 py-4">
                <StatusChip status={scan.status} />
              </td>
              <td className="px-6 py-4 w-48">
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 transition-all" style={{ width: `${scan.progress}%` }} />
                  </div>
                  <span className="text-xs text-gray-400">{scan.progress}%</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <Badge count={scan.vuln.c} color="bg-red-500" />
                  <Badge count={scan.vuln.h} color="bg-orange-500" />
                  <Badge count={scan.vuln.m} color="bg-yellow-500" />
                  <Badge count={scan.vuln.l} color="bg-green-500" />
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-400">{scan.last}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatusChip({ status }: { status: string }) {
  const styles: any = {
    Completed: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
    Scheduled: "bg-gray-100 text-gray-600 dark:bg-white/5 dark:text-gray-400",
    Failed: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
  };
  return <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${styles[status]}`}>{status}</span>;
}

function Badge({ count, color }: { count: number; color: string }) {
  if (count === 0) return <span className="w-5 h-5 flex items-center justify-center text-[10px] text-gray-300">-</span>;
  return (
    <span className={`w-5 h-5 flex items-center justify-center rounded-md text-white text-[10px] font-bold ${color}`}>
      {count}
    </span>
  );
}