"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Video from "@/components/videos/Video";

const NatureVideo = () => {
  const ShowVideo = () => {
    const searchParams = useSearchParams();
    const videoId = searchParams.get("id");

    if (!videoId) {
      window.location.href = "/portfolio/videos/nature";
      return null;
    }
    return <Video videoType="nature" videoId={videoId || ""} />;
  };

  return (
    <Suspense>
      <ShowVideo />
    </Suspense>
  );
};

export default NatureVideo;
