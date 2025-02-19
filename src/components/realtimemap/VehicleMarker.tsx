"use client";

import {
  AdvancedMarker,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { determineHealth } from "@/helpers/helpers";
import { Icon } from "./Icon";

type coords = {
  lat: number;
  lng: number;
};

type VehicleMarkerProps = {
  onVehicleClick: (id: string) => void;
  id: string;
  name: string;
  vehicleType: string;
  location: coords;
  health: {
    overall: string;
  };
  children: any
};

export const VehicleMarker = (props: VehicleMarkerProps) => {
  const { children, name, vehicleType, location, health, id, onVehicleClick } = props;
  const [markerRef,] = useAdvancedMarkerRef();

  return (
    <div id="VehicleMarker">
      <AdvancedMarker
        ref={markerRef}
        position={{ lat: location.lat, lng: location.lng }}
        title={`Vehicle: ${name}`}
        onClick={() => {
          onVehicleClick(id);
        }}
      >
        <div className="vehicle-icon">
          {children}
          <Icon type={vehicleType || "truck"} fill={determineHealth(health.overall)} />
        </div>
      </AdvancedMarker>
    </div>
  );
};
