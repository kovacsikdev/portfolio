"use client";

import { useState } from "react";
import Video from "./Video";

import "./VideosApp.scss";

const VideosApp = () => {
  const [displayVideo, setDisplayVideo] = useState(false);
  const [videoId, setVideoId] = useState<"nature" | "space">("nature");

  const showVideo = (id: "nature" | "space") => {
    setDisplayVideo(true);
    setVideoId(id);
  };

  return (
    <div id="VideosApp">
      {displayVideo && videoId && (
        <Video id={videoId} toggleVideo={setDisplayVideo} />
      )}
      <div className="section-main">
        <div className="section-video">
          <img
            src="/portfolio/bg_nature.jpeg"
            loading="lazy"
            alt="Nature background"
          />
          <div className="section-video-title">Nature</div>
          <button
            className="section-video-button"
            onClick={() => {
              showVideo("nature");
            }}
          >
            Videos
          </button>
        </div>
        <div className="section-video">
          <img
            src="/portfolio/bg_space.jpeg"
            loading="lazy"
            alt="Nature background"
          />
          <div className="section-video-title">Space</div>
          <button
            className="section-video-button"
            onClick={() => {
              showVideo("space");
            }}
          >
            Videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideosApp;
