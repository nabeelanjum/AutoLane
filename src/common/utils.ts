import {Coordinate} from './types';

export const generateCoordinates = (
  startingCoordinates: Coordinate,
  numPoints = 1000,
  difference = 0.00005,
) => {
  const coordinates: Coordinate[] = [];

  for (let i = 0; i < numPoints; i++) {
    coordinates.push({
      latitude: startingCoordinates.latitude + i * difference,
      longitude: startingCoordinates.longitude + i * difference,
    });
  }

  return coordinates;
};
