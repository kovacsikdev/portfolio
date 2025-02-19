"use client";

import VideosApp from "@/components/videos/VideosApp";
import { DevInfo } from "@/components";

import "./page.css";

const Videos = () => {
  return (
    <>
      <div className="page-title text-4xl">
        <h2>Videos</h2>
        <DevInfo>
          https://github.com/kovacsikdev/portfolio/blob/main/src/components/videos/VideosApp.tsx
        </DevInfo>
      </div>
      <div className="flex flex-wrap relative">
        <VideosApp />
      </div>
    </>
  );
};

export default Videos;
