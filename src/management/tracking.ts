import { PartialDeep } from 'type-fest';
import { Location, Tracking, Maybe } from '../types/generate';
import { keyMissingWarn } from './utils';

import { DriverManagement } from './driver';

export class TrackingManagement {
  private tracking: PartialDeep<Tracking> | null;
  private warnParams = keyMissingWarn('Tracking');
  constructor(tracking: PartialDeep<Tracking>) {
    this.tracking = tracking;
  }

  getDriver = (): DriverManagement => {
    // Throw error because the driver Management need it.
    if (!this.tracking?.driver) {
      throw new Error(this.warnParams(this.tracking?.driver, 'driver'));
    }
    return new DriverManagement(this.tracking?.driver);
  };

  isPickUp = (): boolean => {
    return Boolean(this.tracking?.location?.business);
  };

  isRecipent = (): boolean => {
    return Boolean(this.tracking?.location?.recipient);
  };

  location = (): PartialDeep<Location> | undefined | null => {
    return this.tracking?.location;
  };
}
