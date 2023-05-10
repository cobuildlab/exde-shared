import { PartialDeep } from 'type-fest';
import { Driver, Polygon, Tracking, User } from '../types/generate';
import { keyMissingWarn } from './utils';

export class DriverManagement {
  private driver: PartialDeep<Driver> | null;
  private warnParams = keyMissingWarn('Driver');

  constructor(driver: PartialDeep<Driver>) {
    this.driver = driver;
  }

  getDriverUser = (): PartialDeep<User> | undefined => {
    this.warnParams(this.driver?.user, 'user');
    return this.driver?.user;
  };

  getPolygon = (): Polygon[] | undefined => {
    this.warnParams(
      this.driver?.driverPolygonRelation,
      'driverPolygonRelation',
    );
    return this.driver?.driverPolygonRelation;
  };

  getTrakingList = (): Tracking[] | undefined => {
    this.warnParams(
      this.driver?.driverTrackingRelation,
      'driverTrackingRelation',
    );
    return this.driver?.driverTrackingRelation;
  };

  isVerify = (): boolean => {
    this.warnParams(this.driver?.isVerified, 'isVerified');
    return Boolean(this.driver?.isVerified);
  };
}
