# NotificationSwitchChangedCallbackData

描述通知开关状态变化的回调数据。

**Since:** 26.0.0

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## switchName

```TypeScript
readonly switchName: string
```

通知开关名称。取值为：DEAL（交易类通知聚合开关）、LOGISTICS（物流类通知聚合开关）。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## enableStatus

```TypeScript
readonly enableStatus: notificationManager.SwitchState
```

通知开关状态。

**Type:** notificationManager.SwitchState

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## userId

```TypeScript
readonly userId: int
```

用户ID。 取值为所有整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

