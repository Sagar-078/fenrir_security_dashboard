import {Ban, SearchAlert, TriangleAlert } from "lucide-react";

export const orgSummary = {
  name: "Project X",
  owner: "Nammagiri",
  totalScans: 100,
  scheduled: 1000,
  rescans: 100,
  failed: 100,
  lastUpdated: "10 mins ago"
};

export const severityStats = [
  { 
    title: "Critical Serverity", 
    count: 86, 
    change: 2, 
    color: "#D9A3B3", 
    icon: Ban,
    trend: "up" 
  },
  { 
    title: "High Serverity", 
    count: 16, 
    change: 0.9, 
    color: "#CFA165", 
    icon: TriangleAlert,
    trend: "up" 
  },
  { 
    title: "Medium Serverity", 
    count: 26, 
    change: 0.5, 
    color: "#FACC15", 
    icon: TriangleAlert,
    trend: "down" 
  },
  { 
    title: "Low Serverity", 
    count: 16, 
    change: 0.9, 
    color: "#ABCBDE", 
    icon: SearchAlert,
    trend: "up" 
  },
];