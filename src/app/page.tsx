"use client";

import Link from "next/link";
import { DevInfo } from "@/components";

export default function Home() {

  return (
    <div className="flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="page-title text-4xl">
          <h1>Welcome</h1>
          <DevInfo>
            Website built using Next.js, React, TypeScript
          </DevInfo>
        </div>
        <div>
          My name is Michael Kovacsik. This site is to showcase my Fullstack Web
          Development skills
        </div>
        <div>
          You can use the side menu to navigate different projects I built
        </div>
        <div>
          More projects being added soon
        </div>
        <div className="flex justify-evenly">
          <Link
            href="/dashboard"
            className="border border-white rounded-lg p-2"
          >
            <img src="/portfolio/dashboard_pic.png" alt="Dashboard icon" />
          </Link>
          <Link
            href="/realtimemap"
            className="border border-white rounded-lg p-2"
          >
            <img src="/portfolio/map.png" alt="Map icon" />
          </Link>
          {/* <Link
            href="/miniprojects"
            className="border border-white rounded-lg p-2"
          >
            <img src="/portfolio/product.png" alt="Projects icon" />
          </Link> */}
        </div>
      </div>
    </div>
  );
}
