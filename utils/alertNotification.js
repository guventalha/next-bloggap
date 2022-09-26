import { notification } from "antd";

export default function alertNotification(
  type,
  message = "Something went wrong"
) {
  // allow just error and success types for now
  // might be configured for info, warning and so on.
  const allowedTypes = ["success", "error", "warning"];
  const messageType = type && allowedTypes.indexOf(type) > -1 ? type : "error";
  notification.config({
    placement: "topRight",
    // bottom: 50,
    duration: 5,
    rtl: false,
  });
  notification[messageType]({
    message: message,
  });
}
