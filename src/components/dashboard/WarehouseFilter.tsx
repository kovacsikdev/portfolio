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
        <label htmlFor="filter-importance" className="mr-2 font-bold">
          Importance:
        </label>
        <select
          id="filter-importance"
          className="p-2 text-black border border-gray-300 rounded-lg w-full"
          value={importanceFilter}
          onChange={(e) => setImportanceFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className="flex flex-col mx-2 w-full">
        <label htmlFor="filter-shipment" className="mr-2 font-bold">
          Shipment:
        </label>
        <select
          id="filter-shipment"
          className="p-2 text-black border border-gray-300 rounded-lg w-full"
          value={shipmentFilter}
          onChange={(e) => setShipmentFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Flight">Flight</option>
          <option value="Ship">Ship</option>
          <option value="Road">Road</option>
        </select>
      </div>
      <div className="flex flex-col mx-2 w-full">
        <label htmlFor="filter-reached" className="mr-2 font-bold">
          On time:
        </label>
        <select
          id="filter-reached"
          className="p-2 text-black border border-gray-300 rounded-lg w-full"
          value={reachedFilter}
          onChange={(e) => setReachedFilter(Number(e.target.value))}
        >
          <option value="-1">All</option>
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>
      </div>
    </div>
  );
};

export default WarehouseFilter;
