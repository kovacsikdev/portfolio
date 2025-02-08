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
          <div>Built with React, Typescript and custom CSS</div>
          <div>Videos provided by <a href="https://pixabay.com/videos/" target="_blank">Pixabay</a></div>
        </DevInfo>
      </div>
      <div className="flex flex-wrap relative">
      <VideosApp />
    </div>
    </>
  );
};

export default Videos;
