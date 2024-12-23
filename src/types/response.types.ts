export interface IOrder {
  provider: string; // Name of the shipping provider (e.g., "Bosta")
  CurrentStatus: {
    state: string; // Current delivery status (e.g., "DELIVERED", "OUT_FOR_DELIVERY")
    timestamp: string; // Timestamp of the current status update in ISO 8601 format
  };
  PromisedDate: string; // Promised delivery date in ISO 8601 format
  TrackingNumber: string; // Unique identifier for the shipment
  TrackingURL: string; // URL for tracking the shipment on the provider's website
  SupportPhoneNumbers: string[]; // Array of phone numbers for customer support
  TransitEvents: ITransitEvent[]; // Array of events related to the shipment's journey
  CreateDate: string; // Timestamp of the order creation in ISO 8601 format
  isEditableShipment: boolean; // Whether the order can be edited (presumably on the provider's side)
  nextWorkingDay?: { // Optional property for next working day delivery information
    dayDate: string; // Date of the next working day in ISO 8601 format
    dayName: string; // Name of the next working day (e.g., "Wednesday")
  };
  isOnlinePaymentFeatureEnabled: boolean; // Whether online payment is enabled for the order
}

export interface ITransitEvent {
  state: string; // State of the shipment during transit (e.g., "TICKET_CREATED", "PACKAGE_RECEIVED")
  timestamp: string; // Timestamp of the transit event in ISO 8601 format
  hub?: string; // Optional property indicating the hub where the package was received or processed (if applicable)
  reason?: string; // Optional property describing the reason for a specific state (e.g., for cancellations)
}