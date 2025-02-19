export type ShippingDataType = {
  ID: number;
  Warehouse_block: "A" | "B" | "C" | "D" | "E";
  Mode_of_Shipment: "Flight" | "Ship" | "Road";
  Product_importance: "low" | "medium" | "high";
  Customer_care_calls: number;
  Customer_rating: number;
  Cost_of_the_Product: number;
  Prior_purchases: number;
  Reached_on_time: number;
};

type StatYesOrNo = {
  "1": number,
  "0": number,
}

export type StatReachedPerShipmentType = {
  Flight: StatYesOrNo,
  Ship: StatYesOrNo,
  Road: StatYesOrNo
}

export type StatPerShipmentType = {
  Flight: number;
  Ship: number;
  Road: number;
};