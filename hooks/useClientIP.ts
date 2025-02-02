"use client";

import { useEffect, useState } from "react";
import axios from "axios";

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
        const { data } = await axios.get("/api/get-ip");
        setDataIP(data);
      } catch (error) {
        console.error("Failed to fetch IP:", error);
      }
    }

    getIP();
  }, []);

  return dataIP;
}
