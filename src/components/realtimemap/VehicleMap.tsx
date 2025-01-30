"use client";

import React, { useState, useEffect, useContext, useRef } from "react";
import { Map, useMap } from "@vis.gl/react-google-maps";
import { VehicleDataType } from "@/helpers/types";
import { VehicleDataContext } from "@/helpers/context";
import { VehicleMarker } from "./VehicleMarker";
import "./VehicleMap.css";

type VehicleMapProps = {
  setSelectedVehicleId: (id: string) => void;
};

const VehicleMap = (props: VehicleMapProps) => {
  const { setSelectedVehicleId } = props;
  const map = useMap();
  const { vehicleData, selectedVehicleId } = useContext(VehicleDataContext);

  const [selectedVehicleIdClicked, setSelectedVehicleIdClicked] = useState("");
  const [displayVehicleName, setDisplayVehicleName] = useState(false);
  const [followSelectedVehicle, setFollowSelectedVehicle] = useState(false);
  const vehiclePathRef: any = useRef(null);

  const centerPos = {
    lat: 47.6,
    lng: -122.33,
  };

  const onVehicleClick = (vehicleId: string) => {
    if (map && vehicleId) {
      const selectedVehicle = vehicleData.filter((item: VehicleDataType) => {
        return item.id === vehicleId;
      });

      if (vehiclePathRef.current) {
        vehiclePathRef.current.setMap(null);
      }

      map.panTo({
        lat: selectedVehicle[0].location.lat,
        lng: selectedVehicle[0].location.lng,
      });
      map.setZoom(16);

      vehiclePathRef.current = new google.maps.Polyline({
        path: selectedVehicle[0].preDeterminedRoute,
        geodesic: true,
        strokeColor: "#0039e6",
        strokeOpacity: 1.0,
        strokeWeight: 4,
      });
      vehiclePathRef.current.setMap(map);

      setSelectedVehicleId(vehicleId);
      setSelectedVehicleIdClicked(vehicleId);
      setFollowSelectedVehicle(true);
      setDisplayVehicleName(true);
    }
  };

  useEffect(() => {
    onVehicleClick(selectedVehicleId);
  }, [selectedVehicleId]);

  useEffect(() => {
    if (followSelectedVehicle) {
      const findSelectedVehicle = vehicleData.find(
        (vehicle: any) => vehicle.id === selectedVehicleIdClicked
      );
      if (map && findSelectedVehicle) {
        map.panTo({
          lat: findSelectedVehicle.location.lat,
          lng: findSelectedVehicle.location.lng,
        });
      }
    }
  }, [followSelectedVehicle, selectedVehicleIdClicked, vehicleData]);

  useEffect(() => {
    // Add listener to close the InfoWindow if the map is clicked anywhere
    if (map) {
      map.addListener("click", () => {
        if (vehiclePathRef.current) vehiclePathRef.current.setMap(null);
        setFollowSelectedVehicle(false);
        setDisplayVehicleName(false);
        setSelectedVehicleId("");
      });
      map.addListener("zoom_changed", () => {
        setFollowSelectedVehicle(false);
      });
      map.addListener("drag", () => {
        setFollowSelectedVehicle(false);
      });
    }
  }, [map]);

  return (
    <>
      {/* <SelectedVehicleDetails /> */}
      <Map
        mapId={"d76d2a63e869bc81"}
        defaultZoom={12}
        defaultCenter={{ lat: centerPos.lat, lng: centerPos.lng }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        zoomControl={true}
        minZoom={10}
        maxZoom={16}
        restriction={{
          latLngBounds: {
            north: 49.1,
            south: 46.1,
            east: -120.33,
            west: -124.33,
          },
        }}
      >
        {vehicleData.map((value: VehicleDataType) => {
          return (
            <VehicleMarker
              key={value.id}
              name={value.name}
              vehicleType={value.vehicleType}
              location={value.location}
              health={value.health}
              id={value.id}
              onVehicleClick={onVehicleClick}
            >
              {displayVehicleName && selectedVehicleIdClicked === value.id && (
                <div className="vehicle-icon-name">{value.name}</div>
              )}
            </VehicleMarker>
          );
        })}
      </Map>
    </>
  );
};

export default VehicleMap;
