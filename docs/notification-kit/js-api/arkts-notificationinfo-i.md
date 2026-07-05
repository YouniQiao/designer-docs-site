# NotificationInfo

通知订阅扩展能力中 [onReceiveMessage](arkts-notificationsubscriberextensionability-c.md#onReceiveMessage) 回调的通知信息。

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## groupName

```TypeScript
readonly groupName?: string
```

通知组名称。默认情况下此参数为空。

**Type:** string

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## appIndex

```TypeScript
readonly appIndex: int
```

创建通知的应用包的分身索引标识，仅在分身应用中生效。

**Type:** int

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## deliveryTime

```TypeScript
readonly deliveryTime?: long
```

通知发布的时间戳（毫秒数）。

**Type:** long

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## appName

```TypeScript
readonly appName?: string
```

创建通知的应用程序名称。

**Type:** string

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## hashCode

```TypeScript
readonly hashCode: string
```

通知的唯一标识符。

**Type:** string

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## notificationSlotType

```TypeScript
readonly notificationSlotType: notificationManager.SlotType
```

通知渠道类型。

**Type:** notificationManager.SlotType

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## bundleName

```TypeScript
readonly bundleName: string
```

创建通知的包名。

**Type:** string

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## content

```TypeScript
readonly content: NotificationExtensionContent
```

通知内容。

**Type:** NotificationExtensionContent

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

