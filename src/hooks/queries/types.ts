export type CarStatusItem = {
  id: string;
  carNumber: string;
  status: number;
  vin: string;
  coordinates: {
    longitude: number;
    latitude: number;
  };
};

export type CarsListDto = CarStatusItem[];
