import { createContext } from "react";
import { VehicleDataType } from "./types";

export const VehicleDataContext = createContext({
  vehicleData: [] as VehicleDataType[],
  selectedVehicleId: "" as string
});

export const LiveVideoStreamContext = createContext({
  call: {} as any,
  callAccepted: false as boolean,
  myVideo: null as any,
  userVideo: null as any,
  stream: null as any,
  name: "" as string,
  setName: (name: string) => {},
  callEnded: false as boolean,
  me: "" as string,
  callUser: (id: string) => {},
  leaveCall: () => {},
  answerCall: () => {},
});
