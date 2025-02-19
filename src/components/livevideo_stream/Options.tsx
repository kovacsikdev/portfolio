import React, { useState, useContext, useEffect } from "react";
import { LiveVideoStreamContext } from "@/helpers/context";

const Options: React.FC = () => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(LiveVideoStreamContext);
  const [idToCall, setIdToCall] = useState("");

  useEffect(() => {
    console.log('me', me);
  }, [me]);
  
  return (
    <div>
      <h2>Options</h2>
      <div>
        <div>
          <h2>Username</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button>Copy to clipboard</button>
        </div>
        <div>
          <h2>Make a call</h2>
          <input
            type="text"
            placeholder="ID to call"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          {callAccepted && !callEnded ? (
            <button onClick={leaveCall}>Hang Up</button>
          ) : (
            <button onClick={() => callUser(idToCall)}>Call</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Options;
