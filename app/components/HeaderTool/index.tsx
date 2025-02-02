"use client";
import { usePathname } from "next/navigation";
import Card from "../utils/card";
import { useEffect, useState } from "react";

export default function HeaderTool({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

  const pathname = usePathname();

  function splitNRmackPath(path: string) {
    if (path === "/") return [];

    const paths = path.split("/").filter((segment) => segment !== "");

    return paths;
  }

  useEffect(() => {
    setBreadcrumb(splitNRmackPath(pathname));
  }, [pathname]);

  return (
    <div>
      <Card className="flex flex-col gap-2">
        <div className="flex gap-1 items-center text-xs text-slate-400">
          <i className="fa-regular fa-home"></i>
          {breadcrumb.length > 0 ? (
            <ul className="flex gap-1">
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex gap-1 items-center capitalize">
                  <i className="fa-regular fa-angle-right"></i> {item}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-sm text-slate-400 font-medium tracking-wide">
          {description}
        </p>
      </Card>
    </div>
  );
}
