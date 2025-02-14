import React from "react";
import { buttonVariants } from "../utils/button";
import Link from "next/link";
import { cx } from "class-variance-authority";

export default function SidebarListItems({
  activeLink,
}: {
  activeLink: (path: string) => boolean;
}) {
  return (
    <div className="w-full">
      <Link
        href="/"
        className={cx("w-full", buttonVariants({ variant: "primary" }))}
      >
        <i className="fa-regular fa-home"></i> Homepage
      </Link>

      <div className="mt-8">
        <ul className="w-full sidebar__list">
          <li className="sidebar__list_header">
            <i className={cx("fa-light fa-network-wired")}></i> Networking{" "}
            {activeLink("/networking") ? (
              <i className={cx("fa-light fa-check")}></i>
            ) : (
              ""
            )}
          </li>
          <li
            className={cx(
              "sidebar__list_item group",
              activeLink("/networking/ip-addr-lookup") ? "active" : ""
            )}
          >
            <Link
              href="/networking/ip-addr-lookup"
              className="sidebar__list_item_link"
            >
              IP Address Lookup
            </Link>
          </li>
          <li
            className={cx(
              "sidebar__list_item group",
              activeLink("/coba") ? "active" : ""
            )}
          >
            <Link href="/" className="sidebar__list_item_link">
              Whois Domain
            </Link>
          </li>
        </ul>
        {/* <ul className="w-full sidebar__list">
          <li className="sidebar__list_header">
            <i className="fa-light fa-download"></i> Downloader
          </li>
          <li className={cx}>
            <Link href="/" className="sidebar__list_item_link">
              Tiktok Downloader
            </Link>
          </li>
          <li className={cx}>
            <Link href="/" className="sidebar__list_item_link">
              Youtube Downloader
            </Link>
          </li>
          <li className={cx}active">
            <Link href="/" className="sidebar__list_item_link">
              Instagram Downloader
            </Link>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
