"use client";

import React, { useRef, useEffect, useState } from "react";
import Peer from "simple-peer";
import { io } from "socket.io-client";
import { LiveVideoStreamContext } from "@/helpers/context";
import {
  VideoPlayer,
  Notifications,
  Options,
} from "@/components/livevideo_stream";

type CallType = {
  isReceivingCall: boolean;
  from: string;
  name: string;
  signal: string;
};

const LiveVideoStream: React.FC = () => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState<MediaStream | undefined>(undefined);
  const [name, setName] = useState("");
  const [call, setCall] = useState<CallType>({
    isReceivingCall: false,
    from: "",
    name: "",
    signal: "",
  });
  const [me, setMe] = useState("");
  const socketRef = useRef<any>(null);
  const myVideo = useRef<any>(null);
  const userVideo = useRef<any>(null);
  const connectionRef = useRef<any>(null);
  const callPeerRef = useRef<any>(null);

  const answerCall = () => {
    setCallAccepted(true);
    setCallEnded(false);
    const peer = new Peer({ initiator: false, trickle: false, stream });
    peer.on("signal", (data) => {
      socketRef.current.emit("answerCall", { signal: data, to: call.from });
    });
    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });
    peer.signal(call.signal);
    connectionRef.current = peer;
  };

  const callUser = (id: string) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });
    peer.on("signal", (data) => {
      socketRef.current.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });
    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });
    callPeerRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    setCallAccepted(false);
    setCall({ isReceivingCall: false, from: "", name: "", signal: "" });

    callPeerRef.current.destroy();
  };

  useEffect(() => {
    socketRef.current = io("ws://localhost:8080", {
      transports: ["websocket"],
    });

    socketRef.current.on("me", (id: string) => setMe(id));
    socketRef.current.on(
      "callUser",
      ({ from, name: callerName, signal }: CallType) => {
        setCall({ isReceivingCall: true, from, name: callerName, signal });
      }
    );
    socketRef.current.on("callAccepted", (signal: any) => {
      setCallAccepted(true);
      callPeerRef.current.signal(signal);
    });

    // Create an instance of refs to be used in cleanup function
    // Otherwise it will be null when the cleanup function is called and the stream will not be stopped
    const myVideoStream = myVideo.current;
    const userVideoStream = userVideo.current;
    const socketConnection = socketRef.current;

    return () => {
      if (userVideoStream?.srcObject) {
        const stream = userVideoStream.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
      if (myVideoStream?.srcObject) {
        const stream = myVideoStream.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }

      socketConnection.disconnect();
    };
  }, []);

  const stopVideoStream = () => {
    if (userVideo.current?.srcObject) {
      const stream = userVideo.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }
    if (myVideo.current?.srcObject) {
      const stream = myVideo.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const startVideoStream = async () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        if (myVideo.current) myVideo.current.srcObject = currentStream;
      });
  };

  return (
    <div>
      <div className="page-title text-4xl">
        <h2>Live video stream</h2>
      </div>
      <div>
        <button onClick={stopVideoStream}>stop video stream</button>
      </div>
      <div>
        <button onClick={startVideoStream}>start video stream</button>
      </div>
      <div>
        <LiveVideoStreamContext.Provider
          value={{
            call,
            callAccepted,
            myVideo,
            userVideo,
            stream,
            name,
            setName,
            callEnded,
            me,
            callUser,
            leaveCall,
            answerCall,
          }}
        >
          <>
            <VideoPlayer />
            <Notifications />
            <Options />
          </>
        </LiveVideoStreamContext.Provider>
      </div>
    </div>
  );
};

export default LiveVideoStream;
