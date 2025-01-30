type coords = {
  lat: number,
  lng: number
}

export type VehicleDataType = {
  id: string,
  name: string,
  vehicleType: string,
  location: coords,
  preDeterminedRoute: coords[],
  health: {
    overall: string,
    engine: string,
    tires: {
      front_right: number,
      front_left: number,
      rear_right: number,
      rear_left: number
    }
  }
}
