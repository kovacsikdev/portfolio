"use client";

import { useEffect, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Tile from "./Tile";
import CloseIcon from "../../assets/close-icon.svg";
import { videoMap } from "./videoMap";

import "./Video.scss";

type VideoProps = {
  id: keyof typeof videoMap;
  toggleVideo: Dispatch<SetStateAction<boolean>>;
};

type VideoItemType = {
  videoSrc: string;
  thumbnailUrl: string;
};

const Video = (props: VideoProps) => {
  const { id, toggleVideo } = props;

  const headerMap = {
    nature: {
      bg: "bg_nature",
      stickyTitle: "Nature",
      title: "Nature videos",
      description: "A collection of nature videos. Provided by:",
      providedByLink: "https://pixabay.com/videos/search/nature/",
    },
    space: {
      bg: "bg_space",
      stickyTitle: "Space",
      title: "Space videos",
      description: "A collection of space videos. Provided by:",
      providedByLink: "https://pixabay.com/videos/search/space/",
    },
  };

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div id="Video">
      <div
        className="video-overlay"
        onClick={() => {
          toggleVideo(false);
        }}
      ></div>
      <div className="video-content">
        <div className="video-sticky-content">
          <div className="video-sticky-title">
            <div className="video-sticky-title-text">
              {headerMap[id as keyof typeof headerMap].stickyTitle}
            </div>
            <button
              className="video-sticky-title-btn"
              onClick={() => {
                toggleVideo(false);
              }}
            >
              <Image src={CloseIcon} alt="Close Icon" />
            </button>
          </div>
        </div>
        <div className="video-img-header">
          <div className="video-img-bg">
          <img
            src={`/portfolio/${headerMap[id as keyof typeof headerMap].bg}.jpeg`}
            loading="lazy"
            alt="Nature background"
          />
          </div>
          <div className="video-img-title">
            {headerMap[id as keyof typeof headerMap].title}
          </div>
          <div className="video-img-description">
            {headerMap[id as keyof typeof headerMap].description}{" "}
            <a
              href={`${headerMap[id as keyof typeof headerMap].providedByLink}`}
            >
              Pixabay
            </a>
          </div>
        </div>
        <div className="video-items">
          {Array.isArray(videoMap[id]) &&
            videoMap[id].map((item: VideoItemType, index) => {
              return (
                <Tile
                  key={`video_${index}`}
                  thumbnail={
                    <Image
                      src={item.thumbnailUrl}
                      alt=""
                      unoptimized
                      fill={true}
                    />
                  }
                >
                  <video
                    className="video"
                    src={item.videoSrc}
                    controls
                    autoPlay
                  />
                </Tile>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Video;
