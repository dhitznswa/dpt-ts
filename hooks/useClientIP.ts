"use client";

import { useEffect, useState } from "react";

interface DataIPProps {
  status: number;
  message: string;
  data?: {
    ip: string;
    userAgent: string;
  };
}

export default function useClientIP() {
  const [dataIP, setDataIP] = useState<DataIPProps | null>(null);

  useEffect(() => {
    async function getIP() {
      try {
        const res = await fetch("/api/get-ip");
        const data: DataIPProps = await res.json();
        setDataIP(data);
      } catch (error) {
        console.error("Failed to fetch IP:", error);
      }
    }

    getIP();
  }, []);

  return dataIP;
}
