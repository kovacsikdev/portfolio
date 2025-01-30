import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export const useVehicleData = () => {
  const [vehicleData, setVehicleData] = useState<any>([]);
  const [clientCount, setClientCount] = useState(1);
  const [socketError, setSocketError] = useState(undefined);

  const test: any = useRef([]);

  let socket: any;
  useEffect(() => {
    const env = process.env.NODE_ENV;
    console.log('env', env)
    socket = io(
      env === "development"
        ? "http://localhost:3000"
        : "https://kovacsik-real-time-map-432502eed912.herokuapp.com/",
      {
        transports: ["websocket"],
      }
    );

    socket.on("connect", () => {
      setSocketError(undefined);
      console.log("connected");
    });

    socket.on("disconnect", (data: any) => {
      socket.disconnect();
      console.log("disconnect", data);
    });

    socket.on("client_count", (data: any) => {
      setClientCount(data)
    })

    // socket to get vehicle data from server
    socket.on("vehicle_data", (data: any) => {
      let addNewVehicle = true;
      const vehicle = JSON.parse(data)[0];

      test.current = test.current.map((el: any) => {
        if (el.id === vehicle.id) {
          addNewVehicle = false;
          // return {...el, vehicle}
          return { ...vehicle };
        } else {
          return el;
        }
      });

      if (addNewVehicle) test.current.push(vehicle);

      setVehicleData(test.current);
    });

    socket.on("error", (error: any) => {
      setSocketError(error)
      console.log("SOCKET ERROR", error);
    });

    socket.on("connect_error", (error: any) => {
      setSocketError(error)
      if (socket.active) {
        // temporary failure, the socket will automatically try to reconnect
        console.log("socket active error", error);
        socket.disconnect();
      } else {
        // the connection was denied by the server
        // in that case, `socket.connect()` must be manually called in order to reconnect
        console.log(error.message);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return {vehicleData, clientCount, socketError}
};
