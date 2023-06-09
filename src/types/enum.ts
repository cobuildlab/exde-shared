// Settings.

export enum MobileAppSettings {
  REMINDER = 'REMINDER',
  NEW_ORDER = 'NEW_ORDER',
  ORDER_ASSIGNMENT = 'ORDER_ASSIGNMENT',
  ORDER_PROBLEM = 'ORDER_PROBLEM',
}

export type MobileAppSettingsType = keyof typeof MobileAppSettings;
