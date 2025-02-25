import React, { useState } from "react";

type WarehouseFilterProps = {
  setImportanceFilter: React.Dispatch<React.SetStateAction<string>>;
  setShipmentFilter: React.Dispatch<React.SetStateAction<string>>;
  setReachedFilter: React.Dispatch<React.SetStateAction<number>>;
  importanceFilter: string;
  shipmentFilter: string;
  reachedFilter: number;
};

const WarehouseFilter = (props: WarehouseFilterProps) => {
  const {
    setImportanceFilter,
    setShipmentFilter,
    setReachedFilter,
    importanceFilter,
    shipmentFilter,
    reachedFilter,
  } = props;

  return (
    <div className="flex w-full min-w-[150]">
      <div className="flex flex-col mx-2 w-full">
        <div>Importance</div>
        <div className="flex flex-col">
          <label className="relative inline-flex items-center cursor-pointer mb-2">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={importanceFilter === "high"}
              onChange={() =>
                setImportanceFilter(importanceFilter === "high" ? "" : "high")
              }
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="ml-3 text-sm font-medium">High</span>
          </label>
          <label className="relative inline-flex items-center cursor-pointer mb-2">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={importanceFilter === "medium"}
              onChange={() =>
                setImportanceFilter(
                  importanceFilter === "medium" ? "" : "medium"
                )
              }
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="ml-3 text-sm font-medium">Medium</span>
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={importanceFilter === "low"}
              onChange={() =>
                setImportanceFilter(importanceFilter === "low" ? "" : "low")
              }
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="ml-3 text-sm font-medium">Low</span>
          </label>
        </div>
      </div>
      <div className="flex flex-col mx-2 w-full">
        <div>Shipment</div>
        <div className="flex flex-col">
          <label className="relative inline-flex items-center cursor-pointer mb-2">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={shipmentFilter === "Flight"}
              onChange={() =>
                setShipmentFilter(shipmentFilter === "Flight" ? "" : "Flight")
              }
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="ml-3 text-sm font-medium">Flight</span>
          </label>
          <label className="relative inline-flex items-center cursor-pointer mb-2">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={shipmentFilter === "Ship"}
              onChange={() =>
                setShipmentFilter(shipmentFilter === "Ship" ? "" : "Ship")
              }
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="ml-3 text-sm font-medium">Ship</span>
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={shipmentFilter === "Road"}
              onChange={() =>
                setShipmentFilter(shipmentFilter === "Road" ? "" : "Road")
              }
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="ml-3 text-sm font-medium">Road</span>
          </label>
        </div>
      </div>
      <div className="flex flex-col mx-2 w-full">
      <div>On time</div>
        <div className="flex flex-col">
          <label className="relative inline-flex items-center cursor-pointer mb-2">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={reachedFilter === 0}
              onChange={() =>
                setReachedFilter(reachedFilter === 0 ? -1 : 0)
              }
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="ml-3 text-sm font-medium">No</span>
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={reachedFilter === 1}
              onChange={() =>
                setReachedFilter(reachedFilter === 1 ? -1 : 1)
              }
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="ml-3 text-sm font-medium">Yes</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default WarehouseFilter;
