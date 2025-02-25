import React, { useState, useEffect } from "react";
import { ShippingDataType } from "./types";
import { convertNumToCommas } from "@/helpers/helpers";
import { exportToCSV } from "@/helpers/csvExport"; // Import the helper function

type WarehouseTableProps = {
  tableData: ShippingDataType[];
};

const WarehouseTable = (props: WarehouseTableProps) => {
  const { tableData } = props;
  const [data, setData] = useState(tableData);
  const [sorting, setSorting] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  }>({ key: "ID", direction: "ascending" });
  const worker = new Worker(
    new URL("../../helpers/workerSort.js", import.meta.url)
  );

  useEffect(() => {
    sortData(sortConfig.key, false);

    return () => {
      worker.terminate();
    };
  }, [tableData]);

  const sortData = (key: string, fromButton: boolean) => {
    let direction = "ascending";
    if (
      fromButton &&
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    setSorting(true);
    worker.postMessage({
      key,
      data: tableData,
      direction,
    });

    worker.onmessage = (message: any) => {
      setData(message.data);
      setSortConfig({ key, direction });
      setSorting(false);
    };
  };

  const getSortIcon = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) {
      return null;
    }
    return sortConfig.direction === "ascending" ? "▲" : "▼";
  };

  const downloadCSV = () => {
    exportToCSV(data, "warehouse_data.csv");
  };

  return (
    <>
      <div className="flex justify-between">
        <div>Items: {tableData.length}</div>
        <button title="Download data into a csv file" onClick={downloadCSV} className="btn btn-primary">Download CSV</button>
      </div>

      <div className="warehouse-table">
        {sorting && <div className="warehouse-table-sorting">Sorting...</div>}

        <div
          style={{ height: "500px" }}
          className="overflow-y-auto border border-gray-300 rounded-lg w-full border-gray-600 mt-2"
        >
          <table className="min-w-full divide-y divide-gray-200 divide-gray-700">
            <thead className="bg-gray-50 sticky top-0 bg-gray-800">
              <tr>
                <th
                  className="p-4 whitespace-nowrap text-left text-xs font-medium uppercase tracking-wider cursor-pointer text-gray-300"
                  onClick={() => sortData("ID", true)}
                >
                  ID {getSortIcon("ID")}
                </th>
                <th
                  className="p-4 whitespace-nowrap text-left text-xs font-medium uppercase tracking-wider cursor-pointer text-gray-300"
                  onClick={() => sortData("Warehouse_block", true)}
                >
                  Warehouse {getSortIcon("Warehouse_block")}
                </th>
                <th
                  className="p-4 whitespace-nowrap text-left text-xs font-medium uppercase tracking-wider cursor-pointer text-gray-300"
                  onClick={() => sortData("Product_importance", true)}
                >
                  Importance {getSortIcon("Product_importance")}
                </th>
                <th
                  className="p-4 whitespace-nowrap text-left text-xs font-medium uppercase tracking-wider cursor-pointer text-gray-300"
                  onClick={() => sortData("Mode_of_Shipment", true)}
                >
                  Shipment type {getSortIcon("Mode_of_Shipment")}
                </th>
                <th
                  className="p-4 whitespace-nowrap text-left text-xs font-medium uppercase tracking-wider cursor-pointer text-gray-300"
                  onClick={() => sortData("Reached_on_time", true)}
                >
                  On time {getSortIcon("Reached_on_time")}
                </th>
                <th
                  className="p-4 whitespace-nowrap text-left text-xs font-medium uppercase tracking-wider cursor-pointer text-gray-300"
                  onClick={() => sortData("Customer_care_calls", true)}
                >
                  Customer care calls {getSortIcon("Customer_care_calls")}
                </th>
                <th
                  className="p-4 whitespace-nowrap text-left text-xs font-medium uppercase tracking-wider cursor-pointer text-gray-300"
                  onClick={() => sortData("Cost_of_the_Product", true)}
                >
                  Cost {getSortIcon("Cost_of_the_Product")}
                </th>
                <th
                  className="p-4 whitespace-nowrap text-left text-xs font-medium uppercase tracking-wider cursor-pointer text-gray-300"
                  onClick={() => sortData("Prior_purchases", true)}
                >
                  Prior purchases {getSortIcon("Prior_purchases")}
                </th>
              </tr>
            </thead>
            <tbody className="text-white divide-y divide-gray-200 bg-gray-900 divide-gray-700">
              {data.map((user) => (
                <tr
                  key={user.ID}
                  className="hover:bg-gray-100 hover:bg-gray-800"
                >
                  <td className="p-4 py-4800 text-sm">{user.ID}</td>
                  <td className="p-4 py-4800 text-sm">
                    {user.Warehouse_block}
                  </td>
                  <td className="p-4 py-4800 text-sm">
                    {user.Product_importance}
                  </td>
                  <td className="p-4 py-4800 text-sm">
                    {user.Mode_of_Shipment}
                  </td>
                  <td className="p-4 py-4800 text-sm">
                    {user.Reached_on_time === 1 ? "Yes" : "No"}
                  </td>
                  <td className="p-4 py-4800 text-sm">
                    {convertNumToCommas(user.Customer_care_calls)}
                  </td>
                  <td className="p-4 py-4800 text-sm">
                    ${convertNumToCommas(user.Cost_of_the_Product)}
                  </td>
                  <td className="p-4 py-4800 text-sm">
                    {convertNumToCommas(user.Prior_purchases)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default WarehouseTable;
