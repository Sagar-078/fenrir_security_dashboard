interface Props {
  status: "Completed" | "Scheduled" | "Failed"
}

export default function StatusChip({ status }: Props) {
  const base =
    "px-3 py-1 text-xs font-medium rounded-full"

  const styles = {
    Completed:
      "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
    Scheduled:
      "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300",
    Failed:
      "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400",
  }

  return (
    <span className={`${base} ${styles[status]}`}>
      {status}
    </span>
  )
}