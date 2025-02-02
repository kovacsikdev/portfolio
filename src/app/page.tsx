"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DevInfo } from "@/components";
import InfoIcon from "../assets/info-icon.svg";

export default function Home() {
  const [displayDevNote, setDisplayDevNote] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="mb-4 text-4xl">
          Welcome
          <button onClick={() => {
              setDisplayDevNote(true)
            }}>
            <Image style={{margin: "0 0.5rem"}} src={InfoIcon} alt="information icon" />
          </button>
          {displayDevNote && (
            <DevInfo toggle={() => {setDisplayDevNote(false)}}>
              Website built using Next.js, React, TypeScript
            </DevInfo>
          )}
        </h1>
        <div>
          My name is Michael Kovacsik. This site is to showcase my Fullstack Web
          Development skills
        </div>
        <div>
          You can use the side menu to navigate different projects I built
        </div>
        {/* <div>This website was built in Next.js, React, and TypeScript</div> */}
        <div className="flex justify-evenly">
          <Link href="/dashboard" className="border border-white rounded-lg p-2"><img src="/portfolio/dashboard_pic.png" alt="Dashboard icon" /></Link>
          <Link href="/realtimemap" className="border border-white rounded-lg p-2"><img src="/portfolio/map.png" alt="Map icon" /></Link>
          <Link href="/miniprojects" className="border border-white rounded-lg p-2"><img src="/portfolio/product.png" alt="Projects icon" /></Link>
        </div>
      </div>
    </div>
  );
}
