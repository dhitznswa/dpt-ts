import React from "react";
import NetworkIPAddrLookup from "../tools/NetworkIPAddrLookup";
import { redirect } from "next/navigation";

export default async function NetworkTool({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const tool = (await params).tool;

  switch (tool) {
    case "ip-addr-lookup":
      return <NetworkIPAddrLookup />;
    default:
      return redirect("/404-NotFound");
  }
}
