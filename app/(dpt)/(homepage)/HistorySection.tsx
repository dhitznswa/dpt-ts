"use client";

import Card from "@/app/components/utils/card";
import useToolUsageHistory from "@/hooks/useToolUsageHistory";
import { maskIP } from "@/lib/global-func";

export default function HistorySection() {
  const { toolHistories, hitsoryCount } = useToolUsageHistory();

  return (
    <>
      <Card>
        <h2 className="text-xl font-bold mb-3"># History</h2>
        <div>
          <div
            className="overflow-x-scroll scroller relative"
            data-lenis-prevent
          >
            <table className="table">
              <thead>
                <tr className="table__tr">
                  <th className="table__th">Status</th>
                  <th className="table__th">IP Address</th>
                  <th className="table__th">Tool Name</th>
                  <th className="table__th">Datetime</th>
                  <th className="table__th">Catatan</th>
                </tr>
              </thead>
              <tbody>
                {toolHistories.map((h, i) => (
                  <tr className="table__tr" key={i}>
                    <td className="table__td">
                      {h.status == "success" ? (
                        <i className="fa-regular fa-circle-check text-green-500"></i>
                      ) : (
                        <i className="fa-regular fa-circle-x text-red-500"></i>
                      )}
                    </td>
                    <td className="table__td tracking-wider">
                      {maskIP(h.ip_address)}
                    </td>
                    <td className="table__td">{h.tool_name}</td>
                    <td className="table__td">
                      {new Date(h.used_at).toLocaleDateString("id-ID")}
                    </td>
                    <td className="table__td">{h.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-semibold text-xs mt-2">
            Total Histori : {hitsoryCount}
          </p>
        </div>
      </Card>
    </>
  );
}
