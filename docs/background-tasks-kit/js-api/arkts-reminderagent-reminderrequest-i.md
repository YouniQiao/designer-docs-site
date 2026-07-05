# ReminderRequest

提醒实例对象，用于设置提醒类型、响铃时长等具体信息。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.reminderAgentManager:reminderAgentManager.ReminderRequest

**System capability:** SystemCapability.Notification.ReminderAgent

## Modules to Import

```TypeScript
import { reminderAgent } from '@kit.BackgroundTasksKit';
```

## wantAgent

```TypeScript
wantAgent?: WantAgent
```

点击通知后需要跳转的目标ability信息。

**Type:** WantAgent

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequest.wantAgent

**System capability:** SystemCapability.Notification.ReminderAgent

## slotType

```TypeScript
slotType?: notification.SlotType
```

指明提醒的slot类型。

**Type:** notification.SlotType

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequest.slotType

**System capability:** SystemCapability.Notification.ReminderAgent

## snoozeContent

```TypeScript
snoozeContent?: string
```

指明延迟提醒时需要显示的内容。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequest.snoozeContent

**System capability:** SystemCapability.Notification.ReminderAgent

## maxScreenWantAgent

```TypeScript
maxScreenWantAgent?: MaxScreenWantAgent
```

提醒到达时跳转的目标包。如果设备正在使用中，则弹出一个通知框。

**Type:** MaxScreenWantAgent

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequest.maxScreenWantAgent

**System capability:** SystemCapability.Notification.ReminderAgent

## actionButton

```TypeScript
actionButton?: [ActionButton?, ActionButton?]
```

弹出的提醒通知栏中显示的按钮（参数可选，支持0/1/2个按钮）。

**Type:** [ActionButton?, ActionButton?]

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequest.actionButton

**System capability:** SystemCapability.Notification.ReminderAgent

## timeInterval

```TypeScript
timeInterval?: number
```

执行延迟提醒间隔（单位：秒），默认0秒。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequest.timeInterval

**System capability:** SystemCapability.Notification.ReminderAgent

## reminderType

```TypeScript
reminderType: ReminderType
```

指明提醒类型。

**Type:** ReminderType

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequest.reminderType

**System capability:** SystemCapability.Notification.ReminderAgent

## notificationId

```TypeScript
notificationId?: number
```

指明提醒使用的通知的id号，相同id号的提醒会覆盖。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequest.notificationId

**System capability:** SystemCapability.Notification.ReminderAgent

## ringDuration

```TypeScript
ringDuration?: number
```

指明响铃时长（单位：秒），默认1秒。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequest.ringDuration

**System capability:** SystemCapability.Notification.ReminderAgent

## title

```TypeScript
title?: string
```

指明提醒标题。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequest.title

**System capability:** SystemCapability.Notification.ReminderAgent

## snoozeTimes

```TypeScript
snoozeTimes?: number
```

指明延迟提醒次数，默认0次。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequest.snoozeTimes

**System capability:** SystemCapability.Notification.ReminderAgent

## expiredContent

```TypeScript
expiredContent?: string
```

指明提醒过期后需要显示的内容。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequest.expiredContent

**System capability:** SystemCapability.Notification.ReminderAgent

## content

```TypeScript
content?: string
```

指明提醒内容。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequest.content

**System capability:** SystemCapability.Notification.ReminderAgent

