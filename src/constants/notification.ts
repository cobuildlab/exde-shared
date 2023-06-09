export const NOTIFICATION_TYPES = {
  order: {
    reminder: {
      title: 'Reminder',
      content: (time: string) =>
        `You have an order that most be delivered at ${time}`,
    },
    assignment: {
      title: 'Order Assignment',
      content: 'A new order was assigned to you',
    },
    new: {
      title: 'New Order',
      content: 'There is a new order available for pick-up',
    },
    problem: {
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
