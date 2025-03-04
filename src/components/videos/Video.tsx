"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CloseIcon from "../../assets/close-icon.svg";
import { videoMap } from "./videoMap";

type VideoProps = {
  videoType: keyof typeof videoMap;
  videoId: string;
};

type VideoItemType = {
  videoSrc: string;
  thumbnailUrl: string;
  credit: string;
  id: number;
};

const Video = (props: VideoProps) => {
  const [loading, setLoading] = useState(true);
  const [videoSrc, setVideoSrc] = useState("");

  const { videoType, videoId } = props;

  if (!videoId) {
    // if not id was provided, then redirect back to the videos section
    window.location.href = "/portfolio/videos";
  }

  const getVideoById = () => {
    // Could use a server request here to get the video by id, but for this mock portfolio, we'll just get it from the videoMap.
    setLoading(true);

    const videos = videoMap[videoType];
    const videoNum = Number(videoId);
    const videoFromId = videos.filter((vid: VideoItemType) => {
      return vid.id === videoNum;
    });

    setVideoSrc(videoFromId[0].videoSrc);
    setLoading(false);
  };

  const navBack = () => {
    window.location.href = `/portfolio/videos/${videoType}`;
  };

  useEffect(() => {
    getVideoById();
  }, []);

  return (
    <div id="Video">
        {loading && (
          <div>Loading...</div>
        )}
        {!loading && (
          <>
            <div className="page-title text-4xl">
              <h2>Video</h2>
            </div>
            <div className="w-full m-auto flex flex-col md:w-[70%]">
              <div>
                <button className="m-2 float-right" onClick={navBack}>
                  <Image src={CloseIcon} alt="Close Icon" />
                </button>
              </div>
              <video src={videoSrc} controls />
              <div>
                <div className="page-title text-4xl">
                  <h2>Video Description in Lorem Ipsum</h2>
                </div>
                <div>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus augue massa, scelerisque ac purus id, accumsan
                    malesuada tellus. Ut molestie erat sit amet dui scelerisque,
                    vel iaculis dolor lacinia. Phasellus sapien massa,
                    condimentum id convallis at, lacinia nec justo. Quisque et
                    ex vitae velit pulvinar ultricies vel cursus velit. Integer
                    neque urna, aliquam consectetur auctor a, porttitor id nunc.
                    Morbi imperdiet at lectus et facilisis. Morbi nisl elit,
                    iaculis eget convallis id, cursus hendrerit urna.
                  </p>
                  <p className="mb-8">
                    Morbi fringilla, metus nec pretium tempor, leo risus
                    fringilla orci, at fermentum sapien nulla nec sapien.
                    Suspendisse suscipit massa enim, nec facilisis sapien
                    sollicitudin id. Phasellus pretium arcu sed lacus rhoncus
                    luctus. Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Donec facilisis massa vel justo viverra finibus.
                    Mauris porta porttitor dapibus. Quisque gravida ex sed
                    finibus rhoncus. Nunc laoreet justo nulla, eu mollis ligula
                    aliquet lobortis.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default Video;
