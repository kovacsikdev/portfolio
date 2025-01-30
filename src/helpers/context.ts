import { createContext } from "react";
import { VehicleDataType } from "./types";

export const VehicleDataContext = createContext({
  vehicleData: [] as VehicleDataType[],
  selectedVehicleId: "" as string
});
