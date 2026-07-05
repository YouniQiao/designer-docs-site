# ReminderRequest

代理提醒对象，用于设置提醒类型、响铃时长等具体信息。

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## snoozeContentResourceId

```TypeScript
snoozeContentResourceId?: int
```

指明延时提醒内容的资源ID，通过`$r(资源名称).id`方法获取。

**Type:** int

**Since:** 18

**System capability:** SystemCapability.Notification.ReminderAgent

## forceDistributed

```TypeScript
forceDistributed?: boolean
```

通知是否强制进行全场景跨设备协同显示，默认为false。具体请参考 [NotificationRequest.forceDistributed]./notification/notificationRequest:NotificationRequest.forceDistributed - 设置为true时：通知将在所有协同设备上显示。 - 设置为false时：通知将按照协同管控名单显示。 **系统接口：** 此接口为系统接口。

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Notification.ReminderAgent

**System API:** This is a system API.

## slotType

```TypeScript
slotType?: notification.SlotType
```

指明提醒的通道渠道类型。

**Type:** notification.SlotType

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## snoozeContent

```TypeScript
snoozeContent?: string
```

指明延时提醒时需要显示的内容（不适用于倒计时提醒类型）。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## groupId

```TypeScript
groupId?: string
```

指明提醒使用相同的组id。相同组id中，一个提醒被点击不在提醒后，组内其他提醒也会被取消。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Notification.ReminderAgent

## ringChannel

```TypeScript
ringChannel?: RingChannel
```

指明自定义提示音的音频播放通道，默认为闹钟通道。

**Type:** RingChannel

**Since:** 20

**System capability:** SystemCapability.Notification.ReminderAgent

## reminderType

```TypeScript
reminderType: ReminderType
```

指明代理提醒类型。

**Type:** ReminderType

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## titleResourceId

```TypeScript
titleResourceId?: int
```

指明提醒标题的资源ID，通过`$r(资源名称).id`方法获取。

**Type:** int

**Since:** 18

**System capability:** SystemCapability.Notification.ReminderAgent

## snoozeSlotType

```TypeScript
snoozeSlotType?: notification.SlotType
```

指明延时提醒的通道渠道类型（不适用于倒计时提醒类型）。

**Type:** notification.SlotType

**Since:** 11

**System capability:** SystemCapability.Notification.ReminderAgent

## title

```TypeScript
title?: string
```

指明提醒标题。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## content

```TypeScript
content?: string
```

指明提醒内容。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## wantAgent

```TypeScript
wantAgent?: WantAgent
```

点击通知后需要跳转的目标ability信息。

**Type:** WantAgent

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## maxScreenWantAgent

```TypeScript
maxScreenWantAgent?: MaxScreenWantAgent
```

提醒到达时，全屏显示自动拉起目标的ability信息。如果设备正在使用中，则弹出一个通知横幅框。 说明：该接口为预留接口，暂不支持使用。

**Type:** MaxScreenWantAgent

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## actionButton

```TypeScript
actionButton?: [ActionButton?, ActionButton?, ActionButton?]
```

弹出的提醒通知中显示的按钮。 针对三方应用：最多支持两个按钮。 针对系统应用：从API version 10开始最多支持三个按钮，API version 10之前的版本最多支持两个按钮。

**Type:** [ActionButton?, ActionButton?, ActionButton?]

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

```TypeScript
actionButton?: Array<ActionButton>
```

Action button displayed on the reminder notification.

**Type:** Array<ActionButton>

**Since:** 23

**System capability:** SystemCapability.Notification.ReminderAgent

## contentResourceId

```TypeScript
contentResourceId?: int
```

指明提醒内容的资源ID，通过`$r(资源名称).id`方法获取。

**Type:** int

**Since:** 18

**System capability:** SystemCapability.Notification.ReminderAgent

## timeInterval

```TypeScript
timeInterval?: long
```

执行延时提醒间隔。 单位：s，最少30s（不适用于倒计时提醒类型）。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## notificationId

```TypeScript
notificationId?: int
```

指明提醒使用的通知的id号，需开发者传入，相同id号的提醒会覆盖，默认值为0。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## ringDuration

```TypeScript
ringDuration?: long
```

指明响铃时长。 单位：s，默认1s，范围：[0, 1800]。 值为0时：跟随系统设置中的通知铃声。 值大于0时：如果设置了[ReminderRequest.customRingUri]reminderAgentManager.ReminderRequest，则在指定的通道 [ReminderRequest.ringChannel]reminderAgentManager.ReminderRequest上响铃。否则使用代理提醒默认的自定义提示音。 响铃同时会触发振动，从API版本26.0.0开始，支持长振动，振动时长与响铃时长一致。API版本26.0.0之前版本，响铃时会快速振动一次。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## expiredContentResourceId

```TypeScript
expiredContentResourceId?: int
```

指明提醒过期后内容的资源ID，通过`$r(资源名称).id`方法获取。

**Type:** int

**Since:** 18

**System capability:** SystemCapability.Notification.ReminderAgent

## snoozeTimes

```TypeScript
snoozeTimes?: int
```

指明延时提醒次数，默认0次（不适用于倒计时提醒类型）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## tapDismissed

```TypeScript
tapDismissed?: boolean
```

通知是否自动清除，默认值为true，具体请参考 [NotificationRequest.tapDismissed]./notification/notificationRequest:NotificationRequest.tapDismissed - true：点击通知消息或通知按钮后，自动删除当前通知。 - false：点击通知消息或通知按钮后，保留当前通知。

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Notification.ReminderAgent

## customRingUri

```TypeScript
customRingUri?: string
```

指明自定义提示音的uri，提示音文件必须放在resources/rawfile目录下，支持m4a、aac、mp3、ogg、wav、flac、amr等格式。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Notification.ReminderAgent

## autoDeletedTime

```TypeScript
autoDeletedTime?: long
```

自动清除的时间。 数据格式：时间戳，单位：ms，具体请参考 [NotificationRequest.autoDeletedTime]./notification/notificationRequest:NotificationRequest.autoDeletedTime

**Type:** long

**Since:** 10

**System capability:** SystemCapability.Notification.ReminderAgent

## expiredContent

```TypeScript
expiredContent?: string
```

指明提醒过期后需要显示的内容。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## notDistributed

```TypeScript
notDistributed?: boolean
```

通知是否不进行全场景跨设备协同显示，默认为false。具体请参考 [NotificationRequest.notDistributed]./notification/notificationRequest:NotificationRequest.notDistributed - 设置为true时：通知仅在本设备上显示。 - 设置为false时：通知将在所有协同设备上显示。 **系统接口：** 此接口为系统接口。

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Notification.ReminderAgent

**System API:** This is a system API.

