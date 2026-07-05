# ReminderRequestCalendar

ReminderRequestCalendar extends ReminderRequest 日历实例对象，用于设置提醒的时间。

**Inheritance:** ReminderRequestCalendarextends: ReminderRequest.

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## dateTime

```TypeScript
dateTime: LocalDateTime
```

指明提醒的目标时间。

**Type:** LocalDateTime

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## repeatDays

```TypeScript
repeatDays?: Array<int>
```

指明重复提醒的日期，范围：[1, 31]，默认为空。需和repeatMonths一起使用。

**Type:** Array<int>

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## endDateTime

```TypeScript
endDateTime?: LocalDateTime
```

指明提醒的结束时间。

**Type:** LocalDateTime

**Since:** 12

**System capability:** SystemCapability.Notification.ReminderAgent

## daysOfWeek

```TypeScript
daysOfWeek?: Array<int>
```

指明每周哪几天需要重复提醒。范围为周一到周日，对应数字为1到7，默认为空。

**Type:** Array<int>

**Since:** 11

**System capability:** SystemCapability.Notification.ReminderAgent

## rruleWantAgent

```TypeScript
rruleWantAgent?: WantAgent
```

自定义重复日程，指明需要拉起的 Service Extension。

**Type:** WantAgent

**Since:** 12

**System capability:** SystemCapability.Notification.ReminderAgent

**System API:** This is a system API.

## repeatMonths

```TypeScript
repeatMonths?: Array<int>
```

指明重复提醒的月份，范围：[1, 12]，默认为空。需和repeatDays一起使用。

**Type:** Array<int>

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

