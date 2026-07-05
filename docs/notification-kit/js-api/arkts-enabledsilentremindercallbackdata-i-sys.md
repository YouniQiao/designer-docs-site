# EnabledSilentReminderCallbackData

应用通知静默提醒使能状态变化。

**Since:** 24

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## uid

```TypeScript
readonly uid: int
```

应用的uid。

**Type:** int

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## enableStatus

```TypeScript
readonly enableStatus: notificationManager.SwitchState
```

应用通知的静默提醒开关状态。 - USER_MODIFIED_OFF：用户设置的关闭状态。 - USER_MODIFIED_ON：用户设置的开启状态。 - SYSTEM_DEFAULT_OFF：用户设置前的初始关闭状态。 - SYSTEM_DEFAULT_ON：用户设置前的初始开启状态。

**Type:** notificationManager.SwitchState

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## bundle

```TypeScript
readonly bundle: string
```

应用的包名。

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

