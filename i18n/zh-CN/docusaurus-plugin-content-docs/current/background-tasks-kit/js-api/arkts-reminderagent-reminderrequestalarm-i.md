# ReminderRequestAlarm

闹钟实例对象，用于设置提醒的时间。

**继承实现关系：** ReminderRequestAlarm继承自：ReminderRequest。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.reminderAgentManager:reminderAgentManager.ReminderRequestAlarm

**系统能力：** SystemCapability.Notification.ReminderAgent

## 导入模块

```TypeScript
import { reminderAgent } from '@kit.BackgroundTasksKit';
```

## hour

```TypeScript
hour: number
```

指明提醒的目标时刻。

**类型：** number

**起始版本：** 7

**废弃版本：** 9

**替代接口：** reminderAgentManager.ReminderRequestAlarm.hour

**系统能力：** SystemCapability.Notification.ReminderAgent

## daysOfWeek

```TypeScript
daysOfWeek?: Array<number>
```

指明每周哪几天需要重复提醒。范围为周一到周末，对应数字为1到7。

**类型：** Array<number>

**起始版本：** 7

**废弃版本：** 9

**替代接口：** reminderAgentManager.ReminderRequestAlarm.daysOfWeek

**系统能力：** SystemCapability.Notification.ReminderAgent

## minute

```TypeScript
minute: number
```

指明提醒的目标分钟。

**类型：** number

**起始版本：** 7

**废弃版本：** 9

**替代接口：** reminderAgentManager.ReminderRequestAlarm.minute

**系统能力：** SystemCapability.Notification.ReminderAgent

