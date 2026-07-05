# BadgeEnabledChangedCallback

```TypeScript
export type BadgeEnabledChangedCallback = (data: EnabledNotificationCallbackData) => void
```

type BadgeEnabledChangedCallback = (data: EnabledNotificationCallbackData) => void 注册应用角标使能状态变化的回调函数类型。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | EnabledNotificationCallbackData | Yes | 回调返回监听到的角标使能状态信息。 |

