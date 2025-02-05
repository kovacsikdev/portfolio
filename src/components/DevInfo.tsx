"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import InfoIcon from "../assets/info-icon.svg";
import "./DevInfo.css";

type DevInfoProps = {
  children: any;
};

const DevInfo = (props: DevInfoProps) => {
  const { children } = props;
  const [slideIn, setSlideIn] = useState(false);
  const [displayDevNote, setDisplayDevNote] = useState(false);

  useEffect(() => {
    if (displayDevNote) {
      setSlideIn(true);
    }
  }, [displayDevNote]);

  return (
    <>
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
        <div
          className="dev-info"
          onClick={() => {
            setDisplayDevNote(false);
          }}
        >
          <div className={`dev-info-content ${slideIn ? "slide-in" : ""}`}>
            <div>Dev notes:</div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default DevInfo;
