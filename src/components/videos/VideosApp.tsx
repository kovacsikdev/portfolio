"use client";

import VideoList from "./VideoList";

import "./VideosApp.css"

const VideosApp = () => {
  return (
    <>
      <div className="w-full">
        <div className="font-bold ml-3">Nature - <a target="_blank" href="https://pixabay.com/videos/search/nature/">view all</a></div>
        <VideoList type="nature" />
      </div>
      <div className="w-full">
        <div className="font-bold ml-3">Space - <a target="_blank" href="https://pixabay.com/videos/search/space/">view all</a></div>
        <VideoList type="space" />
      </div>
      <div className="w-full">
        <div className="font-bold ml-3">Intro - <a target="_blank" href="https://pixabay.com/videos/search/intro/">view all</a></div>
        <VideoList type="intro" />
      </div>
    </>
  );
};

export default VideosApp;
