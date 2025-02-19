"use client";

import Image from "next/image";
import NewTabIcon from "../assets/new-tab.svg";

type DevInfoProps = {
  children: any;
};

const DevInfo = (props: DevInfoProps) => {
  const { children } = props;

  return (
    <div className="text-sm">
      <a href={`${children}`} target="_blank">
        Github <Image src={NewTabIcon} alt="New tab" />
      </a>
    </div>
  );
};

export default DevInfo;
