# NotificationSwitchChangedCallback (System API)

```TypeScript
export type NotificationSwitchChangedCallback = (callbackData: NotificationSwitchChangedCallbackData) => void
```

Register the callback function type for notification switch state changes set by the interface of [notificationManager.setNotificationSwitch](arkts-notification-setnotificationswitch-f-sys.md#setnotificationswitch-1).

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackData | NotificationSwitchChangedCallbackData | Yes | The callback returns information about the statuschange of the notification switch set by the interface of[notificationManager.setNotificationSwitch](arkts-notification-setnotificationswitch-f-sys.md#setnotificationswitch-1). |

