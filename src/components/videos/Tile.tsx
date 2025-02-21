"use client";

import React, { useState, useRef, ReactNode } from "react";
import Image from "next/image";
import CloseIcon from "../../assets/close-icon.svg";
import "./Tile.css";

type TileProps = {
  thumbnail: any;
  children?: ReactNode;
};

const Tile = (props: TileProps) => {
  const { thumbnail, children } = props;
  const tileRef = useRef<HTMLDivElement>(null);
  const [displayItem, setDisplayItem] = useState(false);

  const updateTilePos = (tileRef: any) => {
    if (tileRef.current) {
      const rect = tileRef.current.getBoundingClientRect();
      const child = tileRef.current.children[0] as HTMLElement;

      if (child.style.position != "fixed") {
        child.style.position = "fixed";
        child.style.top = `${rect.top}px`;
        child.style.left = `${rect.left}px`;
        setTimeout(() => {
          child.style.transition = "all 0.5s ease";
          child.classList.add("display");
        }, 100);
      } else {
        child.classList.remove("display");
        setTimeout(() => {
          child.style.position = "absolute";
          child.style.top = `0px`;
          child.style.left = `0px`;
          child.style.transition = "";
        }, 500);
      }
    }
    setDisplayItem(!displayItem);
  };

  return (
    <div id="Tile" className="tile-wrapper m-auto" ref={tileRef}>
      <div
        className={`tile-item flex justify-center items-center border border-gray-600 rounded-lg p-3`}
      >
        {displayItem && (
          <div className="relative w-full pt-8">
            <div className="absolute top-0 right-0 cursor-pointer">
              <Image src={CloseIcon} alt="Close Icon" onClick={() => {updateTilePos(tileRef)}} />
            </div>
            {children}
          </div>
        )}
        {!displayItem && (
          <div
            className="tile-thumbnail relative size-full flex justify-center items-center"
            onClick={() => {
              updateTilePos(tileRef);
            }}
          >
            <div className="play-button"></div>
            {thumbnail}
          </div>
        )}
      </div>
      {displayItem && (
        <div
          className="tile-overlay"
          onClick={() => {
            updateTilePos(tileRef);
          }}
        ></div>
      )}
    </div>
  );
};

export default Tile;
