"use client";

import { Button } from "@/app/components/utils/button";
import Card from "@/app/components/utils/card";
import Input from "@/app/components/utils/input";
import axios from "axios";
import React, { useState } from "react";
import { z } from "zod";
import ResultSectionIPAddressLookup from "./ResultSectionIPAddressLookup";
import useToolUsageHistory from "@/hooks/useToolUsageHistory";

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

export default function MainSectionIPAddressLookup() {
  const [errorValidate, setErrorValidate] = useState<string>("");
  const [responseInformation, setResponseInformation] =
    useState<ResponseInformation | null>(null);
  const [queryIp, setQueryIp] = useState<string>("");

  const [pending, setPending] = useState<boolean>(false);

  const { createHistory } = useToolUsageHistory();

  const handleAction = async (query: string) => {
    setPending(true);
    const url = `http://ip-api.com/json/${query}?fields=country,countryCode,region,regionName,city,zip,lat,lon,timezone,currency,isp,query,status`;

    try {
      const localStorageIpInformation = localStorage.getItem(
        `dpt-ial__${query}`
      );
      if (localStorageIpInformation) {
        setTimeout(() => {
          setResponseInformation(JSON.parse(localStorageIpInformation));
          createHistory({
            status: "success",
            tool_name: "IP Address Lookup",
            notes: "Berhasil",
          });
          setPending(false);
        }, 3000);
        return;
      }

      const { status, data } = await axios.get(url);

      if (status != 200) {
        setPending(false);
        return setResponseInformation({
          status: "error",
          message: "Internal Server Error.",
        });
      }

      if (data.status == "fail") {
        setPending(false);
        return setResponseInformation({
          status: "error",
          message: `Tidak mendapatkan informasi dari IP : ${query}`,
        });
      }

      const resultIpInformation: ResponseInformation = {
        status: "succes",
        query: data.query,
        address: `${data.city}, ${data.regionName}, ${data.country} (${data.countryCode}), ${data.zip}`,
        currency: data.currency,
        timezone: data.timezone,
        latlon: `${data.lat}, ${data.lon}`,
        isp: data.isp,
      };

      localStorage.setItem(
        `dpt-ial__${query}`,
        JSON.stringify(resultIpInformation)
      );
      setResponseInformation(resultIpInformation);
      createHistory({
        status: "success",
        tool_name: "IP Address Lookup",
        notes: "Berhasil",
      });
      setPending(false);
    } catch (error) {
      console.log(error);
      setPending(false);
      setResponseInformation({
        status: "error",
        message: "Internal Server Error.",
      });
    }
  };

  const handlerFormSubmit = async () => {
    const ip = queryIp;

    const ipValidation = z.string().ip({ message: "IP Address Tidak Valid" });
    const validatedIP = ipValidation.safeParse(ip);

    if (!validatedIP.success) {
      setErrorValidate(validatedIP.error.flatten().formErrors[0]);
      return;
    }

    handleAction(ip as string);
  };

  const resetHandler = async () => {
    setResponseInformation(null);
    setQueryIp("");
    setErrorValidate("");
    setPending(false);
  };

  return (
    <>
      <Card className="mb-3 flex flex-col gap-4">
        <div className="ipaddrlookup__input">
          <Input
            variant={errorValidate != "" ? "outline_error" : "outline"}
            placeholder="Masukan IP Address valid"
            name="ipaddr"
            onChange={(e) => {
              setErrorValidate("");
              setQueryIp(e.target.value);
            }}
            value={queryIp}
          />
          {errorValidate != "" ? (
            <span className=" mx-2 text-xs font-semibold text-red-600">
              {errorValidate}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="ipaddrlookup__button flex gap-3">
          {pending ? (
            <Button disabled>Mencari informasi ...</Button>
          ) : (
            <Button disabled={errorValidate != ""} onClick={handlerFormSubmit}>
              Cek Sekarang
            </Button>
          )}
          <Button variant="secondary" onClick={resetHandler}>
            Reset
          </Button>
        </div>
      </Card>
      <Card>
        <h3 className="text-base font-semibold mb-3">Hasil Pencarian:</h3>
        <div className="mx-3">
          <ResultSectionIPAddressLookup
            responseInformation={responseInformation}
          />
        </div>
      </Card>
    </>
  );
}
