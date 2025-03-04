"use client";

import "./VideosApp.scss";

const VideosApp = () => {

  const showVideo = (id: "nature" | "space") => {
    window.location.href = `/portfolio/videos/${id}`
  };

  return (
    <div id="VideosApp">
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
