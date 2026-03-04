export interface ScanItem {
  id: number
  name: string
  type: string
  status: "Completed" | "Scheduled" | "Failed"
  progress: number
  vulnerabilities: {
    critical: number
    high: number
    medium: number
    low: number
  }
  lastScan: string
}

export const scanData: ScanItem[] = [
  {
    id: 1,
    name: "Internal Network Scan",
    type: "Full Scan",
    status: "Completed",
    progress: 100,
    vulnerabilities: {
      critical: 3,
      high: 5,
      medium: 8,
      low: 12,
    },
    lastScan: "10 mins ago",
  },
  {
    id: 2,
    name: "Web App Security",
    type: "Quick Scan",
    status: "Scheduled",
    progress: 0,
    vulnerabilities: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
    },
    lastScan: "Scheduled",
  },
  {
    id: 3,
    name: "API Gateway Scan",
    type: "Full Scan",
    status: "Failed",
    progress: 60,
    vulnerabilities: {
      critical: 2,
      high: 3,
      medium: 4,
      low: 6,
    },
    lastScan: "1 hour ago",
  },
]