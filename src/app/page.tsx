"use client";

import Link from "next/link";
import Image from "next/image";
import NewTabIcon from "../assets/new-tab.svg";

export default function Home() {

  return (
    <div className="flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="page-title text-4xl">
          <h1>Welcome</h1>
        </div>
        <div>
          My name is Michael Kovacsik. Welcome to my web portal, where I showcase my Fullstack development skills
        </div>
        <div>
          You can navigate through the side menu to explore the various projects I have built
        </div>
        <div>
          More projects will be added soon, so stay tuned!
        </div>
        <div className="flex justify-evenly">
          <Link
            href="/dashboard"
            className="border border-white rounded-lg p-2 w-20 h-20"
          >
            <img src="/portfolio/dashboard_pic.png" alt="Dashboard icon" />
          </Link>
          <Link
            href="/realtimemap"
            className="border border-white rounded-lg p-2 w-20 h-20"
          >
            <img src="/portfolio/map.png" alt="Map icon" />
          </Link>
          <Link
            href="/videos"
            className="border border-white rounded-lg p-2 w-20 h-20"
          >
            <img src="/portfolio/videos.png" alt="Videos icon" />
          </Link>
        </div>
        <div><Link href="https://kovacsikdev.github.io/" target="_blank">Resume website <Image src={NewTabIcon} alt="New tab" /></Link></div>
      </div>
    </div>
  );
}
