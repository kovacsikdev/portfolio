"use client";

import React, { useEffect, useState, ReactNode } from "react";
import "./DevInfo.css";

type DevInfoProps = {
  toggle: () => void;
  children: ReactNode;
};

const DevInfo = (props: DevInfoProps) => {
  const { toggle, children } = props;
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideIn(true);
  }, []);

  return (
    <div className="dev-info" onClick={() => toggle()}>
      <div className={`dev-info-content ${slideIn ? "slide-in" : ""}`}>
        <div>Dev notes:</div>
        {children}
      </div>
    </div>
  );
};

export default DevInfo;
