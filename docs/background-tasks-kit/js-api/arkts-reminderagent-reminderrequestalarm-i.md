# ReminderRequestAlarm

闹钟实例对象，用于设置提醒的时间。

**Inheritance:** ReminderRequestAlarmextends: ReminderRequest.

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.reminderAgentManager:reminderAgentManager.ReminderRequestAlarm

**System capability:** SystemCapability.Notification.ReminderAgent

## Modules to Import

```TypeScript
import { reminderAgent } from '@kit.BackgroundTasksKit';
```

## hour

```TypeScript
hour: number
```

指明提醒的目标时刻。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequestAlarm.hour

**System capability:** SystemCapability.Notification.ReminderAgent

## daysOfWeek

```TypeScript
daysOfWeek?: Array<number>
```

指明每周哪几天需要重复提醒。范围为周一到周末，对应数字为1到7。

**Type:** Array<number>

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequestAlarm.daysOfWeek

**System capability:** SystemCapability.Notification.ReminderAgent

## minute

```TypeScript
minute: number
```

指明提醒的目标分钟。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** reminderAgentManager.ReminderRequestAlarm.minute

**System capability:** SystemCapability.Notification.ReminderAgent

