# EnabledSilentReminderChangedCallback

```TypeScript
export type EnabledSilentReminderChangedCallback = (callbackData: EnabledSilentReminderCallbackData) => void
```

注册应用通知静默提醒使能状态变化的回调函数类型。 type EnabledSilentReminderChangedCallback = (callbackData: EnabledSilentReminderCallbackData) => void

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackData | EnabledSilentReminderCallbackData | Yes | 回调返回监听到的静默提醒使能状态信息。 |

