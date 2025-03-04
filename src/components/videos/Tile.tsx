"use client";

import "./Tile.scss";

type TileProps = {
  videoType: "nature" | "space";
  videoId: number;
  thumbnail: any;
};

const Tile = (props: TileProps) => {
  const { thumbnail, videoType, videoId } = props;

  return (
    <div id="Tile" className="tile-wrapper m-auto">
      <div
        className={`tile-item flex justify-center items-center border border-gray-600 rounded-lg p-3`}
      >
        <div
          className="tile-thumbnail relative size-full flex justify-center items-center"
          onClick={() => {
            window.location.href = `/portfolio/videos/${videoType}/video?id=${videoId}`;
          }}
        >
          <div className="play-button"></div>
          {thumbnail}
        </div>
      </div>
    </div>
  );
};

export default Tile;
