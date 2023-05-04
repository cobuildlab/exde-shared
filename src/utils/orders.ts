import { Point, Polygon } from '../types/custom';

/**
 * @description - Function to determine whether a point is inside a polygon using the ray casting algorithm. 
 * The function takes two arguments: a point defined by its X and Y coordinates, 
 * and a polygon defined by an array of objects containing the X and Y coordinates of its vertices. 
 * Returns true if the point is inside the polygon, and false otherwise.
 
 * @param {Point} point - Point to cheeck.
 * @param {Polygon} polygon - Polygon.
 * @returns {boolean} - Return true if the point is inside the polygon.
 */
export const checkCoordinatesInPolygon = (
  point: Point,
  polygon: Polygon,
): boolean => {
  const x = point.lng;
  const y = point.lat;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].lng;
    const yi = polygon[i].lat;
    const xj = polygon[j].lng;
    const yj = polygon[j].lat;
    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) {
      inside = !inside;
    }
  }
  return inside;
};
