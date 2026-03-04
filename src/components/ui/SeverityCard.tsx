interface SeverityCardProps {
  title: string;
  count: number;
  change: number;
  color: string;
}

export default function SeverityCard({ title, count, change, color }: SeverityCardProps) {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white dark:bg-[#111111] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title} Severity</p>
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
      </div>
      
      <h3 className="text-4xl font-bold dark:text-white mb-4">{count}</h3>
      
      <div className={`flex items-center gap-1 text-xs font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        <span>{isPositive ? '↑' : '↓'}</span>
        <span>{isPositive ? '+' : ''}{change}%</span>
        <span className="text-gray-400 dark:text-gray-500 ml-1">increase than yesterday</span>
      </div>
    </div>
  );
}