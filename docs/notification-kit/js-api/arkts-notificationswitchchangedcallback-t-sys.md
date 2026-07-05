# NotificationSwitchChangedCallback

```TypeScript
export type NotificationSwitchChangedCallback = (callbackData: NotificationSwitchChangedCallbackData) => void
```

注册由[notificationManager.setNotificationSwitch]../@ohos.notificationManager:notificationManager.setNotificationSwitch接口设置的通知开关状态变化的回调函数类型。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackData | NotificationSwitchChangedCallbackData | Yes | 回调返回由[notificationManager.setNotificationSwitch]../@ohos.notificationManager:notificationManager.setNotificationSwitch接口设置的通知开关状态变化信息。 |

