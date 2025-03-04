"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Video from "@/components/videos/Video";

const SpaceVideo = () => {
  const ShowVideo = () => {
    const searchParams = useSearchParams();
    const videoId = searchParams.get("id");

    if (!videoId) {
      window.location.href = "/portfolio/videos/space";
      return null;
    }
    return <Video videoType="space" videoId={videoId || ""} />;
  };

  return (
    <Suspense>
      <ShowVideo />
    </Suspense>
  );
};

export default SpaceVideo;
