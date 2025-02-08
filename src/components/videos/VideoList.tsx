"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Tile from "./Tile";
import { videoMap } from "./videoMap";

import "./VideosApp.css";

type VideoItemType = {
  videoSrc: string;
  videoCredits: string;
  thumbnailUrl: string;
};

type VideoListProps = {
  type: "nature" | "space" | "intro";
};

const VideoList = (props: VideoListProps) => {
  const { type } = props;
  const videosRef = useRef<HTMLDivElement>(null);
  const [displayScrollLeftButton, setDisplayScrollLeftButton] = useState(false);
  const [displayScrollRightButton, setDisplayScrollRightButton] =
    useState(false);

  const videoScroll = () => {
    if (videosRef.current) {
      // Show scroll left button if scroll left is a bit bigger than initial
      if (videosRef.current.scrollLeft > 20) {
        setDisplayScrollLeftButton(true);
      } else {
        setDisplayScrollLeftButton(false);
      }

      // Show scroll right button if scroll left is a bit bigger than scroll width and client width
      if (videosRef.current.scrollWidth - videosRef.current.clientWidth - videosRef.current.scrollLeft > 20) {
        setDisplayScrollRightButton(true);
      } else {
        setDisplayScrollRightButton(false);
      }
    }
  };

  useEffect(() => {
    if (videosRef.current) {
      if (videosRef.current.scrollWidth > videosRef.current.clientWidth) {
        setDisplayScrollRightButton(true);
      }

      videosRef.current.onscroll = videoScroll;
    }
  }, []);

  const scrollLeft = () => {
    if (videosRef.current) {
      videosRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (videosRef.current) {
      videosRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full relative">
      {displayScrollLeftButton && (
        <button onClick={scrollLeft} className="scroll-button left-0">
          {"<"}
        </button>
      )}
      <div ref={videosRef} className="videos-container relative scrollbar-hide">
        <div className="videos flex">
          {Array.isArray(videoMap[type]) &&
            videoMap[type].map((item: VideoItemType, index) => {
              return (
                <Tile
                  key={`nature_${index}`}
                  thumbnail={
                    <Image
                      src={item.thumbnailUrl}
                      alt=""
                      unoptimized
                      fill={true}
                    />
                  }
                >
                  <video className="video" src={item.videoSrc} controls loop />
                  <div className="mt-2 text-sm">
                    <a href={item.videoCredits}>credits</a>
                  </div>
                </Tile>
              );
            })}
        </div>
      </div>
      {displayScrollRightButton && (
        <button onClick={scrollRight} className="scroll-button right-0">
          {">"}
        </button>
      )}
    </div>
  );
};

export default VideoList;
