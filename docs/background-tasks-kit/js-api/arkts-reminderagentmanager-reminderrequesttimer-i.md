# ReminderRequestTimer

ReminderRequestTimer extends ReminderRequest 倒计时实例对象，用于设置提醒的时间。

**Inheritance:** ReminderRequestTimerextends: ReminderRequest.

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## triggerTimeInSeconds

```TypeScript
triggerTimeInSeconds: long
```

指明倒计时的秒数。 单位：s

**Type:** long

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## repeatInterval

```TypeScript
repeatInterval?: long
```

重复周期，无默认值，未赋值时，无重复周期。需和repeatCount一起使用。 单位：s，范围：[86400, +∞)。超出范围返回错误码401。 26.0.0

**Type:** long

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.ReminderAgent

## repeatCount

```TypeScript
repeatCount?: int
```

重复次数，默认值为0，无限次重复。需和repeatInterval一起使用。 范围：[0, +∞)。超出范围返回错误码401。 26.0.0

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.ReminderAgent

