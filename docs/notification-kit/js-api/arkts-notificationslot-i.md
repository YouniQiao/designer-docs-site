# NotificationSlot

描述通知渠道，不同通知渠道对应的通知提醒方式不同。

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## lightEnabled

```TypeScript
lightEnabled?: boolean
```

是否闪灯。 - true：是。 - false：否。默认值为false。

**Type:** boolean

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## notificationLevel

```TypeScript
notificationLevel?: notificationManager.SlotLevel
```

通知级别。

**Type:** notificationManager.SlotLevel

**Since:** 20

**System capability:** SystemCapability.Notification.Notification

## lockscreenVisibility

```TypeScript
lockscreenVisibility?: int
```

在锁定屏幕上显示通知的模式。预留能力，暂不支持。

**Type:** int

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## level

```TypeScript
level?: notification.SlotLevel
```

通知级别。 从API version 7开始支持，从API version 20开始废弃，建议使用notificationLevel替代。

**Type:** notification.SlotLevel

**Since:** 7

**Deprecated since:** 20

**Substitute:** NotificationSlot#notificationLevel

**System capability:** SystemCapability.Notification.Notification

## sound

```TypeScript
sound?: string
```

该渠道的通知的自定义铃声文件名。该文件放在resources/rawfile目录下，支持m4a、aac、mp3、ogg、wav、flac、amr等格式。大小不超过243字节，超出部分会被截取。

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## badgeFlag

```TypeScript
badgeFlag?: boolean
```

是否显示角标。 - true：是。 - false：否。默认值为true。

**Type:** boolean

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## lightColor

```TypeScript
lightColor?: int
```

通知灯颜色。预留能力，暂不支持。

**Type:** int

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## notificationType

```TypeScript
notificationType?: notificationManager.SlotType
```

通道类型。

**Type:** notificationManager.SlotType

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## type

```TypeScript
type?: notification.SlotType
```

通道类型。 从API version 7开始支持，从API version 11开始废弃，建议使用notificationType替代。

**Type:** notification.SlotType

**Since:** 7

**Deprecated since:** 11

**Substitute:** NotificationSlot#notificationType

**System capability:** SystemCapability.Notification.Notification

## vibrationValues

```TypeScript
vibrationValues?: Array<long>
```

通知振动样式。预留能力，暂不支持。

**Type:** Array<long>

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## enabled

```TypeScript
readonly enabled?: boolean
```

表示是否允许发布此通知渠道的通知。 - true：允许。 - false：禁止。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

## vibrationEnabled

```TypeScript
vibrationEnabled?: boolean
```

是否可振动。 - true：是。 - false：否。默认值为false。

**Type:** boolean

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## authorizedStatus

```TypeScript
readonly authorizedStatus?: int
```

授权状态。 - 0：表示已授权。 - 1：表示待授权。

**Type:** int

**Since:** 12

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## reminderMode

```TypeScript
readonly reminderMode?: int
```

通知提醒模式。 - bit0：铃声提示。0表示关闭，1表示开启。 - bit1：锁屏。0表示关闭，1表示开启。 - bit2：横幅。0表示关闭，1表示开启。 - bit3：亮屏。0表示关闭，1表示开启。 - bit4：振动。0表示关闭，1表示开启。 - bit5：状态栏通知图标。0表示关闭，1表示开启。

**Type:** int

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## bypassDnd

```TypeScript
bypassDnd?: boolean
```

是否在系统中绕过免打扰模式。 - true：是。 - false：否。默认值为false。

**Type:** boolean

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## desc

```TypeScript
desc?: string
```

通知渠道描述信息。大小不超过243字节，超出部分会被截取。

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

