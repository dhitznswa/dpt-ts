"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface CreateHistroyProps {
  status: string;
  tool_name: string;
  notes: string;
}

interface ReadHistoriesProps extends CreateHistroyProps {
  id: string;
  used_at: Date;
}

export default function useToolUsageHistory() {
  const [toolHistories, setToolHistories] = useState<ReadHistoriesProps[]>([]);
  const [error, setError] = useState<string>("");

  const createHistory = async ({
    status,
    tool_name,
    notes,
  }: CreateHistroyProps) => {
    try {
      const history = await axios.post("/api/tool-usage-history", {
        status,
        tool_name,
        notes,
      });
      console.log(history);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getHistories = async () => {
      try {
        const { status, data } = await axios.get("/api/tool-usage-history");

        console.log(status, data.data.histories);
        if (status != 200) {
          setError("Gagal mendapatkan data histori");
          return;
        }
        setToolHistories(data.data.histories);
      } catch (e) {
        console.log(e);
        setError("Internal Server Error");
      }
    };
    getHistories();
  }, []);

  console.log(toolHistories);

  return {
    createHistory,
    error,
    toolHistories,
  };
}
