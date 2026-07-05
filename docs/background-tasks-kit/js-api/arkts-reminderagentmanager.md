# @ohos.reminderAgentManager

本模块提供后台代理提醒的能力，即当应用被冻结或应用退出时，定时提醒功能将被系统服务代理。开发者可以调用本模块接口创建定时提醒，提醒类型支持倒计时、日历、闹钟三种。开发指导请参考 [代理提醒开发指南](docroot://task-management/agent-powered-reminder.md)。

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addExcludeDate](arkts-reminderagentmanager-addexcludedate-f.md#addExcludeDate-1) | 为指定id的周期性的日历提醒，添加不提醒日期（如每天提醒的日历，设置周二不提醒）。使用Promise异步回调。 |
| [addNotificationSlot](arkts-reminderagentmanager-addnotificationslot-f.md#addNotificationSlot-1) | 添加通知渠道。使用callback异步回调。 |
| [addNotificationSlot](arkts-reminderagentmanager-addnotificationslot-f.md#addNotificationSlot-2) | 添加通知渠道。使用Promise异步回调。 |
| [cancelAllReminders](arkts-reminderagentmanager-cancelallreminders-f.md#cancelAllReminders-1) | 取消当前应用设置的所有代理提醒。使用callback异步回调。 |
| [cancelAllReminders](arkts-reminderagentmanager-cancelallreminders-f.md#cancelAllReminders-2) | 取消当前应用设置的所有代理提醒。使用Promise异步回调。 |
| [cancelReminder](arkts-reminderagentmanager-cancelreminder-f.md#cancelReminder-1) | 取消指定id的代理提醒。使用callback异步回调。 |
| [cancelReminder](arkts-reminderagentmanager-cancelreminder-f.md#cancelReminder-2) | 取消指定id的代理提醒。使用Promise异步回调。 |
| [cancelReminderOnDisplay](arkts-reminderagentmanager-cancelreminderondisplay-f.md#cancelReminderOnDisplay-1) | 取消当前通知中心内显示的通知卡片，不取消代理提醒数据。例如：每天重复的提醒，该提醒正在通知中心内显示，该接口将通知从通知中心内取消，并且会按照设定的周期，在第二天再次提醒。 |
| [deleteExcludeDates](arkts-reminderagentmanager-deleteexcludedates-f.md#deleteExcludeDates-1) | 为指定id的周期性的日历提醒，删除设置的所有不提醒日期。使用Promise异步回调。 |
| [getAllValidReminders](arkts-reminderagentmanager-getallvalidreminders-f.md#getAllValidReminders-1) | 获取当前应用设置的所有[有效（未过期）的代理提醒](docroot://task-management/agent-powered-reminder.md#约束与限制)。使用Promise异步回调。 该接口调用需要申请ohos.permission.PUBLISH_AGENT_REMINDER权限。 |
| [getExcludeDates](arkts-reminderagentmanager-getexcludedates-f.md#getExcludeDates-1) | 为指定id的周期性的日历提醒，查询设置的所有不提醒日期。使用Promise异步回调。 |
| [getValidReminders](arkts-reminderagentmanager-getvalidreminders-f.md#getValidReminders-1) | 获取当前应用设置的所有[有效（未过期）的代理提醒](docroot://task-management/agent-powered-reminder.md#约束与限制)。使用callback异步回调。 |
| [getValidReminders](arkts-reminderagentmanager-getvalidreminders-f.md#getValidReminders-2) | 获取当前应用设置的所有[有效（未过期）的代理提醒](docroot://task-management/agent-powered-reminder.md#约束与限制)。使用Promise异步回调。 |
| [publishReminder](arkts-reminderagentmanager-publishreminder-f.md#publishReminder-1) | 发布后台代理提醒。使用callback异步回调。 > **说明：** > > 该接口需要申请通知弹窗权限 > [notificationManager.requestEnableNotification]{@link @ohos.notificationManager:notificationManager.requestEnableNotification(context: UIAbilityContext, callback: AsyncCallback<void>)} > 后调用。 > |
| [publishReminder](arkts-reminderagentmanager-publishreminder-f.md#publishReminder-2) | 发布后台代理提醒。使用Promise异步回调。 > **说明：** > > 该接口需要申请通知弹窗权限 > [notificationManager.requestEnableNotification]{@link @ohos.notificationManager:notificationManager.requestEnableNotification(context: UIAbilityContext, callback: AsyncCallback<void>)} > 后调用。 > |
| [removeNotificationSlot](arkts-reminderagentmanager-removenotificationslot-f.md#removeNotificationSlot-1) | 删除指定的通知渠道类型，使用callback异步回调。 |
| [removeNotificationSlot](arkts-reminderagentmanager-removenotificationslot-f.md#removeNotificationSlot-2) | 删除指定的通知渠道类型，使用Promise异步回调。 |
| [subscribeReminderState](arkts-reminderagentmanager-subscribereminderstate-f.md#subscribeReminderState-1) | 订阅代理提醒状态。使用Promise异步回调。 |
| [unsubscribeReminderState](arkts-reminderagentmanager-unsubscribereminderstate-f.md#unsubscribeReminderState-1) | 取消订阅代理提醒状态。使用Promise异步回调。 |
| [updateReminder](arkts-reminderagentmanager-updatereminder-f.md#updateReminder-1) | 更新指定id的代理提醒，使用Promise异步回调。仅[有效（未过期）](docroot://task-management/agent-powered-reminder.md#约束与限制)、未显示在通知中心的代理提醒支持更新。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ActionButton](arkts-reminderagentmanager-actionbutton-i.md) | 弹出的提醒中按钮的类型和标题。 |
| <!--DelRow-->[DataShareUpdate](arkts-reminderagentmanager-datashareupdate-i-sys.md) | 更新数据库需要的参数信息。 数据提供方需要在module.json5中的proxyData节点定义要共享的表的标识，读写权限和基本信息。配置方式请见 [数据提供方应用的开发](docroot://database/share-data-by-silent-access-sys.md#数据提供方应用的开发)。 |
| [LocalDateTime](arkts-reminderagentmanager-localdatetime-i.md) | 用于日历类提醒设置时指定时间信息。 |
| [MaxScreenWantAgent](arkts-reminderagentmanager-maxscreenwantagent-i.md) | 通知中心弹出提醒时，全屏显示自动拉起目标的ability信息。该接口为预留接口，暂不支持使用。 |
| [ReminderInfo](arkts-reminderagentmanager-reminderinfo-i.md) | 代理提醒信息，包含 ReminderRequest 和 ReminderId。 |
| [ReminderRequest](arkts-reminderagentmanager-reminderrequest-i.md) | 代理提醒对象，用于设置提醒类型、响铃时长等具体信息。 |
| [ReminderRequestAlarm](arkts-reminderagentmanager-reminderrequestalarm-i.md) | ReminderRequestAlarm extends ReminderRequest 闹钟实例对象，用于设置提醒的时间。 |
| [ReminderRequestCalendar](arkts-reminderagentmanager-reminderrequestcalendar-i.md) | ReminderRequestCalendar extends ReminderRequest 日历实例对象，用于设置提醒的时间。 |
| [ReminderRequestTimer](arkts-reminderagentmanager-reminderrequesttimer-i.md) | ReminderRequestTimer extends ReminderRequest 倒计时实例对象，用于设置提醒的时间。 |
| [ReminderState](arkts-reminderagentmanager-reminderstate-i.md) | 代理提醒状态信息。状态信息会在如下两种情况发送通知： 1. 用户点击代理提醒的通知按钮时，如果应用进程存在，则会发送用户点击的按钮类型的通知给应用。 如果应用未运行，则无法收到通知。 2. 由于第1点不能保证应用可以收到通知，因此应用注册新的回调函数时，会将该应用下所有用户点击的按钮类型回调给应用。 状态信息最多保存30天，应用注册新的回调函数时或者超过30天未注册回调函数，会删除缓存的状态信息。 |
| [WantAgent](arkts-reminderagentmanager-wantagent-i.md) | 跳转目标的ability信息。 |

### Enums

| Name | Description |
| --- | --- |
| [ActionButtonType](arkts-reminderagentmanager-actionbuttontype-e.md) | 提醒上的按钮的类型。 |
| [ReminderType](arkts-reminderagentmanager-remindertype-e.md) | 提醒的类型。 |
| [RingChannel](arkts-reminderagentmanager-ringchannel-e.md) | 自定义提示音的音频播放通道。 |

