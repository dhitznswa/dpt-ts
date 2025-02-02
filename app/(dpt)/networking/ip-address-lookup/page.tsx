import HeaderTool from "@/app/components/HeaderTool";
import Card from "@/app/components/utils/card";
import React from "react";

export default async function IPAddressLookup() {
  return (
    <>
      <div className="mb-4">
        <HeaderTool
          title="IP Address Lookup"
          description="IP Address Lookup adalah alat yang memungkinkan Anda untuk mengetahui informasi detail tentang sebuah alamat IP, termasuk lokasi perkiraan, ISP (Penyedia Layanan Internet), dan data terkait lainnya."
        />
      </div>
      <div className="">
        <Card>
          <div className="grid grid-cols-5">
            <div className="grid"></div>
          </div>
        </Card>
      </div>
    </>
  );
}
