import { PartialDeep } from 'type-fest';
import {
  Location,
  Tracking,
  Business,
  Maybe,
  Recipient,
} from '../types/generate';
import { keyMissingWarn } from './utils';

import { DriverManagement } from './driver';

export type TrackingDataReturnType = {
  bussines?: Maybe<PartialDeep<Business>>;
  recipent?: Maybe<PartialDeep<Recipient>>;
};
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

  getTrackingInfo = (): TrackingDataReturnType => {
    return {
      bussines: this.tracking?.location?.business,
      recipent: this.tracking?.location?.recipient,
    };
  };

  location = (): Maybe<PartialDeep<Location>> => {
    return this.tracking?.location;
  };
}
