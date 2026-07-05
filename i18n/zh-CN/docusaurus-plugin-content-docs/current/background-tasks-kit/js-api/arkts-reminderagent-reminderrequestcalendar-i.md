# ReminderRequestCalendar

日历实例对象，用于设置提醒的时间。

**继承实现关系：** ReminderRequestCalendar继承自：ReminderRequest。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.reminderAgentManager:reminderAgentManager.ReminderRequestCalendar

**系统能力：** SystemCapability.Notification.ReminderAgent

## 导入模块

```TypeScript
import { reminderAgent } from '@kit.BackgroundTasksKit';
```

## dateTime

```TypeScript
dateTime: LocalDateTime
```

指明提醒的目标时间。

**类型：** LocalDateTime

**起始版本：** 7

**废弃版本：** 9

**替代接口：** reminderAgentManager.ReminderRequestCalendar.dateTime

**系统能力：** SystemCapability.Notification.ReminderAgent

## repeatDays

```TypeScript
repeatDays?: Array<number>
```

指明重复提醒的日期。

**类型：** Array<number>

**起始版本：** 7

**废弃版本：** 9

**替代接口：** reminderAgentManager.ReminderRequestCalendar.repeatDays

**系统能力：** SystemCapability.Notification.ReminderAgent

## repeatMonths

```TypeScript
repeatMonths?: Array<number>
```

指明重复提醒的月份。

**类型：** Array<number>

**起始版本：** 7

**废弃版本：** 9

**替代接口：** reminderAgentManager.ReminderRequestCalendar.repeatMonths

**系统能力：** SystemCapability.Notification.ReminderAgent

