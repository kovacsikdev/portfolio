import { useContext, useEffect, useState } from "react";
import { VehicleDataContext } from "@/helpers/context";
import { VehicleDataType } from "@/helpers/types";
import { determineEngineHealth, determineTireHealth } from "@/helpers/helpers";
import "./SelectedVehicleDetails.css";

export const SelectedVehicleDetails = () => {
  const { vehicleData, selectedVehicleId } = useContext(VehicleDataContext);
  const [selectedVehicleData, setSelectedVehicleData] = useState<any>({});

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

  return (
    <div
      className={`selected-vehicle-details ${
        selectedVehicleData.id ? "selected-vehicle-details-visible" : ""
      }`}
    >
      <svg viewBox="-30 -10 420 800" style={{ height: "100%" }} version="1.0">
        <g id="body">
          <path
            id="path184"
            d="m178.73 782.98c-113.07 2.362-130.4-17.92-147.11-21.261-16.705-38.776-19.877-365.73-9.855-392.46 7.493-60.54-4.936-70.565-8.687-143.53-7.14-85.213 9.815-37.829-4.439-124.48 21.658-90.216-19.136-92.053 168.52-100.63 172.21 2.401 147.96 10.415 169.61 100.63-14.254 86.652 2.701 39.268-4.439 124.48-3.751 72.961-16.18 82.986-8.687 143.53 10.022 26.727 6.85 353.68-9.855 392.46-26.153 15.153-95.459 21.261-145.07 21.261z"
            stroke="#000"
            strokeWidth="1pt"
            fill="#54585f"
          />
          <path
            id="path272"
            d="m41.537 281.88s21.534 82.442 21.534 82.442 0 154.58-3.0758 157.15c-3.0771 2.5759-27.686 46.372-27.686 46.372s6.1517-280.81 9.2288-285.97z"
            fill="none"
          />
          <path
            id="path274"
            d="m318.84 276.88s-21.534 82.442-21.534 82.442 0 154.58 3.0758 157.15c3.0771 2.5759 27.686 46.372 27.686 46.372s-6.1517-280.81-9.2288-285.97z"
            fill="none"
          />
          <path
            id="path230"
            d="m37.198 44.521c-11.667 18.667-10.816 196.22 7.851 210.22 18.03-14.851 122.48-28.646 142.34-27.364 20.288-1.492 99.694 8.055 124.09 22.697 6.577 2.13 19.727-205.55 1.059-219.55-58.34-16.344-252.01-16.344-275.34 13.99z"
            strokeOpacity=".45912"
            stroke="#000"
            strokeWidth="1pt"
            fill="none"
          />
          <path
            id="path275"
            d="m41.764 257.39s65.53-26.897 138.64-27.585c65.833-0.64088 95.565 9.623 135.61 25.019-4.8534 48.756-9.7078 94.943-21.843 110.34-111.64-28.23-118.92-28.23-230.56 0-2.43-15.39-24.273-105.21-21.846-107.77z"
            fill="none"
          />
          <path
            id="path185"
            d="m45.51 260.2s63.783-24.762 134.95-25.395c64.078-0.59 93.017 8.859 132 23.033-4.724 44.885-9.449 87.405-21.261 101.58-108.67-25.986-115.75-25.985-224.42 0.001-2.362-14.174-23.623-96.856-21.261-99.218z"
            fillOpacity=".70440"
            stroke="#000"
            strokeWidth="1pt"
          />
          <path
            id="path270"
            d="m75.697 531.43c-12.369 59.368-22.263 173.16-22.263 173.16 19.79 17.316 121.21 24.737 123.69 24.737 7.4212 0 108.84-7.4212 126.16-32.158 0-14.842-9.8956-121.21-19.79-168.21-86.579 12.368-202.84 7.4212-207.79 2.4734z"
            fill="none"
          />
          <path
            id="path188"
            d="m80.945 536.59c-11.812 56.695-21.261 165.36-21.261 165.36 18.899 16.536 115.75 23.623 118.12 23.623 7.087 0 103.94-7.087 120.48-30.71 0-14.174-9.45-115.75-18.899-160.64-82.681 11.811-193.71 7.087-198.44 2.362z"
            fillOpacity=".78616"
            stroke="#000"
            strokeWidth="1pt"
          />
          <path
            id="path189"
            d="m321.9 279.09l28.348 2.362s14.174 14.174 4.725 21.261c-9.45 7.087-33.073-2.362-33.073-2.362v-21.261z"
            strokeOpacity=".55346"
            stroke="#000"
            strokeWidth="1.25"
          />
          <path
            id="path190"
            d="m36.946 283.82l-28.348 2.362s-14.174 14.174-4.725 21.261c9.45 7.087 33.073-2.362 33.073-2.362v-21.261z"
            strokeOpacity=".54717"
            stroke="#000"
            strokeWidth="1pt"
          />
          <path
            id="path304"
            d="m52.582 17.025c-9.023 1.573-19.32 18.998-14.584 21.902 11.281-5.689 33.327-13.506 54.984-15.684 4.286-2.3 10.138-9.356 10.358-10.929-14.886-0.847-40.915 2.775-50.758 4.711z"
            strokeOpacity=".25157"
            fillOpacity=".56604"
            stroke="#000"
            strokeWidth="1.082pt"
          />
          <path
            id="path306"
            d="m298.7 12.115c9.0231 1.5731 19.32 14.633 14.584 17.537-11.28-5.6886-33.327-7.5051-54.984-9.6837-4.2855-2.2999-10.134-10.992-10.36-12.565 14.888-0.84719 40.917 2.7754 50.76 4.7115z"
            strokeOpacity=".25157"
            fillOpacity=".56604"
            stroke="#000"
            strokeWidth="1.082pt"
          />
          <path
            id="path307"
            d="m112.29 10.38c37.098-6.547 99.837-6.002 126.57-2.729"
            strokeOpacity=".37107"
            stroke="#000"
            strokeWidth="1pt"
            fill="none"
          />
          <path
            id="path308"
            d="m112.29 13.108c37.098-6.547 99.837-6.002 126.57-2.729"
            strokeOpacity=".37107"
            stroke="#000"
            strokeWidth="1pt"
            fill="none"
          />
          <path
            id="path309"
            d="m112.29 16.381c37.098-6.547 99.837-6.002 126.57-2.729"
            strokeOpacity=".37107"
            stroke="#000"
            strokeWidth="1pt"
            fill="none"
          />
          <path
            id="path310"
            d="m112.29 20.2c37.098-6.001 98.2-4.911 124.39-3.275"
            strokeOpacity=".37107"
            stroke="#000"
            strokeWidth="1pt"
            fill="none"
          />
          <path
            id="path186"
            d="m43.148 295.63s16.536 75.595 16.536 75.595 0 141.74-2.362 144.1c-2.363 2.362-21.261 42.521-21.261 42.521s4.724-257.49 7.087-262.22z"
            fillOpacity=".68554"
            stroke="#000"
            strokeWidth="1pt"
          />
          <path
            id="path211"
            d="m36.35 310.53c-2.333 25.667-14.991 443.45 4.666 443.34 69.856 26.467 221.62 23.584 278.52-7.0003 17.53-0.0711 6.999-417.68 4.666-443.34"
            stroke="#000"
            strokeWidth="1pt"
            fill="none"
          />
          <path
            id="path187"
            d="m317.18 290.91s-16.536 75.595-16.536 75.595 0 141.74 2.362 144.1c2.363 2.362 21.261 42.521 21.261 42.521s-4.724-257.49-7.087-262.22z"
            fillOpacity=".74843"
            stroke="#000"
            strokeWidth="1pt"
          />
        </g>
        <g id="tires">
          <rect
            id="rear-left"
            rx="8"
            ry="8"
            height="100"
            width="40"
            y="625"
            x="15"
            stroke="#000"
            strokeWidth="1pt"
            fill={
              selectedVehicleData?.health
                ? determineTireHealth(
                    selectedVehicleData?.health?.tires?.rear_left
                  )
                : "none"
            }
          />
          <rect
            id="rear-right"
            rx="8"
            ry="8"
            height="100"
            width="40"
            y="625"
            x="300"
            stroke="#000"
            strokeWidth="1pt"
            fill={
              selectedVehicleData?.health
                ? determineTireHealth(
                    selectedVehicleData?.health?.tires?.rear_right
                  )
                : "none"
            }
          />
          <rect
            id="front-right"
            rx="8"
            ry="8"
            height="100"
            width="40"
            y="100"
            x="310"
            stroke="#000"
            strokeWidth="1pt"
            fill={
              selectedVehicleData?.health
                ? determineTireHealth(
                    selectedVehicleData?.health?.tires?.front_right
                  )
                : "none"
            }
          />
          <rect
            id="front-left"
            rx="8"
            ry="8"
            height="100"
            width="40"
            y="100"
            x="10"
            stroke="#000"
            strokeWidth="1pt"
            fill={
              selectedVehicleData?.health
                ? determineTireHealth(
                    selectedVehicleData?.health?.tires?.front_left
                  )
                : "none"
            }
          />
          <text
            id="rear-left-text"
            y="610"
            x="-25"
            fill="#fff"
            fontSize={40}
            width={360}
          >
            {selectedVehicleData?.health?.tires?.rear_left || 0} psi
          </text>
          <text
            id="rear-right-text"
            y="610"
            x="275"
            fill="#fff"
            fontSize={40}
            width={360}
          >
            {selectedVehicleData?.health?.tires?.rear_right || 0} psi
          </text>
          <text
            id="front-right-text"
            y="240"
            x="275"
            fill="#fff"
            fontSize={40}
            width={360}
          >
            {selectedVehicleData?.health?.tires?.front_right || 0} psi
          </text>
          <text
            id="front-left-text"
            y="240"
            x="-25"
            fill="#fff"
            fontSize={40}
            width={360}
          >
            {selectedVehicleData?.health?.tires?.front_left || 0} psi
          </text>
        </g>
        <g id="engine">
          <rect
            width="190"
            height="100"
            x="85"
            y="50"
            rx="20"
            ry="20"
            stroke="#000"
            fill={
              selectedVehicleData?.health
                ? determineEngineHealth(selectedVehicleData?.health?.engine)
                : "none"
            }
          />
          <text y="95" x="180" fill="#fff" fontSize={40} textAnchor="middle">
            {selectedVehicleData?.health?.engine || ""}
          </text>
          <text y="135" x="180" fill="#fff" fontSize={30} textAnchor="middle">
            (engine)
          </text>
        </g>
      </svg>
    </div>
  );
};
