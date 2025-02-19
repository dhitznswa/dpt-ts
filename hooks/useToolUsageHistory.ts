"use client";

import axios from "axios";
import { useState } from "react";

interface CreateHistroyProps {
  status: string;
  tool_name: string;
  ip_address: string;
  notes: string;
}

export default function useToolUsageHistory() {
  const createHistory = async ({
    status,
    tool_name,
    ip_address,
    notes,
  }: CreateHistroyProps) => {
    try {
      const history = await axios.post("/api/tool-usage-history", {
        status,
        tool_name,
        ip_address,
        notes,
      });
      console.log(history);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createHistory,
  };
}
