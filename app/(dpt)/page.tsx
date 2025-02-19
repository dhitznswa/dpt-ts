"use client";

import useClientIP from "@/hooks/useClientIP";
import HeaderTool from "../components/HeaderTool";
import Card from "../components/utils/card";
import useToolUsageHistory from "@/hooks/useToolUsageHistory";

export default function Home() {
  const dataIP = useClientIP();
  const { error, toolHistories } = useToolUsageHistory();

  return (
    <>
      <div className="mb-4">
        <HeaderTool
          title="Homepage"
          description="Selamat datang di Dynamic Power Tools, Mudahkan hidupmu dengan berbagai tools kami."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <Card className="flex items-center gap-4">
          <div className="w-1/2">
            <i className="fa-duotone fa-tags text-2xl"></i>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              versi
            </span>
            <span className="text-2xl font-medium">1.0</span>
          </div>
        </Card>
        <Card className="flex items-center gap-4">
          <div className="w-1/2">
            <i className="fa-solid fa-screwdriver-wrench text-2xl"></i>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Jumlah Tools
            </span>
            <span className="text-2xl font-medium">20+</span>
          </div>
        </Card>
        <Card className="flex items-center gap-4">
          <div className="w-1/2">
            <i className="fa-solid fa-signal-stream text-2xl"></i>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              IP Address
            </span>
            <span className="text-2xl font-medium">{dataIP?.data?.ip}</span>
          </div>
        </Card>
        <Card className="flex items-center gap-4">
          <div className="w-1/2">
            <i className="fa-solid fa-users text-2xl"></i>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Visitors
            </span>
            <span className="text-2xl font-medium">3079</span>
          </div>
        </Card>
      </div>

      <div className="">
        <Card>
          <h2 className="text-2xl font-bold">
            <span className="text-primary">#</span> Histories
          </h2>
          <div
            className="max-h-[400px] overflow-y-scroll my-4 scroller"
            data-lenis-prevent
          >
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    ID
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Status
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Used At
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">
                    Tool Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">
                    IP Address
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">
                    Catatan
                  </th>
                </tr>
              </thead>
              <tbody>
                {toolHistories?.map((history, i) => (
                  <tr className="hover:bg-gray-100" key={history.id}>
                    <td className="border border-gray-300 px-4 py-2">
                      {history.id}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {new Date(history.used_at).toLocaleDateString("id-ID")}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {history.status}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {history.tool_name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {history.ip_address}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {history.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
}
