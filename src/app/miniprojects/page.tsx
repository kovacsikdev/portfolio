"use client";

import React, { useState } from "react";
import Image from "next/image";
import InfoIcon from "../../assets/info-icon.svg";

import { DevInfo } from "@/components";

import "./page.css";

const MiniProjects = () => {
  const [displayDevNote, setDisplayDevNote] = useState(false);
  const [displayMiniProjectItem, setDisplayMiniProjectItem] = useState(false);

  return (
    <>
      <div className="page-title text-4x1">
        <h2>Mini Projects</h2>
        <button
          onClick={() => {
            setDisplayDevNote(true);
          }}
        >
          <Image
            style={{ margin: "0 0.5rem" }}
            src={InfoIcon}
            alt="information icon"
          />
        </button>
        {displayDevNote && (
          <DevInfo
            toggle={() => {
              setDisplayDevNote(false);
            }}
          >
            Mini projects
          </DevInfo>
        )}
      </div>
      <div className="flex flex-wrap">
        <div className="mini-project-item-wrapper border border-gray-600 rounded-lg m-3">
          <div
            className={`mini-project-item ${
              displayMiniProjectItem ? "display" : ""
            } flex justify-center items-center border border-gray-600 rounded-lg p-3`}
            onClick={() => {
              setDisplayMiniProjectItem(!displayMiniProjectItem);
            }}
          ></div>
        </div>
        <div className="h-[480px] w-[480px] flex justify-center items-center border border-gray-600 rounded-lg p-3 m-3"></div>
        <div className="h-[480px] w-[480px] flex justify-center items-center border border-gray-600 rounded-lg p-3 m-3"></div>
        <div className="h-[480px] w-[480px] flex justify-center items-center border border-gray-600 rounded-lg p-3 m-3"></div>
      </div>
    </>
  );
};

export default MiniProjects;
