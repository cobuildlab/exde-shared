export const NOTIFICATION_TYPES = {
  order: {
    REMINDER: {
      title: 'Reminder',
      content: (time: string): string =>
        `You have an order that most be delivered at ${time}`,
    },
    ORDER_ASSIGNMENT: {
      title: 'Order Assignment',
      content: 'A new order was assigned to you',
    },
    NEW_ORDER: {
      title: 'New Order',
      content: 'There is a new order available for pick-up',
    },
    ORDER_PROBLEM: {
      title: 'Order Problem',
      content: 'There has been a problem with the delivery of the order',
    },
  },
  driver: {
    signUp: {
      title: 'New Driver',
      content: 'Driver sign-up waiting for review',
    },
  },
};
