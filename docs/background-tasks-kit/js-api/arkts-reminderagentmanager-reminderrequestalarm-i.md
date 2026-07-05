# ReminderRequestAlarm

ReminderRequestAlarm extends ReminderRequest 闹钟实例对象，用于设置提醒的时间。

**Inheritance:** ReminderRequestAlarmextends: ReminderRequest.

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## hour

```TypeScript
hour: int
```

指明提醒的目标时刻，范围：[0, 23]。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## daysOfWeek

```TypeScript
daysOfWeek?: Array<int>
```

指明每周哪几天需要重复提醒。范围为周一到周日，对应数字为1到7，默认为空。

**Type:** Array<int>

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## minute

```TypeScript
minute: int
```

指明提醒的目标分钟，范围：[0, 59]。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

