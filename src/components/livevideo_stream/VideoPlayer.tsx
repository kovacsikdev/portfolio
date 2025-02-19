import React, { useContext } from "react";
import { LiveVideoStreamContext } from "@/helpers/context";

const VideoPlayer: React.FC = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(LiveVideoStreamContext);

  return (
    <div>
      <h2>Video Player</h2>
      <div>
        {/* {stream && (
          <div>
            <div>{name || "Name"}</div>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              style={{ width: "300px" }}
            />
          </div>
        )} */}
        
          <div>
            <div>{name || "Name"}</div>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              style={{ width: "300px" }}
            />
          </div>
        
        {callAccepted && !callEnded && (
          <div>
            <div>{call.name || "Name"}</div>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              style={{ width: "300px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
