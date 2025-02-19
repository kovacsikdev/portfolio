import React, {useContext} from 'react';
import { LiveVideoStreamContext } from '@/helpers/context';

const Notifications: React.FC = () => {
  const {answerCall, call, callAccepted} = useContext(LiveVideoStreamContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div>
          <h1>{call.name} is calling...</h1>
          <button onClick={answerCall}>Answer</button>
        </div>
      )}
    </>
  );
};

export default Notifications;
