export const exportToCSV = (data: any[], filename: string) => {
  const csvData = data.map(row => ({
    ID: row.ID,
    Warehouse_block: row.Warehouse_block,
    Product_importance: row.Product_importance,
    Mode_of_Shipment: row.Mode_of_Shipment,
    Reached_on_time: row.Reached_on_time === 1 ? "Yes" : "No",
    Customer_care_calls: row.Customer_care_calls,
    Cost_of_the_Product: row.Cost_of_the_Product,
    Prior_purchases: row.Prior_purchases
  }));

  const csvContent = [
    ["ID", "Warehouse Block", "Product Importance", "Mode Of Shipment", "Reached On Time", "Customer Care Calls", "Cost Of The Product", "Prior Purchases"],
    ...csvData.map(item => Object.values(item))
  ].map(e => e.join(",")).join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
