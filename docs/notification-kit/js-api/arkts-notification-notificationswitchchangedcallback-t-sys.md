# NotificationSwitchChangedCallback (System API)

```TypeScript
export type NotificationSwitchChangedCallback = (callbackData: NotificationSwitchChangedCallbackData) => void
```

Register the callback function type for notification switch state changes set by the interface of [notificationManager.setNotificationSwitch](arkts-notification-notificationmanager-setnotificationswitch-f-sys.md#setnotificationswitch).

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-unnamed-export type NotificationSwitchChangedCallback = (callbackData: NotificationSwitchChangedCallbackData) => void--><!--Device-unnamed-export type NotificationSwitchChangedCallback = (callbackData: NotificationSwitchChangedCallbackData) => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackData | [NotificationSwitchChangedCallbackData](arkts-notification-notificationsubscriber-notificationswitchchangedcallbackdata-i-sys.md) | Yes | The callback returns information about the status change of the notification switch set by the interface of [notificationManager.setNotificationSwitch](arkts-notification-notificationmanager-setnotificationswitch-f-sys.md#setnotificationswitch).  |

