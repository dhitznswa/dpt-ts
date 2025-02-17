import { buttonVariants } from "@/app/components/utils/button";
import { cx } from "class-variance-authority";
import Link from "next/link";
import React from "react";

interface ResponseInformation {
  status: "succes" | "error";
  query?: string;
  address?: string;
  currency?: string;
  timezone?: string;
  latlon?: string;
  isp?: string;
  message?: string;
}

export default function ResultSectionIPAddressLookup({
  responseInformation,
}: {
  responseInformation: ResponseInformation | null;
}) {
  return (
    <>
      {responseInformation == null ? (
        "Belum ada apapun disini."
      ) : responseInformation.status == "error" ? (
        responseInformation.message
      ) : (
        <ul className="max-w-xl container max-auto w-full flex-row space-y-3">
          <li className="w-full grid grid-cols-6">
            <span className="col-span-2">IP Target</span>{" "}
            <span className="col-span-1">:</span>{" "}
            <span className="col-span-3">{responseInformation?.query}</span>
          </li>
          <li className="w-full grid grid-cols-6">
            <span className="col-span-2">Lokasi</span>{" "}
            <span className="col-span-1">:</span>{" "}
            <span className="col-span-3">{responseInformation?.address}</span>
          </li>
          <li className="w-full grid grid-cols-6">
            <span className="col-span-2">Zona Waktu</span>{" "}
            <span className="col-span-1">:</span>{" "}
            <span className="col-span-3">{responseInformation?.timezone}</span>
          </li>
          <li className="w-full grid grid-cols-6">
            <span className="col-span-2">Mata Uang</span>{" "}
            <span className="col-span-1">:</span>{" "}
            <span className="col-span-3">{responseInformation?.currency}</span>
          </li>
          <li className="w-full grid grid-cols-6">
            <span className="col-span-2">ISP</span>{" "}
            <span className="col-span-1">:</span>{" "}
            <span className="col-span-3">{responseInformation?.isp}</span>
          </li>
          <hr />
          <li className="w-full grid grid-cols-6">
            <span className="col-span-6">
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(
                  responseInformation?.latlon as string
                )}`}
                className={cx(
                  "w-full",
                  buttonVariants({ variant: "primary", size: "sm" })
                )}
              >
                Cek di Google Map
              </Link>
            </span>
          </li>
        </ul>
      )}
    </>
  );
}
