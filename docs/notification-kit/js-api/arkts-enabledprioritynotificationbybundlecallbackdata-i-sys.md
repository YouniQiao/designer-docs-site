# EnabledPriorityNotificationByBundleCallbackData

应用通知优先级开关状态

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## uid

```TypeScript
readonly uid: int
```

应用的uid。

**Type:** int

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## enableStatus

```TypeScript
readonly enableStatus: notificationManager.PriorityEnableStatus
```

应用通知的优先使能状态。 - DISABLE：不允许设置为优先通知。 - ENABLE_BY_INTELLIGENT：允许经智能识别、用户关键词匹配、应用规则匹配等方式设置为优先通知。 - ENABLE：应用通知均设置为优先通知。

**Type:** notificationManager.PriorityEnableStatus

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## bundle

```TypeScript
readonly bundle: string
```

应用的包名。

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

