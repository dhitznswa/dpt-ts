import React from "react";
import { redirect } from "next/navigation";
import IPAddrLookup from "../tools/Networking/IPAddrLookup";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ tool: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = (await params).tool;

  switch (tool) {
    case "ip-addr-lookup":
      return {
        title: "IP Address Lookup",
      };

    default:
      return {};
  }
}

export default async function NetworkTool({ params }: Props) {
  const tool = (await params).tool;

  switch (tool) {
    case "ip-addr-lookup":
      return <IPAddrLookup />;
    default:
      return redirect("/404-NotFound");
  }
}
