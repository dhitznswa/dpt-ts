"use client";

import HeaderTool from "@/app/components/HeaderTool";
import { Button, buttonVariants } from "@/app/components/utils/button";
import Card from "@/app/components/utils/card";
import Input from "@/app/components/utils/input";
import axios from "axios";
import { cx } from "class-variance-authority";
import Link from "next/link";
import React, { useState } from "react";

interface ResponseInformation {
  status: "succes" | "error";
  query?: string;
  address?: string;
  currency?: string;
  timezone?: string;
  latlon?: string;
  isp?: string;
}

export default function NetworkIPAddrLookup() {
  const [IP, setIP] = useState<string>("");
  const [IPInfomation, setIPInformation] = useState<ResponseInformation | null>(
    null
  );

  const checkInformation = async (query: string) => {
    const localStorageIPInfomation = localStorage.getItem(`dpt-ial_${query}`);

    if (localStorageIPInfomation) {
      setIPInformation(JSON.parse(localStorageIPInfomation));
      return;
    }

    try {
      const url = `http://ip-api.com/json/${query}?fields=country,countryCode,region,regionName,city,zip,lat,lon,timezone,currency,isp,query`;

      const { data } = await axios.get(url);

      const ipInformation: ResponseInformation = {
        status: "succes",
        query: data.query,
        address: `${data.city}, ${data.regionName}, ${data.country} (${data.countryCode}), ${data.zip}`,
        currency: data.currency,
        timezone: data.timezone,
        latlon: `${data.lat}, ${data.lon}`,
        isp: data.isp,
      };
      localStorage.setItem(`dpt-ial_${query}`, JSON.stringify(ipInformation));
      setIPInformation(ipInformation);
    } catch (error) {
      setIPInformation({
        status: "error",
      });
      console.log(error);
    }
  };

  const handlerCheckMyIP = async () => {};
  const handlerCheckIP = async () => {
    await checkInformation(IP);
  };

  return (
    <>
      <div className="mb-4">
        <HeaderTool
          title="IP Address Lookup"
          description="IP Address Lookup adalah tools OSINT untuk mengetahui lokasi seseorang dengan menggunakan IP Mereka"
        />
      </div>
      <Card className="flex-row space-y-4 shadow mb-3">
        <div className="">
          <Input
            type="text"
            variant="outline"
            placeholder="Masukan IP Address"
            value={IP}
            onChange={(e) => setIP(e.target.value)}
          />
        </div>
        <div className="w-full flex gap-4">
          <Button size="sm" onClick={handlerCheckIP}>
            Cek Sekarang
          </Button>
          <Button size="sm" variant="secondary" onClick={handlerCheckMyIP}>
            Coba Cek IP Saya
          </Button>
        </div>
      </Card>
      <Card>
        <h3 className="text-base font-semibold mb-3">Hasil Pencarian:</h3>
        <div className="mx-4">
          {IPInfomation != null ? (
            IPInfomation?.status == "succes" ? (
              <ul className="max-w-xl container max-auto w-full flex-row space-y-3">
                <li className="w-full grid grid-cols-6">
                  <span className="col-span-2">IP Target</span>{" "}
                  <span className="col-span-1">:</span>{" "}
                  <span className="col-span-3">{IPInfomation?.query}</span>
                </li>
                <li className="w-full grid grid-cols-6">
                  <span className="col-span-2">Lokasi</span>{" "}
                  <span className="col-span-1">:</span>{" "}
                  <span className="col-span-3">{IPInfomation?.address}</span>
                </li>
                <li className="w-full grid grid-cols-6">
                  <span className="col-span-2">Zona Waktu</span>{" "}
                  <span className="col-span-1">:</span>{" "}
                  <span className="col-span-3">{IPInfomation?.timezone}</span>
                </li>
                <li className="w-full grid grid-cols-6">
                  <span className="col-span-2">Mata Uang</span>{" "}
                  <span className="col-span-1">:</span>{" "}
                  <span className="col-span-3">{IPInfomation?.currency}</span>
                </li>
                <li className="w-full grid grid-cols-6">
                  <span className="col-span-2">ISP</span>{" "}
                  <span className="col-span-1">:</span>{" "}
                  <span className="col-span-3">{IPInfomation?.isp}</span>
                </li>
                <hr />
                <li className="w-full grid grid-cols-6">
                  <span className="col-span-6">
                    <Link
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(
                        IPInfomation?.latlon as string
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
            ) : (
              "Error"
            )
          ) : (
            "Belum ada apapun disini"
          )}
        </div>
      </Card>
    </>
  );
}
