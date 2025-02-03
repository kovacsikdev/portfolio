"use client";

import React, { useState } from "react";
import Image from "next/image";
import { APIProvider } from "@vis.gl/react-google-maps";
import { VehicleDataContext } from "@/helpers/context";
import { useVehicleData } from "@/helpers/customHooks";
import InfoIcon from "../../assets/info-icon.svg";

import {
  VehicleMap,
  SelectedVehicleDetails,
  VehicleVideo,
  InfoBox,
} from "@/components/realtimemap";
import { DevInfo } from "@/components";
import "./page.css";

const RealTimeMap = () => {
  const { vehicleData, clientCount, socketError } = useVehicleData();
  const [selectedVehicleId, setSelectedVehicleId] = useState("");
  const [displayInfoBox, setDisplayInfoBox] = useState(false);
  const [infoBoxType, setInfoBoxType] = useState("");
  const [displayDevNote, setDisplayDevNote] = useState(false);

  return (
    <>
      {socketError && (
        <div className="socket-error">
          There was an error connecting to the server. Please refresh to try
          again
        </div>
      )}
      <div className="page-title text-4xl">
        <h2>
          Real Time Map
        </h2>
        <button
            onClick={() => {
              setDisplayDevNote(true);
            }}
          >
            <Image
              style={{ margin: "0 0.5rem" }}
              src={InfoIcon}
              alt="information icon"
            />
          </button>
          {displayDevNote && (
            <DevInfo
              toggle={() => {
                setDisplayDevNote(false);
              }}
            >
              Real Time Map built in React and Typescript. Backend server and
              bots built in Node.js. Network communication between bots, server
              and client through Websockets
            </DevInfo>
          )}
      </div>
      <VehicleDataContext.Provider
        value={{
          vehicleData,
          selectedVehicleId,
        }}
      >
        <div className="map-wrapper">
          <div className="map-tile">
            {displayInfoBox && (
              <InfoBox
                type={infoBoxType}
                hideInfoBox={() => setDisplayInfoBox(false)}
                clientCount={clientCount}
              />
            )}
            <SelectedVehicleDetails />
            <APIProvider
              apiKey={"AIzaSyBVtns2y9oxyCzhfoGJXztrI6t6KJ9MDkE"}
              libraries={["marker"]}
            >
              <div className="map-tile-header">
                Live vehicle locations
                <button
                  id="btn-info-box-locations"
                  onClick={() => {
                    setInfoBoxType("locations");
                    setDisplayInfoBox(true);
                  }}
                >
                  <Image src={InfoIcon} alt="information icon" />
                </button>
              </div>
              <VehicleMap setSelectedVehicleId={setSelectedVehicleId} />
            </APIProvider>
          </div>
          <div className="selected-vehicle-video selected-vehicle-tile map-tile">
            <div className="map-tile-header">
              Vehicle cam video feed
              <button
                id="btn-info-box-video"
                onClick={() => {
                  setInfoBoxType("video");
                  setDisplayInfoBox(true);
                }}
              >
                <Image src={InfoIcon} alt="information icon" />
              </button>
            </div>
            <VehicleVideo />
          </div>
        </div>
      </VehicleDataContext.Provider>
    </>
  );
};

export default RealTimeMap;
