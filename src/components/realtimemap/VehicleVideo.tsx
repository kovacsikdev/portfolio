import { useContext, useEffect, useState, useRef } from "react";
import { VehicleDataContext } from "@/helpers/context";
import { VehicleDataType } from "@/helpers/types";
import { realTimeVideoMap } from "@/helpers/helpers";
import "./VehicleVideo.css";

export const VehicleVideo = () => {
  const videoRef: any = useRef(null);
  const { vehicleData, selectedVehicleId } = useContext(VehicleDataContext);
  const [selectedVehicleData, setSelectedVehicleData] = useState<any>({});
  const [vehicleVideoSrc, setVehicleVideoSrc] = useState("");

  useEffect(() => {
    if (selectedVehicleId) {
      const selectedVehicle = vehicleData.find(
        (item: VehicleDataType) => item.id === selectedVehicleId
      );
      setSelectedVehicleData(selectedVehicle || {});
    } else {
      setSelectedVehicleData({});
    }
  }, [vehicleData, selectedVehicleId]);

  useEffect(() => {
    if (selectedVehicleData.id) {
      const video = realTimeVideoMap(selectedVehicleData.id);
      if (selectedVehicleData?.health?.overall === "good") {
        setVehicleVideoSrc(`driving_${video?.driving || "1"}`)
      } else {
        setVehicleVideoSrc(`stopped_${video?.stopped || "1"}`)
      }
    } else {
      setVehicleVideoSrc("")
    }
  }, [selectedVehicleData, vehicleVideoSrc])

  useEffect(() => {
    if (videoRef.current) videoRef.current.load();
  }, [vehicleVideoSrc])

  return (
    <div className="vehicle-video">
      {vehicleVideoSrc && (
        <video ref={videoRef} autoPlay loop muted playsInline>
          <source src={`/${vehicleVideoSrc}.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {!vehicleVideoSrc && (
        <div>Select a vehicle to view vehicle video feed</div>
      )}
    </div>
  );
};
