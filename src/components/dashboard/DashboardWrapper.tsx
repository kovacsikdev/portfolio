import React, { useEffect, useState } from "react";
import Image from "next/image";
import NewTabIcon from "../../assets/new-tab.svg";
import { shippingData } from "./shipping_data";
import {
  ShippingDataType,
  StatPerShipmentType,
  StatReachedPerShipmentType,
} from "./types";
import WarehouseLayout from "./WarehouseLayout";
import WarehouseTable from "./WarehouseTable";
import WarehouseFilter from "./WarehouseFilter";
import WarehouseTotalCount from "./WarehouseTotalCount";
import WarehouseReachedChart from "./WareHouseReachedChart";
import WarehouseCostChart from "./WarehouseCostChart";
import WarehouseTotalsChart from "./WarehouseTotalsChart";

import "./dashboard.scss";

const DashboardWrapper: React.FC = () => {
  const [data, setData] = useState<ShippingDataType[]>([]);
  const [filteredData, setFilteredData] = useState<ShippingDataType[]>([]);
  const [warehouseBlockSelected, setWarehouseBlockSelected] = useState("");
  const [importanceFilter, setImportanceFilter] = useState("");
  const [shipmentFilter, setShipmentFilter] = useState("");
  const [reachedFilter, setReachedFilter] = useState(-1);
  const [careCallsTotal, setCareCallsTotal] = useState(0);
  const [costTotal, setCostTotal] = useState(0);
  const [priorPurchasesTotal, setPriorPurchasesTotal] = useState(0);
  const [statReachedPerShipment, setStatReachedPerShipment] =
    useState<StatReachedPerShipmentType>({
      Flight: { "1": 0, "0": 0 },
      Ship: { "1": 0, "0": 0 },
      Road: { "1": 0, "0": 0 },
    });
  const [statCostPerShipment, setStatCostPerShipment] =
    useState<StatPerShipmentType>({
      Flight: 0,
      Ship: 0,
      Road: 0,
    });
  const [statTotalPerShipment, setStatTotalPerShipment] =
    useState<StatPerShipmentType>({
      Flight: 0,
      Ship: 0,
      Road: 0,
    });

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data from an API
      return new Promise<ShippingDataType[]>((resolve) => {
        setTimeout(() => resolve(shippingData), 1000);
      });
    };

    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    let filtered = data;
    if (warehouseBlockSelected) {
      filtered = filtered.filter(
        (item) => item.Warehouse_block === warehouseBlockSelected
      );
    }
    if (importanceFilter) {
      filtered = filtered.filter(
        (item) => item.Product_importance === importanceFilter
      );
    }
    if (shipmentFilter) {
      filtered = filtered.filter(
        (item) => item.Mode_of_Shipment === shipmentFilter
      );
    }
    if (reachedFilter >= 0) {
      filtered = filtered.filter(
        (item) => item.Reached_on_time === reachedFilter
      );
    }
    setFilteredData(filtered);
  }, [
    warehouseBlockSelected,
    importanceFilter,
    shipmentFilter,
    reachedFilter,
    data,
  ]);

  useEffect(() => {
    let careCallsNum = 0;
    let costNum = 0;
    let priorPurchaseNum = 0;

    let reachedPerShipment: StatReachedPerShipmentType = {
      Flight: { "1": 0, "0": 0 },
      Ship: { "1": 0, "0": 0 },
      Road: { "1": 0, "0": 0 },
    };
    let costPerShipment: StatPerShipmentType = {
      Flight: 0,
      Ship: 0,
      Road: 0,
    };
    let totalPerShipment: StatPerShipmentType = {
      Flight: 0,
      Ship: 0,
      Road: 0,
    };

    for (let i = 0; i < filteredData.length; i++) {
      careCallsNum += filteredData[i].Customer_care_calls;
      costNum += filteredData[i].Cost_of_the_Product;
      priorPurchaseNum += filteredData[i].Prior_purchases;

      if (filteredData[i].Reached_on_time === 0)
        reachedPerShipment[filteredData[i].Mode_of_Shipment][0]++;
      if (filteredData[i].Reached_on_time === 1)
        reachedPerShipment[filteredData[i].Mode_of_Shipment][1]++;
      costPerShipment[filteredData[i].Mode_of_Shipment] +=
        filteredData[i].Cost_of_the_Product;
      totalPerShipment[filteredData[i].Mode_of_Shipment]++;
    }

    setCareCallsTotal(careCallsNum);
    setCostTotal(costNum);
    setPriorPurchasesTotal(priorPurchaseNum);
    setStatReachedPerShipment(reachedPerShipment);
    setStatCostPerShipment(costPerShipment);
    setStatTotalPerShipment(totalPerShipment);
  }, [filteredData]);

  return (
    <div id="DashboardWrapper">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Warehouse logistics</h1>
        <div>
          Data provided by:{" "}
          <a
            href="https://www.kaggle.com/datasets/nayanack/shipping"
            target="_blank"
          >
            Kaggle <Image src={NewTabIcon} alt="new window" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-6 grid-rows-2 gap-4 mb-4">
        <div className="col-span-6 row-span-1 md:col-span-3 row-span-2 lg:col-span-2">
          <div className="flex flex-col items-center w-full max-w-[600]">
            <div className="w-full">
              <h2 className="font-semibold mb-2">Select a warehouse</h2>
              <WarehouseLayout
                setWarehouseBlockSelected={setWarehouseBlockSelected}
              />
            </div>
            <div className="w-full">
              <h2 className="font-semibold mb-2">Filter</h2>
              <WarehouseFilter
                setImportanceFilter={setImportanceFilter}
                setReachedFilter={setReachedFilter}
                setShipmentFilter={setShipmentFilter}
                importanceFilter={importanceFilter}
                reachedFilter={reachedFilter}
                shipmentFilter={shipmentFilter}
              />
            </div>
          </div>
        </div>
        <div className="col-span-6 row-span-1 md:col-span-3 row-span-2 lg:col-span-4 h-[500]">
          <div className="flex w-full h-[45%]">
            <WarehouseCostChart stats={statCostPerShipment} />
            <WarehouseTotalsChart stats={statTotalPerShipment} />
          </div>
          <div className="w-full h-[45%]">
            <h2 className="font-semibold m-2">Product reached on time</h2>
            <WarehouseReachedChart stats={statReachedPerShipment} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-evenly w-full">
          <WarehouseTotalCount
            title="Customer care calls"
            total={careCallsTotal}
          />
          <WarehouseTotalCount title="Cost" total={costTotal} dollarSign />
          <WarehouseTotalCount
            title="Prior purchases"
            total={priorPurchasesTotal}
          />
        </div>
      </div>
      <div>
        {filteredData.length > 0 && <WarehouseTable tableData={filteredData} />}
      </div>
    </div>
  );
};

export default DashboardWrapper;
