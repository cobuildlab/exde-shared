import { describe, expect, test } from '@jest/globals';
import { checkCoordinatesInPolygon } from '../utils/orders';
import * as values from './constants';

describe('Line item calcs', () => {
  test('Coordinates in test', () => {
    expect(checkCoordinatesInPolygon(values.pointIn, values.polygon)).toBe(
      true,
    );
  });

  test('Coordinates out test', () => {
    expect(checkCoordinatesInPolygon(values.pointOut, values.polygon)).toBe(
      false,
    );
  });
});
