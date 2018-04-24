import { Permissions, Notifications } from "expo";
import storage from "./storage";

const NOTIFICATION_KEY = "@Udacity:notifications";

const notificationStorage = storage(NOTIFICATION_KEY);

const createNotification = () => ({
  title: "Udacity Flashcards",
  body: `Don't forget to study! 🤓`,
  ios: {
    sound: true
  },
  android: {
    sticky: false,
    vibrate: true,
    priority: "high"
  }
});

const isGranted = () => {
  return Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
    return status === "granted";
  });
};

const setLocalNotification = async () => {
  try {
    const notification = await notificationStorage.getObject();
    if (notification === null && (await isGranted())) {
      Notifications.cancelAllScheduledNotificationsAsync();
      
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(14);
      tomorrow.setMinutes(0);
      
      Notifications.scheduleLocalNotificationAsync(createNotification(), {
        time: tomorrow,
        repeat: "day"
      });
      
      notificationStorage.setObject(true);
    }
  } catch (error) {
    console.error(error);
  }
};

clearLocalNotification = async () => {
  await notificationStorage.clear(NOTIFICATION_KEY);
  await Notifications.cancelAllScheduledNotificationsAsync();
};

refreshLocalNotification = async () => {
  await notificationStorage.clear(NOTIFICATION_KEY);
  await Notifications.cancelAllScheduledNotificationsAsync();
  await setLocalNotification();
};

export default {
  setLocalNotification,
  clearLocalNotification,
  refreshLocalNotification
};
