# NotificationSwitchChangedCallback (System API)

```TypeScript
export type NotificationSwitchChangedCallback = (callbackData: NotificationSwitchChangedCallbackData) => void
```

Registers the callback for notification switch state changes set by  
[notificationManager.setNotificationSwitch]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ API.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-unnamed-export type NotificationSwitchChangedCallback = (callbackData: NotificationSwitchChangedCallbackData) => void--><!--Device-unnamed-export type NotificationSwitchChangedCallback = (callbackData: NotificationSwitchChangedCallbackData) => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackData | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Callback that returns the notification switch state change information set by [notificationManager.setNotificationSwitch]\_\_\_JSDOC\_LINK\_USD\_0\_\_\_ API.  |

