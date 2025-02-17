import HeaderTool from "@/app/components/HeaderTool";
import React from "react";
import MainSectionIPAddressLookup from "./MainSectionIPAddressLookup";

export default function IPAddrLookup() {
  return (
    <>
      <div className="mb-4">
        <HeaderTool
          title="IP Address Lookup"
          description="IP Address Lookup adalah tools OSINT untuk mengetahui lokasi seseorang dengan menggunakan IP Mereka"
        />
      </div>
      <MainSectionIPAddressLookup />
    </>
  );
}
