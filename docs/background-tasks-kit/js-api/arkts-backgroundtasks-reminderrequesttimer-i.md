# ReminderRequestTimer

ReminderRequestTimer extends ReminderRequest

Defines a reminder for a scheduled timer.

**Inheritance/Implementation:** ReminderRequestTimer extends [ReminderRequest](arkts-backgroundtasks-reminderrequest-i.md)

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## repeatCount

```TypeScript
repeatCount?: number
```

The repeat count.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.ReminderAgent

## repeatInterval

```TypeScript
repeatInterval?: number
```

The repeat interval.
Unit: s.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.ReminderAgent

## triggerTimeInSeconds

```TypeScript
triggerTimeInSeconds: number
```

Number of seconds in the countdown timer.

Unit: s

**Type:** number

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

