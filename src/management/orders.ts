import { PartialDeep } from 'type-fest';
import { Order, Maybe, Business, Recipient, Driver } from '../types/generate';
import { keyMissingWarn } from './utils';
import { TrackingManagement } from './tracking';

export type OrderDimensionsType = Pick<
  Order,
  'width' | 'height' | 'weight' | 'unit'
>;
export type OrderDeliveryType = {
  date: Pick<Order, 'deliveryDate'>;
  instructions: Maybe<string>;
  time: Pick<Order, 'deliveryTime'>;
};

export type OrderDataType = {
  bussines: PartialDeep<Business>;
  recipient: PartialDeep<Business>;
  driver: PartialDeep<Driver>;
};

export class OrderManagement {
  private order: PartialDeep<Order> | null;
  private warnParams = keyMissingWarn('Order');
  private pickTrackingInstance: TrackingManagement | null;
  private recipentTrackingInstance: TrackingManagement | null;

  constructor(order: PartialDeep<Order>) {
    this.order = order;
    this.pickTrackingInstance = null;
    this.recipentTrackingInstance = null;
  }

  data = (): PartialDeep<Order> | null => {
    this.warnParams(this.order, 'order');
    return this.order;
  };

  getDimensions = (): OrderDimensionsType => {
    this.warnParams(this.order?.weight, 'weight');
    this.warnParams(this.order?.height, 'height');
    this.warnParams(this.order?.width, 'width');
    this.warnParams(this.order?.unit, 'unit');
    return {
      weight: this.order?.weight,
      height: this.order?.height,
      width: this.order?.width,
      unit: this.order?.unit,
    };
  };

  getDeliveryData = (): OrderDeliveryType => {
    this.warnParams(this.order?.deliveryDate, 'deliveryDate');
    this.warnParams(this.order?.deliveryTime, 'deliveryTime');
    return {
      date: this.order?.deliveryDate,
      instructions: this.order?.deliveryInstructions,
      time: this.order?.deliveryTime,
    };
  };

  getStatus = (): Order['status'] | undefined => {
    this.warnParams(this.order?.status, 'status');
    return this.order?.status;
  };

  getTrackingList = (): TrackingManagement[] | undefined => {
    if (!this.order?.orderTrackingRelation) {
      throw new Error(
        this.warnParams(
          this.order?.orderTrackingRelation,
          'orderTrackingRelation',
        ),
      );
    }
    return this.order?.orderTrackingRelation.map(
      (tracking) => new TrackingManagement(tracking),
    );
  };

  getPickUpTracking = (): TrackingManagement | undefined => {
    if (!this.order?.orderTrackingRelation?.length) {
      throw new Error(
        this.warnParams(
          this.order?.orderTrackingRelation,
          'orderTrackingRelation',
        ),
      );
    }
    const pickUp = this.order?.orderTrackingRelation.find(
      (item) => item.location?.business,
    );
    if (!pickUp) {
      return undefined;
    }
    if (!this.pickTrackingInstance) {
      this.pickTrackingInstance = new TrackingManagement(pickUp);
    }
    return this.pickTrackingInstance;
  };

  getRecipentTracking = (): TrackingManagement | undefined => {
    if (!this.order?.orderTrackingRelation?.length) {
      throw new Error(
        this.warnParams(
          this.order?.orderTrackingRelation,
          'orderTrackingRelation',
        ),
      );
    }
    const recipent = this.order?.orderTrackingRelation.find(
      (item) => item.location?.recipient,
    );
    if (!recipent) {
      return undefined;
    }
    if (!this.recipentTrackingInstance) {
      this.recipentTrackingInstance = new TrackingManagement(recipent);
    }
    return this.recipentTrackingInstance;
  };
}
