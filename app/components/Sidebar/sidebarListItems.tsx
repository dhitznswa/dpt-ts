import React from "react";
import { buttonVariants } from "../utils/button";
import Link from "next/link";
import { cx } from "class-variance-authority";

export default function SidebarListItems() {
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
            <i className="fa-light fa-network-wired"></i> Networking
          </li>
          <li className="sidebar__list_item group">
            <Link href="/" className="sidebar__list_item_link">
              Whois
            </Link>
          </li>
          <li className="sidebar__list_item group">
            <Link href="/" className="sidebar__list_item_link">
              SSH Cracker
            </Link>
          </li>
          <li className="sidebar__list_item group">
            <Link href="/" className="sidebar__list_item_link">
              BASE64 Encription
            </Link>
          </li>
        </ul>
        <ul className="w-full sidebar__list">
          <li className="sidebar__list_header">
            <i className="fa-light fa-download"></i> Downloader
          </li>
          <li className="sidebar__list_item group">
            <Link href="/" className="sidebar__list_item_link">
              Tiktok Downloader
            </Link>
          </li>
          <li className="sidebar__list_item group">
            <Link href="/" className="sidebar__list_item_link">
              Youtube Downloader
            </Link>
          </li>
          <li className="sidebar__list_item group active">
            <Link href="/" className="sidebar__list_item_link">
              Instagram Downloader
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
