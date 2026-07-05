# ReminderRequestCalendar

ReminderRequestCalendar extends ReminderRequest 日历实例对象，用于设置提醒的时间。

**继承实现关系：** ReminderRequestCalendar继承自：ReminderRequest。

**起始版本：** 9

**系统能力：** SystemCapability.Notification.ReminderAgent

## 导入模块

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## dateTime

```TypeScript
dateTime: LocalDateTime
```

指明提醒的目标时间。

**类型：** LocalDateTime

**起始版本：** 9

**系统能力：** SystemCapability.Notification.ReminderAgent

## repeatDays

```TypeScript
repeatDays?: Array<int>
```

指明重复提醒的日期，范围：[1, 31]，默认为空。需和repeatMonths一起使用。

**类型：** Array<int>

**起始版本：** 9

**系统能力：** SystemCapability.Notification.ReminderAgent

## endDateTime

```TypeScript
endDateTime?: LocalDateTime
```

指明提醒的结束时间。

**类型：** LocalDateTime

**起始版本：** 12

**系统能力：** SystemCapability.Notification.ReminderAgent

## daysOfWeek

```TypeScript
daysOfWeek?: Array<int>
```

指明每周哪几天需要重复提醒。范围为周一到周日，对应数字为1到7，默认为空。

**类型：** Array<int>

**起始版本：** 11

**系统能力：** SystemCapability.Notification.ReminderAgent

## rruleWantAgent

```TypeScript
rruleWantAgent?: WantAgent
```

自定义重复日程，指明需要拉起的 Service Extension。

**类型：** WantAgent

**起始版本：** 12

**系统能力：** SystemCapability.Notification.ReminderAgent

**系统接口：** 此接口为系统接口。

## repeatMonths

```TypeScript
repeatMonths?: Array<int>
```

指明重复提醒的月份，范围：[1, 12]，默认为空。需和repeatDays一起使用。

**类型：** Array<int>

**起始版本：** 9

**系统能力：** SystemCapability.Notification.ReminderAgent

