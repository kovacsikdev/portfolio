import { useContext, useEffect, useState, useRef } from "react";
import { VehicleDataContext } from "@/helpers/context";
import { VehicleDataType } from "@/helpers/types";
import { realTimeVideoMap } from "@/helpers/helpers";
import "./VehicleVideo.css";

export const VehicleVideo = () => {
  const env = process.env.NODE_ENV;
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
      const url =
        env === "development"
          ? "/portfolio/realtime_videos/"
          : "https://github.com/kovacsikdev/portfolio/raw/refs/heads/main/out/realtime_videos/";
      const video = realTimeVideoMap(selectedVehicleData.id);
      if (selectedVehicleData?.health?.overall === "good") {
        setVehicleVideoSrc(`${url}driving_${video?.driving || "1"}`);
      } else {
        setVehicleVideoSrc(`${url}stopped_${video?.stopped || "1"}`);
      }
    } else {
      setVehicleVideoSrc("");
    }
  }, [selectedVehicleData, vehicleVideoSrc]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [vehicleVideoSrc]);

  return (
    <div className="vehicle-video">
      {vehicleVideoSrc && (
        <>
          <div className="loading-spinner"></div>
          <video ref={videoRef} autoPlay loop muted playsInline>
            <source src={`${vehicleVideoSrc}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      )}
      {!vehicleVideoSrc && (
        <div>Select a vehicle to view vehicle video feed</div>
      )}
    </div>
  );
};
